<template>
  <!-- landing section  -->
  <PageBanner title="Sisterhood" background-image="banner-sisterhood.jpg" text-position="bottom" />

  <!-- Royal Court Section -->
  <RoyalCourt />

  <section class="" id="former-titleholders-section">

    <h2 class="fancy-underline">Former Titleholders</h2>

    <!-- Carousel Container -->
    <div class="mvsd-carousel__container">
      <!-- Carousel Track -->
      <div class="carousel-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
        <FormerTitleholderCard v-for="(titleholderData, index) in formerTitleholdersData" :key="titleholderData.year"
          :data="titleholderData" />
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
  </section>

  <section class="" id="former-contestants-section">

    <h2 class="fancy-underline">2025 Contestants </h2>

    <img src="../assets/royal-courts/2025/contestants.jpg" alt="Royal Court 2025">

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

.fancy-underline {
  line-height: 2.8;
  background: url('../assets/fancy-underline.svg') bottom no-repeat;
  background-size: 100%;
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

  h2 {
    width: fit-content;
    flex: none;
    margin-bottom: 2rem;
  }


}

/* Carousel Styles */
.mvsd-carousel__container {
  position: relative;
  width: 100%;
  max-width: 800px;
  overflow: hidden;
  margin: 0 auto;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 100%;
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
}

.carousel-nav:hover {
  background: rgba($mvsd-colors-primary, 1);
}

.carousel-prev {
  left: 10px;
}

.carousel-next {
  right: 10px;
}

.carousel-indicators {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 20px;
}

.carousel-indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid $mvsd-colors-primary;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
}

.carousel-indicator:hover {
  background: rgba($mvsd-colors-primary, 0.3);
}

.carousel-indicator.active {
  background: $mvsd-colors-primary;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .carousel-nav {
    width: 35px;
    height: 35px;
    font-size: 20px;
  }

  .carousel-prev {
    left: 5px;
  }

  .carousel-next {
    right: 5px;
  }

  .carousel-indicators {
    margin-top: 15px;
  }

  .carousel-indicator {
    width: 10px;
    height: 10px;
  }
}
</style>