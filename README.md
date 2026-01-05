# Starphone - Optimized & Enhanced 🚀

> **Latest Update**: January 2026 - Major framework upgrade, SEO optimization, JA4 Atlas integration

## Overview
Starphone provides secure, reliable public communication solutions for extreme environments, from cities to space.

## 🎯 Recent Improvements

### Framework Upgrade
- **SvelteKit**: v1.30.4 → **v2.14.0** (latest)
- **Svelte**: v3.59.2 → **v5.16.0** (Svelte 5)
- **Vite**: v4.5.14 → **v6.0.7**

### SEO Optimization ✅
- Custom SEO component with dynamic meta tags
- JSON-LD structured data
- Open Graph & Twitter Cards
- Dynamic sitemap.xml
- Robots.txt configuration

### Media Optimization ✅
- OptimizedImage component (lazy loading)
- OptimizedVideo component
- Responsive images with proper sizing

### JA4 Atlas Integration 🔒
- Real-time sensor data collection
- JA4 fingerprinting for security
- API endpoint: `/api/sensor-data`
- Interactive sensor dashboard
- Labels: project=starphone, sensor=environmental

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Development server
pnpm dev

# Build for production
pnpm build

# Preview production
pnpm preview
```

## 📦 Repository Cleanup Needed

**Current size**: ~150MB  
**Target size**: ~10-20MB

See [CLEANUP.md](./CLEANUP.md) for detailed instructions on:
- Removing 42MB of video files (host on YouTube/Vimeo)
- Removing 18MB PowerPoint file (host on Google Drive)
- Cleaning git history of large files

## 🔧 New Components

- `OptimizedImage.svelte` - Lazy loading images with fade-in
- `OptimizedVideo.svelte` - Efficient video player
- `SEO.svelte` - Dynamic meta tags per page
- `SensorDashboard.svelte` - Real-time sensor monitoring

## 🌐 API Endpoints

- `/api/sensor-data` - Submit sensor data to JA4 Atlas
- `/sitemap.xml` - Dynamic sitemap generation
- `/robots.txt` - Search engine directives

## 🔒 JA4 Atlas Configuration

- **Endpoint**: https://ja4-atlas.platphormnews.com/api/ingest
- **Sensor ID**: starphone-sensor-001
- **Location**: Starbase, TX
- **Project**: starphone
- **Type**: iot-environmental

## 📝 SEO Coverage

All pages now have proper SEO:
- Homepage (/)
- About (/about)
- How It Works (/how-it-works)
- Gallery (/gallery)
- Press (/press)
- Contact (/contact)
- Support (/support)

## 🔗 Links

- **Website**: https://www.thestarphone.com
- **JA4 Atlas**: https://ja4-atlas.platphormnews.com
- **Support**: https://givebutter.com/PH3AR
- **Patreon**: https://www.patreon.com/bePatron?u=25616382

## 📚 Documentation

- [CLEANUP.md](./CLEANUP.md) - Repository cleanup guide
- [package.json](./package.json) - Dependencies
- [svelte.config.js](./svelte.config.js) - SvelteKit configuration

## 🧪 Testing

```bash
# Run tests
pnpm test

# Type checking
pnpm check
```

## 🚢 Deployment

Optimized for Vercel deployment with edge runtime:

```bash
vercel --prod
```

---

**Last updated**: January 4, 2026  
**Built with**: SvelteKit 2, Svelte 5, Vite 6
