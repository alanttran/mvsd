/**
 * Page headings configuration for dynamic footer navigation
 * This file contains the headings for each page that will be used in the footer
 */

// Define headings for each page
const pageHeadings = {
  "/about": [
    { text: "Our Mission", href: "/about#about-section" },
    { text: "Pageant Staff", href: "/about#pageant-staff" },
    { text: "Workshop Leaders", href: "/about#workshop-leaders" },
    { text: "Design Team", href: "/about#design-team" },
  ],
  "/sisterhood": [
    { text: "Royal Court", href: "/sisterhood#royal-court-section" },
    {
      text: "Former Titleholders",
      href: "/sisterhood#former-titleholders-section",
    },
    {
      text: "2025 Contestants",
      href: "/sisterhood#former-contestants-section",
    },
  ],
  "/impact": [
    {
      text: "Empowering Beauty, Inspiring Community",
      href: "/impact#empowering-beauty",
    },
    { text: "Past Court Projects", href: "/impact#past-court-projects" },
  ],
  "/reign": [
    { text: "A Year of Service", href: "/reign#reign-intro" },
    { text: "Timeline of Events", href: "/reign#timeline" },
  ],
  "/apply": [
    { text: "Join the Sisterhood", href: "/apply#about-section" },
    { text: "Why Miss Vietnam San Diego?", href: "/apply#why-mvsd" },
    { text: "Royal Court's Responsibilities", href: "/apply#apply-now" },
    { text: "Requirements", href: "/apply#requirements" },
    { text: "Titles and Awards", href: "/apply#titles-awards" },
  ],
};

/**
 * Get headings for a specific page
 * @param {string} path - The page path
 * @returns {Array} Array of heading objects with text and href
 */
export function getPageHeadings(path) {
  return pageHeadings[path] || [];
}

/**
 * Get all available page headings
 * @returns {Object} Object with page paths as keys and heading arrays as values
 */
export function getAllPageHeadings() {
  return pageHeadings;
}

/**
 * Get headings for multiple pages
 * @param {Array} paths - Array of page paths
 * @returns {Object} Object with page paths as keys and heading arrays as values
 */
export function getMultiplePageHeadings(paths) {
  const result = {};
  paths.forEach((path) => {
    result[path] = getPageHeadings(path);
  });
  return result;
}
