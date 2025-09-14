<template>
  <div class="page-banner" :class="[bannerClass, `page-banner--${textPosition}`]" :style="bannerStyle">
    <div class="page-banner__content">
      <h1 :class="titleClass">{{ title }}</h1>
      <slot></slot>
    </div>
  </div>
</template>

<script>
/**
 * Reusable page banner component with customizable background and title
 * @component
 */
export default {
  name: 'PageBanner',
  props: {
    /**
     * The main title displayed in the banner
     */
    title: {
      type: String,
      required: true
    },
    /**
     * Background image URL for the banner
     */
    backgroundImage: {
      type: String,
      required: true
    },
    /**
     * Additional CSS classes for the banner container
     */
    bannerClass: {
      type: String,
      default: ''
    },
    /**
     * Additional CSS classes for the title
     */
    titleClass: {
      type: String,
      default: ''
    },
    /**
     * Background position for the image
     */
    backgroundPosition: {
      type: String,
      default: 'center 35%'
    },
    /**
     * Background size for the image
     */
    backgroundSize: {
      type: String,
      default: 'cover'
    },
    /**
     * Whether to show the gradient overlay
     */
    showGradient: {
      type: Boolean,
      default: true
    },
    /**
     * Text positioning - 'center' for center alignment, 'bottom' for bottom alignment
     */
    textPosition: {
      type: String,
      default: 'center',
      validator: (value) => ['center', 'bottom'].includes(value)
    }
  },
  computed: {
    bannerStyle() {
      const gradient = this.showGradient
        ? 'linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100px), '
        : ''

      // Handle both relative paths and external URLs
      let imageUrl = this.backgroundImage
      if (this.backgroundImage && !this.backgroundImage.startsWith('http') && !this.backgroundImage.startsWith('data:')) {
        // Convert relative path to proper Vite asset URL
        imageUrl = new URL(`../assets/${this.backgroundImage.replace('../assets/', '')}`, import.meta.url).href
      }

      return {
        background: `${gradient}black url(${imageUrl}) no-repeat`,
        backgroundPosition: this.backgroundPosition,
        backgroundSize: this.backgroundSize
      }
    }
  }
}
</script>

<style scoped lang="scss">
@use '../styles/variables' as *;

.page-banner {
  position: relative;
  width: 100%;
  min-height: 450px;
  display: flex;
  background-attachment: fixed;
}

/* Center positioning (default) */
.page-banner--center {
  align-items: center;
}

/* Bottom positioning for gradient banners */
.page-banner--bottom {
  align-items: flex-end;
  padding-bottom: 2rem;
}

.page-banner__content {
  color: #FAF9F8;
  margin-left: 120px;
  z-index: 1;
}

h1 {
  font-family: $mvsd-typography-font-family-heading;
  font-size: 3rem;
  font-weight: $mvsd-typography-font-weight-bold;
  line-height: 1.2;
  margin: 0;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .page-banner {
    min-height: 300px;
  }

  .page-banner__content {
    margin-left: 2rem;
    margin-right: 2rem;
  }

  .page-banner--bottom {
    padding-bottom: 1rem;
  }

  h1 {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .page-banner {
    min-height: 250px;
  }

  .page-banner__content {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  .page-banner--bottom {
    padding-bottom: 0.5rem;
  }

  h1 {
    font-size: 1.5rem;
  }
}
</style>
