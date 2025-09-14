<template>
  <section class="mvsd-section__container">
    <div class="section-content" id="royal-court-section">
      <img src="../assets/crown-decoration.svg" alt="Crown decoration" class="crown-decoration" />
      <br /><br /><br />
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
      <div>
        <ul class="royal-court-list">
          <li v-for="member in royalCourtData" :key="member.name">
            <div class="royal-court-img">
              <img :src="getImageUrl(member.image)" :alt="member.alt">
            </div>
            <div class="royal-court-name">{{ member.name }}</div>
            <div>{{ member.title }}</div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import royalCourtData from '../data/royal-court.json'

/**
 * Props for the RoyalCourt component
 */
defineProps({
  title: {
    type: String,
    default: 'Royal Court'
  },
  description: {
    type: String,
    default: 'Recognized for their exceptional grace, poise, and leadership skills, the Royal Court of Miss Vietnam San Diego proudly represent(s) the Vietnamese American Youth Alliance and the Vietnamese community of San Diego. Crowned annually at the San Diego Tet Festival, our titleholders embody the beauty and strength of an upheld cultural heritage.'
  }
})

/**
 * Function to get the correct image URL for Vite
 */
function getImageUrl(imagePath) {
  return new URL(`../assets/${imagePath}`, import.meta.url).href
}
</script>

<style scoped lang="scss">
@use '../styles/variables' as *;

/* about section  */
.mvsd-section__container {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;

  .img-left,
  .img-right {
    flex: 50%;
  }

  img {
    width: 100%;
  }
}

.section-content {
  padding-left: 7rem;
  padding-right: 7rem;
  flex: 50%;
}

.crown-decoration {
  width: 100%;
  max-width: 1008px;
  height: auto;
}

#royal-court-section {
  text-align: center;
}

.royal-court-list {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;

  li {
    width: 30%;
    margin: 1rem;

    .royal-court-name {
      font-family: $mvsd-typography-font-family-heading;
      font-size: 1.5rem;
      line-height: 1.5;
      font-weight: $mvsd-typography-font-weight-semibold;
      padding: 1rem 0;
      border-bottom: 2px solid $mvsd-colors-primary;
      margin-bottom: 1rem;
    }

    .royal-court-img {
      flex: none;
      border-radius: 600px 600px 0 0;
      border: 2px solid $mvsd-colors-primary;
      width: 100%;
      height: 445px;

      display: block;
      overflow: hidden;

      img {
        object-fit: cover;
        height: 100%;
      }
    }
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .section-content {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .royal-court-list li {
    width: 45%;
  }
}

@media (max-width: 480px) {
  .royal-court-list li {
    width: 100%;
  }
}
</style>
