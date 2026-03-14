# Portfolio

A clean, minimal personal portfolio site for a software engineer.

## Project Structure

```
portfolio/
├── index.html        ← All the page content & structure
├── css/
│   └── style.css     ← All styles, variables, dark mode, responsive
├── js/
│   └── main.js       ← Dark mode toggle, scroll reveal, contact form
└── your-cv.pdf       ← Drop your CV here (rename to match the href in index.html)
```

## How to run locally

Just open `index.html` in your browser — no build step needed.

For a better local dev experience (so relative paths work properly), use a simple server:
```bash
# Python
python3 -m http.server 3000

# Node (npx)
npx serve .
```
Then visit `http://localhost:3000`.

## Customising

| What                  | Where                              |
|-----------------------|------------------------------------|
| Your name & title     | `index.html` — hero section        |
| About bio & stats     | `index.html` — about section       |
| Skills                | `index.html` — skills section      |
| Projects              | `index.html` — projects section    |
| Contact links         | `index.html` — contact section     |
| Colors & fonts        | `css/style.css` — `:root` block    |
| CV file               | Drop PDF in root, update `href`    |

## Deploying

Easiest options (all free):
- **GitHub Pages** — push to a repo, enable Pages in Settings
- **Netlify** — drag & drop the folder at netlify.com/drop
- **Vercel** — `npx vercel` in the folder
