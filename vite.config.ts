import path from 'path';
import {defineConfig} from 'vite';

const pages = [
  'index', 'itineraries', 'itinerary', 'how-it-works', 'about',
  'blog', 'request-quote', 'terms', 'privacy', 'post',
  'payment-plans', 'cookies'
];

// Build input entries for both /en/ and /nl/ folders
const input: Record<string, string> = {
  root: path.resolve(__dirname, 'index.html'),
};
for (const lang of ['en', 'nl']) {
  for (const page of pages) {
    input[`${lang}_${page}`] = path.resolve(__dirname, `${lang}/${page}.html`);
  }
}

export default defineConfig({
  build: {
    rollupOptions: { input },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
});
