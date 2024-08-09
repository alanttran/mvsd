<template>
  <div class="landing">
    <div class="landing-text">
      <h1>Apply Now</h1>
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
</style>