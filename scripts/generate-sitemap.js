#!/usr/bin/env node

/**
 * Generate sitemap.xml based on deployment target
 * Usage: node scripts/generate-sitemap.js [github|production]
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get deployment target from command line argument or environment
const deployTarget =
  process.argv[2] || process.env.VITE_DEPLOY_TARGET || "production";

// Determine base URL based on deployment target
const getBaseUrl = () => {
  if (deployTarget === "github") {
    return "https://yourusername.github.io/mvsd";
  }
  return "https://missvietnamsandiego.com";
};

const baseUrl = getBaseUrl();

// Sitemap content
const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  
  <!-- Homepage -->
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>2024-01-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <image:image>
      <image:loc>${baseUrl}/src/assets/banner.jpg</image:loc>
      <image:title>Miss Vietnam San Diego Homepage</image:title>
    </image:image>
  </url>
  
  <!-- About Page -->
  <url>
    <loc>${baseUrl}/about</loc>
    <lastmod>2024-01-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <image:image>
      <image:loc>${baseUrl}/src/assets/about/banner-about.jpg</image:loc>
      <image:title>About Miss Vietnam San Diego</image:title>
    </image:image>
  </url>
  
  <!-- Sisterhood Page -->
  <url>
    <loc>${baseUrl}/sisterhood</loc>
    <lastmod>2024-01-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <image:image>
      <image:loc>${baseUrl}/src/assets/banner-sisterhood.jpg</image:loc>
      <image:title>MVSD Sisterhood</image:title>
    </image:image>
  </url>
  
  <!-- Competition Page -->
  <url>
    <loc>${baseUrl}/competition</loc>
    <lastmod>2024-01-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <image:image>
      <image:loc>${baseUrl}/src/assets/banner-competition.jpg</image:loc>
      <image:title>MVSD Competition</image:title>
    </image:image>
  </url>
  
  <!-- Impact Page -->
  <url>
    <loc>${baseUrl}/impact</loc>
    <lastmod>2024-01-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <image:image>
      <image:loc>${baseUrl}/src/assets/banner-impact.jpg</image:loc>
      <image:title>MVSD Community Impact</image:title>
    </image:image>
  </url>
  
  <!-- Reign Page -->
  <url>
    <loc>${baseUrl}/reign</loc>
    <lastmod>2024-01-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <image:image>
      <image:loc>${baseUrl}/src/assets/banner-reign.jpg</image:loc>
      <image:title>MVSD Royal Court</image:title>
    </image:image>
  </url>
  
  <!-- Apply Page -->
  <url>
    <loc>${baseUrl}/apply</loc>
    <lastmod>2024-01-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <image:image>
      <image:loc>${baseUrl}/src/assets/section-apply-now.jpg</image:loc>
      <image:title>Apply to Miss Vietnam San Diego</image:title>
    </image:image>
  </url>
  
  <!-- Events Page -->
  <url>
    <loc>${baseUrl}/events</loc>
    <lastmod>2024-01-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
    <image:image>
      <image:loc>${baseUrl}/src/assets/banner-events.jpg</image:loc>
      <image:title>MVSD Events and Announcements</image:title>
    </image:image>
  </url>
  
</urlset>`;

// Write sitemap to public directory
const sitemapPath = path.join(__dirname, "..", "public", "sitemap.xml");
fs.writeFileSync(sitemapPath, sitemapContent);

console.log(`✅ Sitemap generated for ${deployTarget} deployment`);
console.log(`📍 Base URL: ${baseUrl}`);
console.log(`📁 Sitemap saved to: ${sitemapPath}`);
