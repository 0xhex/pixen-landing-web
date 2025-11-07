# Pixen Landing Page

A modern, beautiful landing page for the Pixen mobile app - an AI-powered photo transformation app available on the App Store.

## Features

- 🎨 **Hero Section** - Eye-catching hero with app icon, name, and App Store download badge
- ✨ **Features Section** - Showcase of key app features
- 🎬 **Templates Showcase** - Dynamic template gallery with before/after thumbnails fetched from the Pixen API
- 📹 **Video Showcase** - Embedded splash video demonstration
- 📱 **Responsive Design** - Fully responsive and mobile-friendly
- 🎯 **Modern UI** - Beautiful gradients, animations, and smooth transitions
- 🔒 **Legal Pages** - Privacy Policy and Terms of Use pages
- 🎨 **Eurostile Font** - Using Orbitron as a geometric alternative (with instructions for Eurostile)

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **React** - UI library

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
pixen-landing-web/
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   ├── privacy/
│   │   └── page.tsx      # Privacy Policy page
│   └── terms/
│       └── page.tsx      # Terms of Use page
├── components/
│   ├── Hero.tsx          # Hero section
│   ├── Features.tsx      # Features section
│   ├── TemplatesShowcase.tsx  # Templates gallery with before/after
│   ├── VideoShowcase.tsx      # Video demo section
│   └── Footer.tsx        # Footer component
├── public/
│   ├── appicon.png       # App icon
│   └── splash_open_video.mp4  # Splash video
└── package.json
```

## API Integration

The landing page integrates with the Pixen Template API:
- **Base URL**: `https://pixen-npm-41323093d675.herokuapp.com`
- **Endpoint**: `GET /templates` - Fetches all available templates

The templates are displayed in a dynamic gallery with category filtering (Trending, For You, Featured, Top Hits, Festival). Templates can display before/after thumbnails if `thumbnailBefore` and `thumbnailAfter` fields are provided in the API response.

## Customization

### Update App Store Link

Edit the App Store badge links in:
- `components/Hero.tsx` (line ~50)
- `components/Footer.tsx` (line ~30)

Replace `https://apps.apple.com/app/pixen` with your actual App Store URL.

### Update API Endpoint

If your API endpoint changes, update it in:
- `components/TemplatesShowcase.tsx` (line ~30)

### Styling

The project uses Tailwind CSS. Customize colors in `tailwind.config.js` and add custom styles in `app/globals.css`.

### Using Eurostile Font

The project currently uses **Orbitron** as a geometric alternative to Eurostile (loaded via Next.js font optimization). If you have a Eurostile license:

1. Place your Eurostile font files in `/public/fonts/` (e.g., `Eurostile-Regular.woff2`, `Eurostile-Bold.woff2`)
2. Uncomment the `@font-face` declaration in `app/globals.css`
3. Update `tailwind.config.js` to use `'Eurostile'` as the primary font in the `eurostile` fontFamily

The font is applied to headings using the `font-eurostile` class.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Or any Node.js hosting service

## License

Copyright © 2025 Pixen. All rights reserved.

