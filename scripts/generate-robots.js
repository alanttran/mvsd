#!/usr/bin/env node

/**
 * Generate robots.txt based on deployment target
 * Usage: node scripts/generate-robots.js [github|production]
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

// Robots.txt content
const robotsContent = `User-agent: *
Allow: /

# Sitemap location
Sitemap: ${baseUrl}/sitemap.xml

# Crawl delay (optional)
Crawl-delay: 1

# Disallow specific paths if needed
# Disallow: /admin/
# Disallow: /private/

# Allow all other content
Allow: /src/assets/
Allow: /dist/assets/`;

// Write robots.txt to public directory
const robotsPath = path.join(__dirname, "..", "public", "robots.txt");
fs.writeFileSync(robotsPath, robotsContent);

console.log(`✅ Robots.txt generated for ${deployTarget} deployment`);
console.log(`📍 Base URL: ${baseUrl}`);
console.log(`📁 Robots.txt saved to: ${robotsPath}`);
