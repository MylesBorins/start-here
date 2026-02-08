# Start Here

> A minimal static website starter template

## Project Structure

```
start-here/
├── public/              # Source files
│   ├── index.html       # Main HTML page
│   ├── index.css        # Styles
│   ├── index.mjs        # Main JavaScript entry
│   ├── particle.mjs     # Particle system module
│   └── images/          # Static images
├── dist/                # Built files (generated)
├── rollup.config.js     # JS bundler config
├── postcss.config.cjs   # CSS processor config
├── eslint.config.js     # Linter config
├── AGENTS.md            # AI assistant guidelines
└── package.json         # Dependencies and scripts
```

## Getting Started

```bash
npm install
npm run dev
```

This starts a development server with hot reload at `http://localhost:3000`.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with hot reload (browser-sync on port 3000) |
| `npm run build` | Build for production to `/dist` |
| `npm start` | Build and serve production files (serve on port 3000) |
| `npm test` | Run ESLint |

Always use npm scripts - never run tools like `serve` or `browser-sync` directly.

## Build Pipeline

The build process:
- Bundles and minifies JS with Rollup
- Compresses CSS with PostCSS/cssnano
- Minifies HTML with html-minifier-terser
- Copies images to dist

All output goes to `/dist`.

## Customization

### Changing Styles

Edit `public/index.css`. Change colors, fonts, or add new styles.

### Adding JavaScript

The JS is modular - `index.mjs` is the entry point and imports from `particle.mjs`. Add new modules and import them as needed. Rollup bundles everything into a single file for production.

### Meta Tags

Update the Open Graph and Twitter meta tags in `public/index.html` for proper social sharing.

## Deployment

### GitHub Pages (Default)

Push to `main` branch - the included GitHub Action deploys automatically.

### Other Platforms

Build first, then deploy the `dist/` folder:

```bash
npm run build
# Upload dist/ to your host
```

Works with Netlify, Vercel, Cloudflare Pages, or any static host.

## License

Apache 2.0

## Code of Conduct

This project follows the [Contributor Covenant](https://www.contributor-covenant.org/). By participating, you agree to uphold this code.
