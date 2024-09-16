<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container">
    <nav class="navbar">
      <a class="navbar-logo" href="/">
        <img src="./assets/mvsd.svg" style="height: 100px" alt="">
      </a>
      <ul class="navbar-pages">
        <li class="nav-item">
          <RouterLink class="nav-link" to="/" aria-current="page" href="#">Home</RouterLink>
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
    </nav>


    <main>
      <RouterView />
    </main>

    <footer class="footer">
      <div class="footer-container">
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
          <h4>Announcements</h4>
          <ul>
            <li><a href='#'>Social Feed</a></li>
          </ul>
        </div>

        <div class="foot-col">
          <h4>Sisterhood</h4>
          <ul>
            <li><a href='#'>Royal Court</a></li>
            <li><a href='#'>Former Titleholders</a></li>
            <li><a href='#'>Contestants</a></li>
          </ul>
        </div>

        <div class="foot-col">
          <h4>About</h4>
          <ul>
            <li><a href='#'>Mission</a></li>
            <li><a href='#'>History</a></li>
            <li><a href='#'>Staff</a></li>
            <li><a href='#'>Sponsors</a></li>
          </ul>
        </div>

        <div class="foot-col">
          <h4>Impact</h4>
          <ul>
            <li><a href='#'>Testimonials</a></li>
            <li><a href='#'>Project</a></li>
          </ul>
        </div>
        <div class="foot-col">
          <h4>Apply Now</h4>
          <ul>
            <li><a href='#'>Responsibilities</a></li>
            <li><a href='#'>Requirements</a></li>
            <li><a href='#'>Application</a></li>
            <li><a href='#'>Titles & Rewards</a></li>
          </ul>
        </div>
      </div>
    </footer>
  </div>

</template>

<script>
export default {
  name: 'VerticalSplit',
}

</script>

<style scss scoped>
.navbar {
  display: flex;
  justify-content: space-between;
}

.navbar-logo {
  margin-left: 1rem;
}

.navbar-pages {
  display: flex;
  width: 45%;
  justify-content: space-evenly;
  align-items: center;

  li a {
    text-decoration: none;
    position: relative;
    color: #363636;

    &.router-link-active {
      &:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -6px;
        width: 100%;
        height: 2px;
        background: #DF6BA2;
      }
    }

    &:hover {
      &:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -6px;
        width: 100%;
        height: 2px;
        background: #DF6BA2;
      }
    }
  }
}

.footer-container {
  display: flex;
  justify-content: space-evenly;
  padding: 50px 0px;

  .foot-col {
    line-height: 1.5;
  }
}
</style>
