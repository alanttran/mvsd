<template>
  <!-- landing section  -->
  
  <div class="landing">
    <div class="landing-text">
      <h1>Miss Vietnam San Diego</h1>
    </div>
  </div>

  <!-- about  -->
  <div class="about-container">
    <div class="img-left">
      <img src="https://cc-prod.scene7.com/is/image/CCProdAuthor/What-is-Stock-Photography_P1_mobile?$pjpeg$&jpegSize=200&wid=720" alt="dog">
    </div>
    <div class="text-right" id="about-section">
      <h1>About Miss Vietnam</h1>
        <p>Established in 2006 as part of The Vietnamese American Youth Alliance (VAYA), Miss Vietnam San Diego celebrates the beauty and cultural heritage of the Vietnamese community in San Diego. Our mission is to unite and strengthen the community through women’s empowerment, leadership, and service. By providing a platform and mentorship for youth and goodwill ambassadors, we cultivate community role models and leaders.
        </p>
        <button class="primary-butt">About Us</button>
    </div>
  </div>

  <!-- royal court  -->
   <div class="royal-court">
    <div class="text-left">
      <h1>Royal Court 2024</h1>
      <p>Presenting the Royal Court of Miss Vietnam San Diego.</p>
      <button class="primary-butt">Our Titleholders</button>
    </div>
    <div class="img-right">
      <img
          src="https://cc-prod.scene7.com/is/image/CCProdAuthor/What-is-Stock-Photography_P1_mobile?$pjpeg$&jpegSize=200&wid=720"
          alt="dog">
    </div>
   </div>

  <!-- apply now  -->
  <div class="about-container">
    <div class="img-left">
      <img src="https://cc-prod.scene7.com/is/image/CCProdAuthor/What-is-Stock-Photography_P1_mobile?$pjpeg$&jpegSize=200&wid=720" alt="dog">
    </div>
    <div class="text-right" id="apply-now">
      <h1>Apply Now</h1>
      <p>Looking to join us next year? Fill out our interest form to stay connected!</p>
      <button class="primary-butt">Interest Form</button>
    </div>
  </div>

  <!-- announcements section  -->
  <section class="announcements-section">
  <div class="announcement-header">
    <h1>Announcements</h1>
    <button class="secondary-butt">See More</button>
  </div>
  <div class="announcements-cards">
    <!-- announcement 1 -->
    <div class="card">
      <div class="card-img card-1">
      </div>
      <h3>2025 Applications Open</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
      <div class="hr-wrapper">
        <hr>
      </div>
      <div class="calendar">
        <i class="fa-solid fa-calendar-days fa-xl"></i>
        <p>July 29th, 2024 at 1:15PM</p>
      </div>
      <!-- <br> -->
      <div class="author">
        <i class="fa-regular fa-user fa-xl"></i>
        <p>Miss Vietnam San Diego</p>
      </div>
    </div>
    <!-- announcement 2 -->
    <div class="card">
      <div class="card-img card-1">
      </div>
      <h3>2025 Applications Open</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
      <div class="hr-wrapper">
        <hr>
      </div>
      <div class="calendar">
        <i class="fa-solid fa-calendar-days fa-xl"></i>
        <p>July 29th, 2024 at 1:15PM</p>
      </div>
      <div class="author">
        <i class="fa-regular fa-user fa-xl"></i>
        <p>Miss Vietnam San Diego</p>
      </div>
    </div>
    <!-- announcement 3  -->
    <div class="card">
      <div class="card-img card-1">
      </div>
      <h3>2025 Applications Open</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
      <div class="hr-wrapper">
        <hr>
      </div>
      <div class="calendar">
        <i class="fa-solid fa-calendar-days fa-xl"></i>
        <p>July 29th, 2024 at 1:15PM</p>
      </div>
      <div class="author">
        <i class="fa-regular fa-user fa-xl"></i>
        <p>Miss Vietnam San Diego</p>
      </div>
    </div>  
  </div>
</section>

<!-- royal court  -->
<div class="royal-court">
    <div class="text-left" id="sponsors-text">
      <h1>Our Sponsors</h1>
      <p>Thank you to our sponsors for the love given to our pageant girls through donating your time and resources. You represent beauty of community to empower and uplift. Without you, we wouldn’t be able to create the space to allow so many young girls become their most authentic, confidence selves.</p>
    </div>
    <div class="img-right">
      <img
          src="https://cc-prod.scene7.com/is/image/CCProdAuthor/What-is-Stock-Photography_P1_mobile?$pjpeg$&jpegSize=200&wid=720"
          alt="dog">
    </div>
   </div>


</template>

<style scoped>
.text-left{
  margin-left: 70px;
  margin-right: 70px;
  flex: 50%;
}
h1{
  font-weight: 700;
  font-size: 40px;
}
h3{
  font-weight: 600;
  font-size: 26px;
}
p{
  font-weight: 400;
  font-size: 16px;
}
/* about section  */
.about-container{
  display: flex;
  align-items: center;
  text-align: left;
  justify-content: space-between;
  margin-top: 30px;
}
#about-section{
  padding-left: 5%;
  padding-right: 3%;
  flex: 50%;
}
.img-left{
  flex: 50%;
}
.img-left img{
  width: 100%;
}
.text-right h2{
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 40px;
}
.text-right p{
  font-size: 16px;
  padding-top: 15px;
  padding-bottom: 15px;
}
/* landing section  */
.landing {
  position: relative; 
  width: 100%;        
  height: 90vh;    
  background-image: url('https://cc-prod.scene7.com/is/image/CCProdAuthor/What-is-Stock-Photography_P1_mobile?$pjpeg$&jpegSize=200&wid=720');
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat;
  display: flex;      
}

.landing-text {
  color: #FAF9F8;
  background-color: transparent;
  margin-top: 400px;
  margin-left: 120px;
}

.announcements-section{
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

.announcements-cards{
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
.card:hover{
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