/**
 * SEO Composable for dynamic meta tag management
 * Provides methods to update page titles, descriptions, and meta tags
 */
import { ref, watch } from "vue";

export function useSEO() {
  const title = ref("Miss Vietnam San Diego");
  const description = ref(
    "Miss Vietnam San Diego is a prestigious Vietnamese-American beauty pageant celebrating culture, sisterhood, and community impact."
  );
  const keywords = ref(
    "Miss Vietnam San Diego, Vietnamese American pageant, beauty pageant, Vietnamese culture, San Diego, community service, sisterhood, VAYA"
  );
  const image = ref("/src/assets/banner.jpg");

  // Determine base URL based on environment
  const getBaseUrl = () => {
    if (import.meta.env.VITE_DEPLOY_TARGET === "github") {
      return "https://yourusername.github.io/mvsd";
    }
    return "https://missvietnamsandiego.com";
  };

  const url = ref(getBaseUrl());

  /**
   * Update page title and meta tags
   * @param {Object} options - SEO options
   * @param {string} options.title - Page title
   * @param {string} options.description - Meta description
   * @param {string} options.keywords - Meta keywords
   * @param {string} options.image - Social media image
   * @param {string} options.url - Canonical URL
   */
  function updateSEO(options = {}) {
    if (options.title) {
      title.value = options.title;
      document.title = options.title;
    }

    if (options.description) {
      description.value = options.description;
      updateMetaTag("description", options.description);
    }

    if (options.keywords) {
      keywords.value = options.keywords;
      updateMetaTag("keywords", options.keywords);
    }

    if (options.image) {
      image.value = options.image;
      updateMetaTag("og:image", options.image);
      updateMetaTag("twitter:image", options.image);
    }

    if (options.url) {
      url.value = options.url;
      updateMetaTag("og:url", options.url);
      updateMetaTag("twitter:url", options.url);
      updateCanonicalURL(options.url);
    }

    // Update Open Graph tags
    if (options.title) {
      updateMetaTag("og:title", options.title);
      updateMetaTag("twitter:title", options.title);
    }

    if (options.description) {
      updateMetaTag("og:description", options.description);
      updateMetaTag("twitter:description", options.description);
    }
  }

  /**
   * Update a specific meta tag
   * @param {string} name - Meta tag name or property
   * @param {string} content - Meta tag content
   */
  function updateMetaTag(name, content) {
    // Handle both name and property attributes
    const selector =
      name.startsWith("og:") || name.startsWith("twitter:")
        ? `meta[property="${name}"]`
        : `meta[name="${name}"]`;

    let metaTag = document.querySelector(selector);

    if (!metaTag) {
      metaTag = document.createElement("meta");
      if (name.startsWith("og:") || name.startsWith("twitter:")) {
        metaTag.setAttribute("property", name);
      } else {
        metaTag.setAttribute("name", name);
      }
      document.head.appendChild(metaTag);
    }

    metaTag.setAttribute("content", content);
  }

  /**
   * Update canonical URL
   * @param {string} url - Canonical URL
   */
  function updateCanonicalURL(url) {
    let canonical = document.querySelector('link[rel="canonical"]');

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute("href", url);
  }

  /**
   * Generate structured data for organization
   * @param {Object} options - Organization data
   * @returns {Object} JSON-LD structured data
   */
  function generateOrganizationSchema(options = {}) {
    const baseUrl = getBaseUrl();
    return {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Miss Vietnam San Diego",
      alternateName: "MVSD",
      url: baseUrl,
      logo: `${baseUrl}/src/assets/mvsd.svg`,
      description:
        "A prestigious Vietnamese-American beauty pageant celebrating culture, sisterhood, and community impact in San Diego.",
      foundingDate: "2006",
      founder: {
        "@type": "Organization",
        name: "Vietnamese-American Youth Alliance (VAYA)",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "San Diego",
        addressRegion: "CA",
        addressCountry: "US",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "General Inquiry",
        email: "info@missvietnamsandiego.com",
      },
      sameAs: [
        "https://www.instagram.com/missvietnamsandiego",
        "https://www.facebook.com/missvietnamsandiego",
        "https://www.youtube.com/@missvietnamsandiego",
        "https://www.tiktok.com/@missvietnamsandiego",
      ],
      ...options,
    };
  }

  /**
   * Generate structured data for event
   * @param {Object} event - Event data
   * @returns {Object} JSON-LD structured data
   */
  function generateEventSchema(event) {
    const baseUrl = getBaseUrl();
    return {
      "@context": "https://schema.org",
      "@type": "Event",
      name: event.name || "Miss Vietnam San Diego Pageant",
      description:
        event.description ||
        "Annual Vietnamese-American beauty pageant celebrating culture and community impact.",
      startDate: event.startDate,
      endDate: event.endDate,
      location: {
        "@type": "Place",
        name: event.location?.name || "San Diego, CA",
        address: event.location?.address || "San Diego, CA",
      },
      organizer: {
        "@type": "Organization",
        name: "Miss Vietnam San Diego",
        url: baseUrl,
      },
      offers: event.offers
        ? {
            "@type": "Offer",
            price: event.offers.price,
            priceCurrency: event.offers.currency || "USD",
            availability:
              event.offers.availability || "https://schema.org/InStock",
          }
        : undefined,
      image: event.image || `${baseUrl}/src/assets/banner.jpg`,
      url: event.url || `${baseUrl}/competition`,
    };
  }

  /**
   * Inject structured data into the page
   * @param {Object} data - Structured data object
   */
  function injectStructuredData(data) {
    // Remove existing structured data
    const existingScript = document.querySelector(
      'script[type="application/ld+json"]'
    );
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }

  return {
    title,
    description,
    keywords,
    image,
    url,
    updateSEO,
    generateOrganizationSchema,
    generateEventSchema,
    injectStructuredData,
  };
}
