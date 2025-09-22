<template>
  <li class="workshop-leader-card">
    <div class="pageant-staff-img">
      <img :src="getImageUrl(staffMember.image)" :alt="staffMember.alt" />
    </div>
    <div class="pageant-staff-name">
      <h3>{{ staffMember.name }}</h3>
      <div>{{ staffMember.position }}</div>
      <a :href="staffMember.link" target="_blank" rel="noopener noreferrer">{{ staffMember.career }}</a>
    </div>
  </li>
</template>

<script>
/**
 * WorkshopLeaderCard component displays individual workshop leader information
 * @component
 */
export default {
  name: 'WorkshopLeaderCard',
  props: {
    /**
     * Workshop leader data object
     * @type {Object}
     * @required
     */
    staffMember: {
      type: Object,
      required: true,
      validator: (value) => {
        return value &&
          typeof value.name === 'string' &&
          typeof value.position === 'string' &&
          typeof value.career === 'string' &&
          typeof value.link === 'string' &&
          typeof value.image === 'string' &&
          typeof value.alt === 'string';
      }
    }
  },
  methods: {
    /**
     * Get the correct URL for the workshop leader image
     * @param {string} imageName - The image filename
     * @returns {string} The full path to the image
     */
    getImageUrl(imageName) {
      return new URL(`../assets/workshop-leaders/${imageName}`, import.meta.url).href;
    }
  }
}
</script>

<style scoped lang="scss">
@use 'sass:color';
@use '../styles/variables' as *;

.workshop-leader-card {
  margin: 1rem 0;
  flex: 30%;
  max-width: 360px;

  .pageant-staff-name {
    text-align: center;

    h3 {
      margin: 0.5rem 0;
      line-height: 1.5;
      border-bottom: 2px solid $mvsd-colors-primary;
    }

    a {
      color: $mvsd-colors-primary;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;
      line-height: 1.5;

      &:hover {
        color: color.scale($mvsd-colors-primary, $lightness: -20%);
        text-decoration: underline;
      }
    }
  }
}

.pageant-staff-img {
  border: 2px solid $mvsd-colors-primary;
  border-radius: 10px;
  overflow: hidden;
  max-height: 420px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
