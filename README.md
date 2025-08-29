# Hope and Despair

A clean, editorial-style website that maps the emotional landscape of our times through stories of progress and setback.

## Features

- **Three Content Categories**: Hope (🌱), Despair (⚡), and Context (🔍)
- **Clean Editorial Design**: Typography optimized for reading with Source Serif 4
- **Dark/Light Theme**: Automatic theme switching with persistent preference
- **Static Site**: Fast loading with Cloudflare Pages deployment
- **Image Support**: Simple static images in `/public/images/` folder
- **PagesCMS Ready**: Compatible with headless CMS solutions

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Adding Content

### Images
Simply add images to the `public/images/` folder and reference them in your content:
```markdown
![Description](/images/my-image.jpg)
```

### Articles
This project is designed to work with:
- **PagesCMS** - Headless CMS for Astro
- **Manual Markdown** - Add `.md` files to `src/content/` (when content collections are set up)
- **Terminal-based workflows** - Perfect for developers who prefer file-based content

## Project Structure

```
hope-despair-v2/
├── public/
│   ├── images/          # Static images go here
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Navigation.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
├── astro.config.mjs     # Astro configuration
├── wrangler.toml        # Cloudflare Pages config
└── package.json
```

## Deployment

### Cloudflare Pages (Recommended)
1. Push to GitHub
2. Connect to Cloudflare Pages
3. Build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Framework preset**: Astro

### Other Platforms
This is a standard Astro static site and can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting provider

## Theme Customization

The site uses CSS custom properties for easy theming. Key variables are defined in `src/layouts/Layout.astro`:

```css
:root {
  --bg-primary: #ffffff;
  --text-primary: #111111;
  --accent-color: #9cae9c;
  /* ... more variables */
}
```

## Content Categories

- **Hope**: Stories of progress, breakthroughs, and positive developments
- **Despair**: Stories of setbacks, challenges, and concerning trends  
- **Context**: Analysis, background information, and broader perspective

Each category has its own icon and color scheme for visual distinction.
