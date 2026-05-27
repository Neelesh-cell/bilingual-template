# Bilingual Cognitive Accessibility Demo

A lightning-fast, zero-framework landing page demonstrating semantic HTML structure, dynamic scroll navigation, and instantaneous client-side bilingual translation.

## Features

- **Vanilla HTML/CSS/JS**: Extremely lightweight with zero dependencies.
- **Semantic Accordions**: Uses native `<details>` and `<summary>` tags to chunk content and reduce cognitive load. The `#hero` section stays visible as an introduction.
- **Dynamic Navigation**: Smooth scrolling with an `IntersectionObserver` that highlights the currently viewed section in the sticky nav.
- **Reading Progress Bar**: A horizontal progress bar integrated into the navigation tracks the user's scroll depth from 0% to 100%.
- **Zero-Reload Translations**: A built-in JS dictionary allows for instant swapping between English (EN) and Spanish (ES) text without dropping scroll position or causing visual jank.
- **Accessibility-First**: Designed with high-contrast UI, generous whitespace, legible typography, and solid `:focus-visible` states.

## Running Locally

Because this uses no build steps, you can serve the directory with any local static HTTP server.

If you have Python installed:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000`.

If you have Node.js and `serve` installed:
```bash
npx serve .
```

## Deployment

This project is configured to be deployed easily to Vercel using the provided `vercel.json` file.

1. Install the Vercel CLI (if not installed):
   ```bash
   npm i -g vercel
   ```

2. Deploy the app:
   ```bash
   vercel
   ```

Follow the prompts to link the project to your Vercel account. For a production deployment, run:
```bash
vercel --prod
```
