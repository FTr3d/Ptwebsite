import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          itineraries: path.resolve(__dirname, 'itineraries.html'),
          itinerary: path.resolve(__dirname, 'itinerary.html'),
          howItWorks: path.resolve(__dirname, 'how-it-works.html'),
          about: path.resolve(__dirname, 'about.html'),
          blog: path.resolve(__dirname, 'blog.html'),
          requestQuote: path.resolve(__dirname, 'request-quote.html'),
          terms: path.resolve(__dirname, 'terms.html'),
          privacy: path.resolve(__dirname, 'privacy.html'),
          post: path.resolve(__dirname, 'post.html'),
          paymentPlans: path.resolve(__dirname, 'payment-plans.html'),
          cookies: path.resolve(__dirname, 'cookies.html'),
        },
      },
    },
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
