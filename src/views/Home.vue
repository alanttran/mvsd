<template>
  <!-- landing section  -->

  <div class="landing">
    <div class="landing-text fancy-underline">
      <h1>Miss Vietnam of San Diego</h1>
    </div>
    <div>
      <a :href="applicationForm.url" target="_blank" class="mvsd-button--primary landing-button">2026 Applications are
        now open!</a>
    </div>
  </div>

  <!-- about  -->
  <section class="mvsd-section__container">
    <div class="img-left">
      <img src="../assets/home-about.jpg" alt="About Miss Vietnam of San Diego" loading="eager" />
    </div>
    <div class="section-content" id="about-section">
      <h2 class="fancy-underline">About Miss Vietnam of San Diego</h2>
      <p class="intro-paragraph">Established in 2006 as part of The Vietnamese American Youth Alliance (VAYA), Miss
        Vietnam San Diego celebrates
        the beauty and cultural heritage of the Vietnamese community in San Diego. Our mission is to unite and
        strengthen the community through women's empowerment, leadership, and service. By providing a platform and
        mentorship for youth and goodwill ambassadors, we cultivate community role models and leaders.
      </p>
      <RouterLink to="/about" class="mvsd-button--primary">About Us</RouterLink>
    </div>
  </section>

  <section class="mvsd-section__container">
    <div class="section-content">
      <h2 class="fancy-underline">The Royal Court 2025</h2>
      <p class="intro-paragraph">Presenting the Royal Court of Miss Vietnam San Diego.</p>
      <p>Recognized for their exceptional grace, poise, and leadership skills, the Royal Court of Miss Vietnam San Diego
        proudly represents the Vietnamese-American Youth Alliance and the Vietnamese community of San Diego. Crowned
        annually at the San Diego Tet Festival, our titleholders embody the beauty and strength of an upheld cultural
        heritage.</p>
      <RouterLink to="/sisterhood" class="mvsd-button--primary">Our Titleholders</RouterLink>
    </div>
    <div class="img-right">
      <img src="../assets/banner-sisterhood.jpg" alt="Royal Court 2025" loading="lazy" />
    </div>
  </section>

  <!-- Project Sang  -->
  <section class="mvsd-section__container">
    <div class="img-left">
      <img :src="projectSangImage" alt="2025 Project Sang" loading="lazy" />
    </div>
    <div class="section-content" id="project-sang">
      <h2 class="fancy-underline">2025 Project Sang</h2>
      <p class="intro-paragraph">Our current Royal Court is proud to present Project Sang, a comprehensive initiative
        focused on empowering
        children with autism through accessible STEAM education and community support.</p>
      <p>Our mission is to empower children with autism by providing accessible and engaging STEAM (Science, Technology,
        Engineering, Art, and Mathematics) resources. We believe that every child, regardless of background or ability,
        deserves to feel seen, supported, and inspired to learn.</p>

      <UpcomingEvent main-title="Reach for the Sky!" event-name="STEAM Workshop with Autism Tree"
        event-description="Engineering fun with paper airplanes & towers" event-date="September 27, 2025"
        event-time="1:00 PM - 3:00 PM" event-location="4747 Morena Blvd, Suite 355, San Diego, CA 92117"
        registration-url="https://bit.ly/ATMVSDW1" registration-deadline="2025-09-26T23:59:00"
        event-end-time="2025-09-27T15:00:00" />

      <RouterLink to="/impact" class="mvsd-button--primary">Learn More</RouterLink>
    </div>
  </section>

  <section class="mvsd-section__container">
    <div class="section-content">
      <h2 class="fancy-underline">Our Sponsors</h2>
      <p class="intro-paragraph">Thank you to our sponsors for the love given to our pageant girls through donating your
        time and resources. You
        represent beauty of community to empower and uplift. Without you, we wouldn't be able to create the space to
        allow so many young girls become their most authentic, confidence selves.</p>
    </div>
    <div class="img-right">
      <img src="../assets/section-sponsors.jpg" alt="dog">
    </div>
  </section>

  <section class="sponsor-list">
    <img src="../assets/sponsor-forever-beaumore.svg" alt="Forever Beaumore">
    <img src="../assets/sponsor-emily-thao-photog.png" alt="Emily Thao Photography">
    <img src="../assets/sponsor-gina-mai-hair.svg" alt="Gina Mai Hair">
    <img src="../assets/sponsor-JP-charming-beauty.svg" alt="Charming Beauty Jennifer Pham">
    <img src="../assets/sponsor-S-logo.svg" alt="S-logo">
    <img src="../assets/sponsor-thuy-lam.svg" alt="Thuy Lam Makeup">
  </section>


</template>

<script setup>
import { RouterLink } from 'vue-router'
import externalLinks from '../data/external-links.json'
import projectSangImage from '../assets/projects/2025-project-sang.jpg'
import UpcomingEvent from '../components/UpcomingEvent.vue'

// Get application form data
const applicationForm = externalLinks.applicationForm
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
  padding-left: 2rem;
  padding-right: 2rem;
  flex: 50%;
}


/* landing section  */
.landing {
  position: relative;
  width: 100%;
  height: 450px;
  background: black url('../assets/banner.jpg') right top no-repeat;
  background-size: auto 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;

  .landing-button {
    margin-left: 120px;
  }
}

.landing-text {
  color: #FAF9F8;
  margin-left: 120px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.landing-button {
  margin-top: 20px;
  align-self: flex-start;
  font-size: 18px;
  padding: 12px 24px;
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
  background-color: #FFF8FD;
  border: 2px solid $mvsd-colors-primary;
  width: 412px;
  height: 445px;
  margin: 10px;
  text-align: left;
  border-radius: 20px;

}

.card:hover {
  background-color: #eec3d7;
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

.card-1 {
  background-image: url('https://cc-prod.scene7.com/is/image/CCProdAuthor/What-is-Stock-Photography_P1_mobile?$pjpeg$&jpegSize=200&wid=720');
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
  background-color: #faf9f8;
}

.section-content ul {
  margin: 1rem 0;
  padding-left: 1.5rem;
  list-style-type: disc;
}

.section-content li {
  margin-bottom: 0.5rem;
  line-height: 1.4;
  display: list-item;
}

.section-content p {
  font-size: 1.1rem;
  line-height: 1.6;
}

.intro-paragraph {
  text-align: left;
  max-width: 800px;
}
</style>