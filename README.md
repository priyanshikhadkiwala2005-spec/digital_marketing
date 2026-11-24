# Exotic Infotech — Social Media & Digital Marketing Website (React)

React + Vite website for Exotic Infotech. Light theme in the logo colours (blue `#007CEC` + lime `#95E130`),
with smooth scroll, scroll animations and full mobile responsiveness.

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
npm run preview    # preview the build
```
A ready-made build is already included in `dist/` — upload that folder to any static host.

## Pages
Home · About · Services (with 130+ item rate card, search, turnaround times) · Packages (3 plans, comparison,
add-ons, ads-fee calculator, billing summary, T&C) · Blog (4 articles) · Contact (form → WhatsApp / email) · 404

## ⚠️ Edit before going live
**`src/data/site.js`** — replace the placeholder phone, WhatsApp number, email, hours and social links.

| What | File |
|---|---|
| Contact details, social links, photos | `src/data/site.js` |
| Packages, comparison, add-ons, T&C, turnaround | `src/data/packages.js` |
| Individual service rates (from quotation) | `src/data/rates.js` |
| Services, industries, FAQ, process, blog posts | `src/data/content.js` |
| Colours, fonts, layout | `src/styles/global.css` (CSS variables at the top) |
| Logo | `src/assets/logo.png`, `public/favicon.png`, `public/logo-192.png` |
| Brand videos | `public/media/brand-reel.mp4` (phone), `public/media/brand-film.mp4` (About page) |

### Photos
Photos load from Unsplash (free to use). To use your own: put images in `public/images/` and in
`src/data/site.js` change the `photos` entries, or pass `src="/images/your-photo.jpg"` to the `<Img>` component.
If any photo fails to load, a branded placeholder with the logo is shown automatically.

## Hosting
- **Netlify:** drag-and-drop the `dist/` folder (`public/_redirects` handles page routes).
- **Vercel:** import the project (`vercel.json` included).
- **cPanel / Hostinger:** upload the contents of `dist/` to `public_html` and add an `.htaccess` that rewrites all routes to `index.html`.
