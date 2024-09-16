<template>
  <!-- landing section  -->

  <div class="landing">
    <div class="landing-text fancy-underline">
      <h1>Miss Vietnam of San Diego</h1>
    </div>
  </div>

  <!-- about  -->
  <section class="section-container">
    <div class="img-left">
      <img src="../assets/home-about.jpg" alt="dog">
    </div>
    <div class="section-content" id="about-section">
      <h2 class="fancy-underline">About Miss Vietnam of San Diego</h2>
      <p>Established in 2006 as part of The Vietnamese American Youth Alliance (VAYA), Miss Vietnam San Diego celebrates
        the beauty and cultural heritage of the Vietnamese community in San Diego. Our mission is to unite and
        strengthen the community through women’s empowerment, leadership, and service. By providing a platform and
        mentorship for youth and goodwill ambassadors, we cultivate community role models and leaders.
      </p>
      <button class="primary-butt">About Us</button>
    </div>
  </section>

  <section class="section-container">
    <div class="section-content">
      <h2 class="fancy-underline">The Royal Court 2024</h2>
      <p>Presenting the Royal Court of Miss Vietnam San Diego.</p>
      <p>Recognized for their exceptional grace, poise, and leadership skills, the Royal Court of Miss Vietnam San Diego
        proudly represents the Vietnamese-American Youth Alliance and the Vietnamese community of San Diego. Crowned
        annually at the San Diego Tet Festival, our titleholders embody the beauty and strength of an upheld cultural
        heritage.</p>
      <button class="primary-butt">Our Titleholders</button>
    </div>
    <div class="img-right">
      <img src="../assets/section-court.jpg" alt="dog">
    </div>
  </section>

  <!-- apply now  -->
  <section class="section-container">
    <div class="img-left">
      <img src="../assets/section-apply-now.jpg" alt="dog">
    </div>
    <div class="section-content" id="apply-now">
      <h2 class="fancy-underline">Apply Now</h2>
      <p>Looking to join us next year? Fill out our interest form to stay connected!</p>
      <button class="primary-butt">2025 Application Form</button>
    </div>
  </section>

  <section class="section-container">
    <div class="section-content">
      <h2 class="fancy-underline">Our Sponsors</h2>
      <p>Thank you to our sponsors for the love given to our pageant girls through donating your time and resources. You
        represent beauty of community to empower and uplift. Without you, we wouldn’t be able to create the space to
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

<style scoped>
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
.section-container {
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
  display: flex;
  align-items: center;
}

.landing-text {
  color: #FAF9F8;
  margin-left: 120px;
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
  border: 2px solid #DF6BA2;
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
  border-top: 1.5px solid #DF6BA2;
  opacity: 1;
  /* border-color: #8E3B7C; */
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
</style>