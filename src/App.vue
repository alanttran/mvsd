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
            <RouterLink class="nav-link" to="/events">Announcements</RouterLink>
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

  <!-- non bootstrap nav bar FIX  -->
  <!-- <nav class="navbar">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="./assets/mvsd.svg" alt="Logo" width="80" height="80">
      </a>
      <ul class="navbar-nav">
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
  </nav> -->

  <main>
    <RouterView />
  </main>

  <footer class="footer">
    <div class="footer-container">

      <div class="foot-row">
        <div class="footer-logo">
          <img src="./assets/mvsd.svg" alt="Logo" width="80" height="80" class="d-inline-block align-text-top">
        </div>

        <div class="foot-col">
          <h4>Contact</h4>
          <ul>
            <li><a href='#'>pageant@sdtet.com</a></li>
          </ul>
          <div class="social-links">
            <a href="#"><i class="fa-brands fa-instagram"></i></a>
            <a href="#"><i class="fa-brands fa-facebook"></i></a>
            <a href="#"><i class="fa-brands fa-youtube"></i></a>

          </div>
        </div>

        <div class="foot-col">
          <h4>Home</h4>
          <ul>
            <li><a href='#'></a></li>
          </ul>
        </div>
  
        <div class="foot-col">
          <h4>Announcements</h4>
          <ul>
            <li><a href='#'>Social Feed</a></li>
          </ul>
        </div>

        <div class="foot-col">
          <h4>Sisterhood</h4>
          <ul>
            <li><a href='#'>Royal Court</a></li>
            <li><a href='#'>FAQ</a></li>
          </ul>
        </div>

        <div class="foot-col">
          <h4>About</h4>
          <ul>
            <li><a href='#'>Sponsors</a></li>
            <li><a href='#'>Staff</a></li>
            <li><a href='#'>Tet Festival</a></li>
          </ul>
        </div>

        <div class="foot-col">
          <h4>Impact</h4>
          <ul>
            <li><a href='#'>Testimonials</a></li>
            <li><a href='#'>Staff</a></li>
          </ul>
        </div>

      </div>
    </div>
</footer>


</template>

<script>
export default {
  name: 'VerticalSplit',
}

</script>

<style>
/* landing page */


/* about  */
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
  width: 100%;
}
.text-right{
  margin-top: 50px;
  margin-bottom: 50px;
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
/* royal court  */
.royal-court{
  display: flex;
  align-items: center;
  text-align: left;
  justify-content: space-between;
  margin-top: 30px;
}
.text-left{
  margin-left: 8%;
  margin-right: 8%;
  flex: 50%;
}
.img-right{
  flex: 50%;
}
.img-right img{
width:100%;
}
.text-left h2{
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 40px;
}
.text-left p{
  font-size: 16px;
  padding-top: 15px;
  padding-bottom: 15px;
}
/* apply now */
#apply-now{
  margin-right: 12%;
  margin-left: 8%;
}

/* footer  */
.footer-logo img {
  width: 200px; 
  height: auto; 
  align-items: center;
}
.footer{
  background-color:rgb(226, 210, 217);
  padding: 30px 40px;
  
}
.footer-container{
  max-width: 1440px;
  margin: auto;
  text-align: left;
  align-items: center;
}
.footer ul{
  list-style: none;
  margin: 0;
  padding: 0;
}
.footer li{
  padding-bottom: 10px;
  font-size: 16px;
}
.foot-row{
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}
.foot-col{
  /* width: 25%; */
  padding: 0 25px;
}
.footer-col h4{
  font-size: 26px;
  margin-bottom: 5px;
}
.footer-col h4:hover{
  color: #d72a7b;
}
.footer a {
  text-decoration: none; 
  color: inherit; 
}
.footer a:hover{
  color: #d72a7b;
}

.social-links a {
  margin-right: 12px; 
  color: #DF6BA2; 
  font-size: 1.5em; 
}

.social-links a:hover {
  color: #d72a7b; 
}



</style>
