<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <!-- navbar  -->
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="./assets/mvsd.svg" alt="Logo" width="80" height="80" class="d-inline-block align-text-top">
      </a>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link active" to="/" aria-current="page" href="#">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/events">Events & News</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/sisterhood">Sisterhood</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/about">About</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/impact">Impact</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/apply">Apply Now!</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <main>
    <RouterView />
  </main>


</template>

<script>
export default {
  name: 'VerticalSplit',
}
</script>

<style>
/* landing page */
.landing-container {
  display: flex;
  height: 90vh;
  background-color: rgb(235, 228, 235);
  /* background-image: url('https://cc-prod.scene7.com/is/image/CCProdAuthor/What-is-Stock-Photography_P1_mobile?$pjpeg$&jpegSize=200&wid=720'); add mvsd img  */
  /* background-sçize: cover; */
  /* background-position: center; */
  position: relative;
}

.text-panel {
  flex: 1;
}

.overlay {
  padding-top: 25%;
  padding-left: 15%;
  max-width: 75%;
  color: black;
  text-align: left;
}

.img-panel {
  flex: 1;
}

/* Landing Image Panel CSS */
#landing-img {
  flex: 1;
  align-items: center;
  background-color: antiquewhite;
}

#landing-img .info-right img {
  width: 80%;
  height: auto;
}


/* more info section  */
.info-container {
  display: flex;
  height: 60vh;
  flex-direction: row;
}

/* #infoPanel-text{
  background-color: rgb(160, 94, 157);
}

#infoPanel-img{
  background-color: rgb(111, 94, 160);
} */

.text {
  position: relative;
  max-width: 75%;
  text-align: left;
  padding: 20px;
}

#info-text {
  top: 10%;
  left: 5%;
}

.info-right {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.info-right img {
  width: auto;
  height: 80%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* royal court  */
.royalCourt-container {
  display: flex;
  height: 60vh;
  flex-direction: row;
}

#court-text {
  top: 10%;
  left: 5%;
}

/* announcements css  */
.announcement-header {
  display: flex;
  justify-content: space-between;
  padding-left: 8%;
  padding-right: 8%;
  /*fix spacing */
}

.announcements {
  display: flex;
  justify-content: center;
}

.card {
  background-color: #FFF8FD;
  border: 2px solid #8E3B7C;
  width: 348px;
  height: 446px;
  margin: 10px;
  text-align: left;
  border-radius: 20px;
}

.card-img {
  height: 215px;
  /* border-radius: 15px; */
  /* width: 324px; */
  margin-bottom: 15px;
  background-size: cover;
  border-radius: 17px;
  border-bottom-left-radius: 0%;
  border-bottom-right-radius: 0%;
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
  border-top: 2px solid #8E3B7C;
  opacity: 1;
  /* border-color: #8E3B7C; */
  width: 314px;
  margin-top: 0;
}

.card h3 {
  font-size: 26px;
  padding-left: 12px;
  padding-right: 12px;
}

.card p {
  font-size: 16px;
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 14px;
  margin-bottom: 0;
}

.calendar {
  display: flex;
  padding-left: 12px;
  /* margin: 10px; */
  align-items: center;
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



/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>
