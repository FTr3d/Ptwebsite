# Prestige Travels

Luxury bespoke travel agency website — a static multi-page HTML site served with Express.

## Local Development

**Prerequisites:** Node.js 18+

1. Install dependencies:
   ```
   npm install
   ```

2. Start the dev server:
   ```
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000)

## Production Build

```
npm run build
npm start
```

## Structure

- `/en/` and `/nl/` — English and Dutch page versions
- `/src/data.js` — All destination, itinerary, FAQ, and blog post data
- `/src/app.js` — Client-side rendering and interactions
- `/src/styles.css` — Global styles and CSS custom properties
- `/src/translations.js` — Bilingual translation strings
- `server.ts` — Express server (dev + production)
