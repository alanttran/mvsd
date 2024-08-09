<template>
  <!-- landing section  -->
  <div class="landing">
    <div class="landing-text">
      <h1>Sisterhood</h1>
    </div>
  </div>

  <!-- royal court cards  -->
   <section class="royal-court">
    <h1>Royal Court</h1>

    <div class="hr-wrapper">
      <hr>
    </div>

    <div class="royal-card">
      <div class="card">
        <div class="card-img card-1">
        </div>      
        <div class="card-bottom-box">
          <div class="card-content">
          <h3>Kendra Quốc Ngọc Nguyễn</h3>
          <p>Miss Vietnam San Diego of 2024</p>
          </div>
        </div>
      </div>
    
      <div class="card">
        <div class="card-img card-1">
        </div>
        
        <div class="card-bottom-box">
          <div class="card-content">
          <h3>Jennifer Mỹ Nguyễn</h3>
          <p>1st Princess</p>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-img card-1">
        </div>
        <div class="card-bottom-box">
          <div class="card-content">
          <h3>Angelina Hồng Mai Phan</h3>
          <p>2nd Princess</p>
          </div>
        </div>
      </div>
   
      <div class="card">
        <div class="card-img card-1">
        </div>
        <div class="card-bottom-box">
          <div class="card-content">
          <h3>Gia-Hân Lê Ngô</h3>
          <p>Miss Congeniality</p>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-img card-1">
        </div>
        <div class="card-bottom-box">
          <div class="card-content">
          <h3>Katie Phạm</h3>
          <p>Miss Community Service</p>
          </div>
        </div>
      </div>
    
      <div class="card">
        <div class="card-img card-1">
        </div>
        
        <div class="card-bottom-box">
          <div class="card-content">
          <h3>Xuân Hương Trần</h3>
          <p>People's Choice</p>
          </div>
        </div>
      </div>
    </div>
   </section>

   <!-- 2024 contestants  -->
   <section class="contestants">
    <h1>2024 Contestants</h1>
    <div class="contestants-hr-wrapper">
      <hr>
    </div>
    <div class="royal-card">
      <div class="profile">
        <div class="profile-img">
        </div>
        <div class="profile-bio">
          <h3>Mia Thảo-Nguyên Trần</h3>
          <p>Westview High School</p>
        </div>
      </div>

      <div class="profile">
        <div class="profile-img">
        </div>
        <div class="profile-bio">
          <h3>Claire Khánh Vi Nguyễn-Đỗ</h3>
          <p>Mt. Carmel High School</p>
        </div>
      </div>
      <div class="profile">
        <div class="profile-img">
        </div>
        <div class="profile-bio">
          <h3>Jacqueline Vũ</h3>
          <p>Scripps Ranch High School</p>
        </div>
      </div>
      <div class="profile">
        <div class="profile-img">
        </div>
        <div class="profile-bio">
          <h3>Vy Đoàn</h3>
          <p>UC San Diego</p>
        </div>
      </div>
    </div>
    
   </section>
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
/* landing  */
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

/* royal court cards  */
.royal-court, .contestants{
  margin-top: 80px;
  margin-bottom: 80px;
  padding-left: 5%;
  padding-right: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.royal-card{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.card {
  border: 2px solid #DF6BA2;
  width: 360px;
  height: 445px;
  margin: 10px;
  text-align: left;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
}
.card-img{
  width: 100%;
  height: 100%;
  background-position: center;
  position: absolute; 
}

.card-content {
  color: rgb(0, 0, 0);
  z-index: 3; 
}
.card-content p {
  color: #000000; /* or the color you want */
}
.card-bottom-box {
  position: absolute; 
  bottom: 0;
  left: 0;
  width: 360px; 
  height: 101px; 
  background: rgba(250, 249, 248, 0.5);
  z-index: 1; 
  padding-top: 15px;
  padding-left: 15px;
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
  width: 211px;
  margin-top: 15px;
  margin-bottom: 15px;
  /* margin-top: 15px; */
}

/* 2024 contestants  */
.contestants-hr-wrapper {
  display: flex;
  justify-content: center;
}
.contestants-hr-wrapper hr {
  border: none;
  border-top: 1.5px solid #DF6BA2;
  opacity: 1;
  width: 324px;
  margin-top: 15px;
  margin-bottom: 15px;
  /* margin-top: 15px; */
}
.profile{
  width: 220px;
  height: fit-content;
  text-align: center;
  margin: 25px;
  display: flex; 
  flex-direction: column; /* Stack children vertically */
  align-items: center; /* Center horizontally */
  justify-content: center;

}
.profile-img{
  width: 192px;
  height: 192px;
  border-radius: 50%; 
  border: 2px solid #DF6BA2; 
  overflow: hidden; 
  opacity: 1; 
  background-size: cover;
  background-image: url('https://cc-prod.scene7.com/is/image/CCProdAuthor/What-is-Stock-Photography_P1_mobile?$pjpeg$&jpegSize=200&wid=720');  /* make seperate id for each pfp  */
  background-position: center;
}
.profile-bio{
  padding-top: 15px;
  padding-bottom: 15px;
}

</style>
