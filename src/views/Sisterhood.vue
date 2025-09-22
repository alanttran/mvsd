<template>
  <!-- landing section  -->
  <PageBanner title="Sisterhood" background-image="banner-sisterhood.jpg" text-position="bottom" />

  <!-- Royal Court Section -->
  <RoyalCourt />

  <section class="" id="former-titleholders-section">

    <h2 class="fancy-underline">Former Titleholders</h2>

    <!-- Desktop Carousel Container -->
    <div class="mvsd-carousel__container carousel-desktop">
      <!-- Carousel Track -->
      <div class="carousel-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
        <div v-for="(titleholderData, index) in formerTitleholdersData" :key="titleholderData.year"
          class="carousel-card-wrapper">
          <div class="mvsd-former-titleholders__container">
            <div>
              <img class="carousel-image" :src="getImageSrc(titleholderData.image)" :alt="titleholderData.alt">
            </div>
            <div class="former-titleholders-list">
              <div v-for="titleholder in titleholderData.titleholders" :key="titleholder.title">
                {{ titleholder.title }} - {{ titleholder.name }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Navigation Buttons -->
      <button class="carousel-nav carousel-prev" @click="previousSlide" aria-label="Previous slide">
        ‹
      </button>
      <button class="carousel-nav carousel-next" @click="nextSlide" aria-label="Next slide">
        ›
      </button>

      <!-- Indicators -->
      <div class="carousel-indicators">
        <button v-for="(_, index) in totalSlides" :key="index" class="carousel-indicator"
          :class="{ active: currentSlide === index }" @click="goToSlide(index)"
          :aria-label="`Go to slide ${index + 1}`"></button>
      </div>
    </div>

    <!-- Mobile List Container -->
    <div class="mvsd-list__container carousel-mobile">
      <FormerTitleholderCard v-for="(titleholderData, index) in formerTitleholdersData" :key="titleholderData.year"
        :data="titleholderData" />
    </div>
  </section>

  <section class="" id="former-contestants-section">

    <h2 class="fancy-underline">2025 Contestants </h2>

    <div class="contestants-image-container">
      <img src="../assets/royal-courts/2025/contestants.jpg" alt="Royal Court 2025">
    </div>

  </section>

</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import PageBanner from '../components/PageBanner.vue'
import FormerTitleholderCard from '../components/FormerTitleholderCard.vue'
import RoyalCourt from '../components/RoyalCourt.vue'
import formerTitleholdersData from '../data/former-titleholders.json'

// Carousel state
const currentSlide = ref(0)
const totalSlides = ref(formerTitleholdersData.length)
let autoPlayInterval = null

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

// Carousel methods
function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % totalSlides.value
}

function previousSlide() {
  currentSlide.value = currentSlide.value === 0 ? totalSlides.value - 1 : currentSlide.value - 1
}

function goToSlide(index) {
  currentSlide.value = index
}

function startAutoPlay() {
  autoPlayInterval = setInterval(() => {
    nextSlide()
  }, 8000) // Change slide every 5 seconds
}

function stopAutoPlay() {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval)
    autoPlayInterval = null
  }
}

// Lifecycle hooks
onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {
  stopAutoPlay()
})
</script>

<style scoped lang="scss">
@use '../styles/variables' as *;

.sponsor-list {
  padding: 50px 0;
  display: flex;
  justify-content: space-evenly;
  gap: 4em;
  flex-wrap: wrap;
}

.text-left {
  margin-left: 70px;
  margin-right: 70px;
  flex: 50%;
}

.former-titleholders-list {
  line-height: 2;
}

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


.img-left {
  flex: 50%;
}

.img-left img {
  width: 100%;
}


.section-content {
  padding-left: 7rem;
  padding-right: 7rem;
  flex: 50%;
}



.announcements-section {
  margin-top: 30px;
  margin-bottom: 30px;
}

.announcement-header {
  display: flex;
  justify-content: space-between;
  padding-left: 8%;
  padding-right: 8%;
  align-items: center;
}

