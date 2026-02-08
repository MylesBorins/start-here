# Agent Instructions

Guidelines for AI assistants working on this project.

## Running the Project

Always use npm scripts, never run tools directly:

```bash
npm run dev    # Development server (browser-sync, port 3000)
npm run build  # Production build
npm start      # Build + serve production (port 3000)
npm test       # Linting
```

Do NOT run `serve`, `browser-sync`, `rollup`, `postcss`, etc. directly - they may not be in PATH.

## Project Structure

- `public/` - Source files (edit these)
- `dist/` - Built output (generated, do not edit)
- JS is modular: `index.mjs` imports from `particle.mjs`
- Rollup bundles all JS into single file for production

## Testing Changes

1. Run `npm run dev` for development with hot reload
2. Run `npm test` to lint before committing
3. Run `npm start` to verify production build works
