import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // API routes can go here if needed
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
  });

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom', // Use custom to handle HTML files manually or let Vite handle them
    });
    app.use(vite.middlewares);
    
    // Serve HTML files in dev mode
    app.use('*', async (req, res, next) => {
      const url = req.originalUrl;
      try {
        // If it's a request for an HTML file or a route that should serve one
        let templatePath = '';
        if (url === '/' || url === '/index.html') {
          templatePath = 'index.html';
        } else if (url.endsWith('.html')) {
          templatePath = url.slice(1);
        } else {
          // Try to match a route to an HTML file (e.g., /about -> about.html)
          templatePath = `${url.slice(1)}.html`;
        }

        const fs = await import('fs');
        if (fs.existsSync(path.resolve(__dirname, templatePath))) {
          let template = fs.readFileSync(path.resolve(__dirname, templatePath), 'utf-8');
          template = await vite.transformIndexHtml(url, template);
          res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
        } else {
          next();
        }
      } catch (e) {
        vite.ssrFixStacktrace(e as Error);
        next(e);
      }
    });
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    
    // Serve HTML files from dist in production
    app.get('*', async (req, res) => {
      const url = req.path;
      if (url === '/' || url === '/index.html') {
        res.sendFile(path.join(distPath, 'index.html'));
      } else if (url.endsWith('.html')) {
        res.sendFile(path.join(distPath, url));
      } else {
        // Try to serve the .html version of the path
        const htmlPath = path.join(distPath, `${url}.html`);
        const fs = await import('fs');
        if (fs.existsSync(htmlPath)) {
          res.sendFile(htmlPath);
        } else {
          res.sendFile(path.join(distPath, 'index.html'));
        }
      }
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
