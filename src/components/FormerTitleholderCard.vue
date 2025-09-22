<template>
  <div class="mvsd-former-titleholders__container">
    <div>
      <img class="responsive-image" :src="getImageSrc(data.image)" :alt="data.alt">
    </div>
    <div class="former-titleholders-list">
      <div v-for="titleholder in data.titleholders" :key="titleholder.title">
        {{ titleholder.title }} - {{ titleholder.name }}
      </div>
    </div>
  </div>
</template>

<script setup>
/**
 * FormerTitleholderCard component displays information about a specific year's royal court
 * @component
 */

// Props
defineProps({
  /**
   * The titleholder data for a specific year
   * @type {Object}
   * @property {string} year - The year of the royal court
   * @property {string} image - Path to the court image
   * @property {string} alt - Alt text for the image
   * @property {Array} titleholders - Array of titleholder objects with title and name
   */
  data: {
    type: Object,
    required: true
  }
})

/**
 * Get the correct image source for Vite asset handling
 * @param {string} imagePath - The image path from the data
 * @returns {string} The processed image URL
 */
function getImageSrc(imagePath) {
  // Remove the leading slash and convert to relative path for Vite
  const cleanPath = imagePath.replace(/^\/src\//, '')
  return new URL(`../assets/${cleanPath}`, import.meta.url).href
}
</script>

<style scoped lang="scss">
.mvsd-former-titleholders__container {
  min-width: 100%;
  flex-shrink: 0;
  padding: 0 1rem;
  box-sizing: border-box;
}

.former-titleholders-list {
  line-height: 2;
}

.responsive-image {
  width: 100%;
  max-width: 100%;
  height: auto;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
}

/* Fixed width for carousel on larger viewports */
.carousel-image {
  width: 666px;
  height: auto;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
}
</style>
