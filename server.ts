import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = process.env.PORT || 3000;

  // Health check
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
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

    const fs = require('fs');
    if (fs.existsSync(exactPath) && fs.statSync(exactPath).isFile()) {
      return res.sendFile(exactPath);
    }
    if (fs.existsSync(htmlPath)) {
      return res.sendFile(htmlPath);
    }

    // Fallback to /en/index.html
    res.redirect(302, '/en/index.html');
  });

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
