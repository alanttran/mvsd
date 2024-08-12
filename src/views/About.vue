<template>
  <!-- landing sect  -->
  <div class="landing">
    <div class="landing-text">
      <h1>About Us</h1>
    </div>
  </div>

  <!-- join sister hood  -->
  <div class="royal-court" id="join-sister">
    <div class="text-left">
      <h1>Join the Sisterhood</h1>
      <div class="hr-wrapper" id="full-line">
        <hr>
      </div>
      <p>Miss Vietnam San Diego represents the beauty of the Vietnamese community in San Diego, beauty inside and out. Miss Vietnam San Diego is kind, intelligent, and proud of their heritage. Miss Vietnam San Diego always puts the community first.</p>
      <p>If Miss Vietnam San Diego is you, apply now!</p>
    </div>
    <div class="img-right">
      <img
          src="https://cc-prod.scene7.com/is/image/CCProdAuthor/What-is-Stock-Photography_P1_mobile?$pjpeg$&jpegSize=200&wid=720"
          alt="dog">
    </div>
   </div>

   <!-- why miss viet  -->
   <div class="about-container">
    <div class="img-left">
      <img src="https://cc-prod.scene7.com/is/image/CCProdAuthor/What-is-Stock-Photography_P1_mobile?$pjpeg$&jpegSize=200&wid=720" alt="dog">
    </div>
    <div class="text-right" id="about-section">
      <h1>Why Miss Vietnam San Diego?</h1>
      <div class="hr-wrapper" id="full-line">
        <hr>
      </div>
      <p>Miss Vietnam San Diego is more than a pageant or a competition—we are a sisterhood and a community. Joining the Miss Vietnam San Diego program will allow you to meet other passionate, community-drive girls, while being a space for you to grow and share your passion. Join Miss Vietnam San Diego to…</p>
      <ul>
        <li>Embrace your cultural roots</li>
        <li>Boost self-efficacy and captivating presentation skills</li>
        <li>Develop personal & professional skills</li>
        <li>Engage with the Vietnamese community</li>
      </ul>
    </div>
  </div>

  <!-- royal court responsibilities  -->
  <div class="royal-court" id="join-sister">
    <div class="text-left">
      <h1>Royal Court’s Responsibilities</h1>
      <div class="hr-wrapper" id="full-line">
        <hr>
      </div>
      <div class="respon-text">
        <h3>Community Leaders</h3>
        <p>As spokespeople of VAYA, titleholders of Miss Vietnam San Diego are expected to carry this role with dignity, class, and grace. MVSD is a role model for youth empowerment and the local Vietnamese community.</p>
        <h3>A Year of Service</h3>
        <p>Titleholders of Miss Vietnam San Diego Royal Court (Queen, First Princess, Second Princess) carry out a year of service with the Vietnamese American Youth Alliance. You can expect community appearances from them at least twice a month.</p>
        <h3>Court’s Project</h3>
        <p>The Royal Court’s main focus of the year is their term project, where the Royal Court combines their skills and interests in a large scale service project to serve the local community.</p>
      </div>
    </div>
    <div class="img-right">
      <img
          src="https://cc-prod.scene7.com/is/image/CCProdAuthor/What-is-Stock-Photography_P1_mobile?$pjpeg$&jpegSize=200&wid=720"
          alt="dog">
    </div>
   </div>

   <!-- requirements  -->
   <div class="about-container">
    <div class="img-left">
      <img src="https://cc-prod.scene7.com/is/image/CCProdAuthor/What-is-Stock-Photography_P1_mobile?$pjpeg$&jpegSize=200&wid=720" alt="dog">
    </div>
    <div class="text-right" id="about-section">
      <h1>Requirements</h1>
      <div class="hr-wrapper" id="full-line">
        <hr>
      </div>
      <ul>
        <li>No entry fee, application fee, or registration fee [Program is 100% free to join.]</li>
        <li>Prior pageant experience NOT required</li>
        <li>17-26 years old and at least a high school senior</li>
        <li>At least 1/8 Vietnamese</li>
        <li>Foundational proficiency in Vietnamese or a commitment to ongoing Vietnamese language development</li>
        <li>Not a previous titleholder of Miss Vietnam San Diego or part of VAYA/TET Festival Staff</li>
        <li>Not currently married or divorced</li>
        <li>Not pregnant nor have a child</li>
        <li>Not been subject to any criminal proceedings (arrests) and/or criminal convictions (such as felonies)</li>
      </ul>
      <p>Deposit: $100 deposit is asked of every participant to ensure her commitment throughout the pageant process. This deposit will be returned at the completion of the pageant. Deposits can be made by check to “Vietnamese American Youth Alliance (VAYA)” or by cash.</p>
    </div>
  </div>

</template>

<style scoped>
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

.landing::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 20%; /* Adjust height as needed */
  background: linear-gradient(to top, rgba(0,0,0, 0.9), rgba(255, 255, 255, 0));
}

.landing-text {
  color: #FAF9F8;
  /* padding-top: 40%; */
  margin-top: 600px;
  margin-left: 120px;
  z-index: 1;
}

/* join sisterhood  */
.hr-wrapper {
  display: flex;
  justify-content: center;
}

#full-line hr {
  border: none;
  border-top: 2px solid #DF6BA2;
  opacity: 1;
  /* border-color: #8E3B7C; */
  width: 100%;
  margin-top: 0;
}
#join-sister p{
  /* padding-bottom: 0px; */
  margin: 0;
}
/* why miss viet  */
li{
  margin: 5px;
}
ul{
  padding-left: 10px;
}
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
.respon-text p{
  padding-top: 10px;
  padding-bottom: 30px;
}
.respon-text h3{
  margin: 0;
}

</style>