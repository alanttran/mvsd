<template>
  <li class="design-team-card">
    <div class="pageant-staff-img">
      <img :src="getImageUrl(designTeamMember.image)" :alt="designTeamMember.alt" />
    </div>
    <div class="pageant-staff-name">
      <h3>{{ designTeamMember.name }}</h3>
      <div>{{ designTeamMember.position }}</div>
      <a :href="designTeamMember.linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </div>
  </li>
</template>

<script>
/**
 * DesignTeamCard component displays individual design team member information
 * @component
 */
export default {
  name: 'DesignTeamCard',
  props: {
    /**
     * Design team member data object
     * @type {Object}
     * @required
     */
    designTeamMember: {
      type: Object,
      required: true,
      validator: (value) => {
        return value &&
          typeof value.name === 'string' &&
          typeof value.position === 'string' &&
          typeof value.image === 'string' &&
          typeof value.alt === 'string' &&
          typeof value.linkedin === 'string';
      }
    }
  },
  methods: {
    /**
     * Get the correct URL for the design team member image
     * @param {string} imageName - The image filename
     * @returns {string} The full path to the image
     */
    getImageUrl(imageName) {
      return new URL(`../assets/design-team/${imageName}`, import.meta.url).href;
    }
  }
}
</script>

<style scoped lang="scss">
@use 'sass:color';
@use '../styles/variables' as *;

.design-team-card {
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
  max-height: 250px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