.announcements-cards {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.card {
  background-color: $mvsd-colors-background;
  border: 2px solid $mvsd-colors-primary;
  width: 412px;
  height: 445px;
  margin: 10px;
  text-align: left;
  border-radius: 20px;

}

.card:hover {
  background-color: $mvsd-colors-primary-light;
}

.card-img {
  height: 222px;
  width: 382px;
  border-radius: 15px;
  margin-bottom: 15px;
  background-size: cover;
  border-radius: 10px;
  margin: 15px;
}

.hr-wrapper {
  display: flex;
  justify-content: center;
}

.hr-wrapper hr {
  border: none;
  border-top: 1.5px solid $mvsd-colors-primary;
  opacity: 1;
  /* border-color: $mvsd-colors-primary-dark; */
  width: 382px;
  margin-top: 0;
}

.card h3 {
  padding-left: 12px;
  padding-right: 12px;
}

.card p {
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 5px;
  margin-bottom: 0;
}

.calendar {
  display: flex;
  padding-left: 12px;
  /* margin: 10px; */
  align-items: center;
  padding-bottom: 15px;
}

.calendar p {
  margin: 0;
  padding-top: 0;
  padding-bottom: 0;
}

.author {
  display: flex;
  padding-left: 12px;
  align-items: center;
}

.author p {
  margin: 0;
  padding-top: 0;
  padding-bottom: 0;
}

.sponsor-list {
  background-color: $mvsd-colors-background;
}

#former-titleholders-section,
#former-contestants-section {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem 1rem;

  h2 {
    width: fit-content;
    flex: none;
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    padding: 1rem 0.5rem;

    h2 {
      margin-bottom: 1.5rem;
    }
  }
}

.contestants-image-container {
  max-width: 100%;
  width: 100%;

  img {
    width: 100%;
    height: auto;
    max-width: 800px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    padding: 0 1rem;

    img {
      max-width: 100%;
    }
  }
}

/* Carousel Styles */
.mvsd-carousel__container {
  position: relative;
  width: 100%;
  max-width: 800px;
  overflow: hidden;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 1rem;
  }
}

/* Desktop carousel - show on larger screens */
.carousel-desktop {
  display: block;

  @media (max-width: 768px) {
    display: none !important;
  }
}

/* Mobile list - hide on larger screens */
.carousel-mobile {
  display: none !important;

  @media (max-width: 768px) {
    display: block !important;
  }
}

/* Responsive image class */
.responsive-image {
  width: 100%;
  max-width: 100%;
  height: auto;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
}

/* Fixed width for carousel images on larger viewports */
.carousel-image {
  width: 666px;
  height: auto;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
}

/* Mobile list container */
.mvsd-list__container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0 1rem;
  max-width: 100%;

  @media (max-width: 480px) {
    gap: 1rem;
    padding: 0 0.5rem;
  }

  /* Override FormerTitleholderCard styles for mobile list */
  .mvsd-former-titleholders__container {
    min-width: unset;
    width: 100%;
    max-width: 100%;
    padding: 0;
    margin-bottom: 2rem;

    &:last-child {
      margin-bottom: 0;
    }

    @media (max-width: 480px) {
      margin-bottom: 1.5rem;
    }

    img {
      width: 100% !important;
      max-width: 100% !important;
      height: auto !important;
    }
  }
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 100%;
}

.carousel-card-wrapper {
  min-width: 100%;
  flex-shrink: 0;
  padding: 0 1rem;
  box-sizing: border-box;
}



.carousel-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba($mvsd-colors-primary, 0.8);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
  z-index: 10;

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
    font-size: 20px;
  }

  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
    font-size: 18px;
  }
}

.carousel-nav:hover {
  background: rgba($mvsd-colors-primary, 1);
}

.carousel-prev {
  left: 10px;

  @media (max-width: 768px) {
    left: 5px;
  }

  @media (max-width: 480px) {
    left: 2px;
  }
}

.carousel-next {
  right: 10px;

  @media (max-width: 768px) {
    right: 5px;
  }

  @media (max-width: 480px) {
    right: 2px;
  }
}

.carousel-indicators {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 20px;

  @media (max-width: 768px) {
    margin-top: 15px;
    gap: 6px;
  }

  @media (max-width: 480px) {
    margin-top: 10px;
    gap: 4px;
  }
}

.carousel-indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid $mvsd-colors-primary;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: 10px;
    height: 10px;
  }

  @media (max-width: 480px) {
    width: 8px;
    height: 8px;
  }
}

.carousel-indicator:hover {
  background: rgba($mvsd-colors-primary, 0.3);
}

.carousel-indicator.active {
  background: $mvsd-colors-primary;
}
</style>