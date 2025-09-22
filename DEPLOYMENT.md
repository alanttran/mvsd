# Deployment Guide for Miss Vietnam San Diego Website

This guide explains how to deploy the website to different environments with the correct base paths.

## Build Commands

### For GitHub Pages Deployment

```bash
npm run build:github
```

- Uses base path: `/mvsd/`
- Generates sitemap with GitHub Pages URLs
- Optimized for GitHub Pages hosting

### For Production Deployment

```bash
npm run build:production
```

- Uses base path: `/`
- Generates sitemap with production URLs
- Optimized for custom domain hosting

### Preview Commands

```bash
# Preview GitHub Pages build locally
npm run preview:github

# Preview production build locally
npm run preview:production
```

## Environment Variables

The build process uses the following environment variables:

- `NODE_ENV`: Set to `production` for builds
- `VITE_DEPLOY_TARGET`: Set to `github` or `production`

## Deployment Targets

### GitHub Pages

- **Base URL**: `https://yourusername.github.io/mvsd`
- **Base Path**: `/mvsd/`
- **Build Command**: `npm run build:github`
- **Deployment**: Automatic via GitHub Actions

### Production (Custom Domain)

- **Base URL**: `https://missvietnamsandiego.com`
- **Base Path**: `/`
- **Build Command**: `npm run build:production`
- **Deployment**: Manual upload to web server

## Configuration Files

### Vite Configuration (`vite.config.js`)

- Dynamically sets base path based on `VITE_DEPLOY_TARGET`
- Optimizes assets for different deployment targets

### SEO Configuration (`src/composables/useSEO.js`)

- Automatically adjusts URLs based on deployment target
- Updates structured data with correct base URLs

### Sitemap Generation (`scripts/generate-sitemap.js`)

- Generates sitemap.xml with correct URLs for each deployment target
- Automatically called during build process

## GitHub Actions Workflow

The `.github/workflows/deploy.yml` file automatically:

1. Builds the site for GitHub Pages
2. Deploys to GitHub Pages on push to main branch
3. Uses the correct base path and URLs

## Manual Deployment Steps

### For GitHub Pages:

1. Push code to main branch
2. GitHub Actions will automatically build and deploy
3. Site will be available at `https://yourusername.github.io/mvsd`

### For Production:

1. Run `npm run build:production`
2. Upload contents of `dist/` folder to your web server
3. Configure your web server to serve the files
4. Set up your custom domain

## Troubleshooting

### Common Issues:

1. **Wrong base path**: Make sure you're using the correct build command
2. **Broken links**: Check that `VITE_DEPLOY_TARGET` is set correctly
3. **Sitemap issues**: Run the sitemap generation script manually
4. **Asset loading**: Verify the base path matches your deployment setup

### Testing Locally:

```bash
# Test GitHub Pages build
npm run build:github
npm run preview:github

# Test production build
npm run build:production
npm run preview:production
```

## Custom Domain Setup

If you want to use a custom domain with GitHub Pages:

1. Add your domain to the `CNAME` file in the repository root
2. Update the GitHub Actions workflow to use your domain
3. Configure DNS settings to point to GitHub Pages

## File Structure After Build

```
dist/
├── index.html
├── assets/
│   ├── css/
│   ├── js/
│   └── images/
├── sitemap.xml
└── robots.txt
```

The build process automatically:

- Optimizes all assets
- Generates correct URLs
- Creates SEO-friendly files
- Handles different base paths

---

_For questions about deployment, check the build logs and ensure all environment variables are set correctly._
