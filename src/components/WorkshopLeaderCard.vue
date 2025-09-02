<template>
  <li class="workshop-leader-card">
    <div class="pageant-staff-img">
      <img :src="getImageUrl(staffMember.image)" :alt="staffMember.alt" />
    </div>
    <div class="pageant-staff-name">
      <h3>{{ staffMember.name }}</h3>
      <div>{{ staffMember.position }}</div>
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
@use '../styles/variables' as *;

.workshop-leader-card {
  width: 30%;
  margin: 1rem 0;
  flex: none;
  max-width: 360px;

  .pageant-staff-name {
    text-align: center;

    h3 {
      margin: 0.5rem 0;
      line-height: 1.5;
      border-bottom: 2px solid $mvsd-colors-primary;
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
