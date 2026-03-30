# arbs.dev — Graham's Portfolio

Personal portfolio and online resume for Graham, software engineer and founder of CapyBearHug LLC. Live at [arbs.dev](https://arbs.dev).

## Project Structure

```
portfolio/
├── index.html        ← All page content & structure
├── css/
│   └── style.css     ← All styles, CSS variables, dark mode, responsive
└── js/
    └── main.js       ← Dark mode toggle, scroll reveal, contact form UI
```

## Running Locally

No build step needed. Serve the directory with:

```bash
# Python
python3 -m http.server 3000

# Node
npx serve .
```

Then visit `http://localhost:3000`.

## Customising

All content lives in `index.html`.

| What | Where |
|------|-------|
| Name & headline | `index.html` — hero section |
| Bio & meta (location, status) | `index.html` — about section |
| Projects | `index.html` — projects section |
| Contact links | `index.html` — contact section |
| Colors & fonts | `css/style.css` — `:root` block |

## Deploying

Static site, no configuration needed:

- **GitHub Pages** — push to a repo, enable Pages in Settings
- **Netlify** — drag & drop the folder at netlify.com/drop
- **Vercel** — `npx vercel` in the folder
