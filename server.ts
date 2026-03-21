import 'dotenv/config';
import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = process.env.PORT || 3000;

  app.use(express.json());
  // Health check
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
  });

    // Quote form submission endpoint
      app.post('/api/quote', async (req: any, res: any) => {
          const { name, email, phone, destination, dates, guests, budget, message, itinerary } = req.body;
              const transporter = nodemailer.createTransport({ host: process.env.SMTP_HOST || 'smtp.gmail.com', port: 587, secure: false, auth: { user: process.env.SMTP_USER || '', pass: process.env.SMTP_PASS || '' } });
                  const subject = 'New Quote Request from ' + (name || 'Unknown');
                      const html = '<h2>New Quote - Prestige Travels</h2><p><b>Name:</b> ' + name + '</p><p><b>Email:</b> ' + email + '</p><p><b>Phone:</b> ' + (phone||'N/A') + '</p><p><b>Destination:</b> ' + (destination||'N/A') + '</p><p><b>Dates:</b> ' + (dates||'N/A') + '</p><p><b>Guests:</b> ' + (guests||'N/A') + '</p><p><b>Budget:</b> ' + (budget||'N/A') + '</p><p><b>Itinerary:</b> ' + (itinerary||'N/A') + '</p><p><b>Message:</b> ' + (message||'N/A') + '</p>';
                          try {
                                  if (process.env.SMTP_USER && process.env.SMTP_PASS) {
                                            await transporter.sendMail({ from: process.env.SMTP_USER, to: process.env.CONTACT_EMAIL || 'info@prestige-travels.nl', subject, html });
                                  } else { console.log('Quote received (no SMTP config):', name, email); }
                                        res.json({ success: true });
                                } catch (error) { console.error('Email error:', error); res.json({ success: true }); }
                                  
                          });

  // Root redirect — detect browser language (before static middleware)
  app.get('/', (req, res) => {
    const acceptLang = req.headers['accept-language'] || '';
    const isNL = acceptLang.toLowerCase().startsWith('nl');
    res.redirect(302, isNL ? '/nl/index.html' : '/en/index.html');
  });

  // Serve static files from root (handles /src/, /en/, /nl/)
  app.use(express.static(__dirname, {
    extensions: ['html']
  }));

  // Catch-all: try to serve the HTML file
  app.get('*', (req, res) => {
    const url = req.path;

    // Try exact file
    const exactPath = path.join(__dirname, url);
    const htmlPath = path.join(__dirname, url + '.html');

    if (fs.existsSync(exactPath) && fs.statSync(exactPath).isFile()) {
      return res.sendFile(exactPath);
    }
    if (fs.existsSync(htmlPath)) {
      return res.sendFile(htmlPath);
    }

    // Fallback to 404 page
    res.status(404).sendFile(path.join(__dirname, '404.html'));
  });

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
