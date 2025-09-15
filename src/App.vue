<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { getPageHeadings } from './utils/pageHeadings.js'
import externalLinks from './data/external-links.json'

// Centralized navigation configuration
const navigationLinks = [
  { name: 'Home', path: '/', active: true },
  { name: 'About', path: '/about', active: true },
  { name: 'Announcements', path: '/events', active: false }, // Currently disabled
  { name: 'Sisterhood', path: '/sisterhood', active: true },
  { name: 'Competition', path: '/competition', active: true },
  { name: 'Impact', path: '/impact', active: true },
  { name: 'Reign', path: '/reign', active: true },
  { name: 'Apply Now!', path: '/apply', active: true }
]

// Filter active links for navbar
const activeNavLinks = navigationLinks.filter(link => link.active)

// Footer sections configuration with dynamic headings
const footerSections = [
  {
    title: 'Contact',
    links: [
      { text: externalLinks.contact.email, href: `mailto:${externalLinks.contact.email}` }
    ],
    social: true,
    active: true // Always show contact
  },
  {
    title: 'Announcements',
    links: [
      { text: 'Social Feed', href: '#' }
    ],
    active: navigationLinks.find(link => link.name === 'Announcements')?.active || false
  },
  {
    title: 'About',
    links: getPageHeadings('/about'),
    active: navigationLinks.find(link => link.name === 'About')?.active || false
  },
  {
    title: 'Sisterhood',
    links: getPageHeadings('/sisterhood'),
    active: navigationLinks.find(link => link.name === 'Sisterhood')?.active || false
  },
  {
    title: 'Impact',
    links: getPageHeadings('/impact'),
    active: navigationLinks.find(link => link.name === 'Impact')?.active || false
  },
  {
    title: 'Reign',
    links: getPageHeadings('/reign'),
    active: navigationLinks.find(link => link.name === 'Reign')?.active || false
  },
  {
    title: 'Competition',
    links: getPageHeadings('/competition'),
    active: navigationLinks.find(link => link.name === 'Competition')?.active || false
  },
  {
    title: 'Apply Now',
    links: getPageHeadings('/apply'),
    active: navigationLinks.find(link => link.name === 'Apply Now!')?.active || false
  }
]

// Filter active footer sections
const activeFooterSections = footerSections.filter(section => section.active !== false)
</script>

<template>
  <div class="mvsd-container">
    <nav class="navbar">
      <a class="navbar-logo" href="/">
        <img src="./assets/mvsd.svg" style="height: 100px" alt="">
      </a>
      <ul class="navbar-pages">
        <li v-for="link in activeNavLinks" :key="link.name" class="nav-item">
          <RouterLink class="nav-link" :to="link.path" :aria-current="link.name === 'Home' ? 'page' : undefined">
            {{ link.name }}
          </RouterLink>
        </li>
      </ul>
    </nav>


    <main>
      <RouterView />
    </main>

    <footer class="footer">
      <div class="mvsd-footer__container">
        <div class="footer-logo">
          <img src="./assets/mvsd.svg" alt="Logo" height="120" class="d-inline-block align-text-top">
        </div>

        <div v-for="section in activeFooterSections" :key="section.title" class="foot-col">
          <h4>{{ section.title }}</h4>
          <ul>
            <li v-for="link in section.links" :key="link.text">
              <RouterLink v-if="link.href.startsWith('/')" :to="link.href">{{ link.text }}</RouterLink>
              <a v-else :href="link.href">{{ link.text }}</a>
            </li>
          </ul>
          <div v-if="section.social" class="social-links">
            <a :href="externalLinks.socialMedia.instagram" target="_blank"><i class="fa-brands fa-instagram"></i></a>
            <a :href="externalLinks.socialMedia.facebook" target="_blank"><i class="fa-brands fa-facebook"></i></a>
            <a :href="externalLinks.socialMedia.youtube"><i class="fa-brands fa-youtube"></i></a>
          </div>
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

<style scoped lang="scss">
@use './styles/variables' as *;

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
        background: $mvsd-colors-primary;
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
        background: $mvsd-colors-primary;
      }
    }
  }
}

.mvsd-footer__container {
  display: flex;
  justify-content: space-evenly;
  padding: 50px 0px;
  background: #faf9f8;

  .footer-logo {
    margin-bottom: 20px;
  }

  h4 {
    line-height: 2;
  }

  .social-links {
    font-size: 24px;

    a {
      margin-right: 8px;
    }

  }

  .foot-col a {
    line-height: 1.5;
    color: black;
    text-decoration: none;

    &:hover {
      color: $mvsd-colors-primary;
      text-decoration: underline;
    }
  }
}
</style>
