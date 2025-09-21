<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { getPageHeadings } from './utils/pageHeadings.js'
import externalLinks from './data/external-links.json'
import { computed } from 'vue'

// Get current year for copyright
const currentYear = computed(() => new Date().getFullYear())

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

// Separate Impact, Reign, About, and Contact from other sections
const regularFooterSections = activeFooterSections.filter(section =>
  section.title !== 'Impact' &&
  section.title !== 'Reign' &&
  section.title !== 'About' &&
  section.title !== 'Contact'
)
const impactSection = activeFooterSections.find(section => section.title === 'Impact')
const reignSection = activeFooterSections.find(section => section.title === 'Reign')
const aboutSection = activeFooterSections.find(section => section.title === 'About')
const contactSection = activeFooterSections.find(section => section.title === 'Contact')
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
          <img src="./assets/mvsd.svg" alt="Logo" height="100" class="d-inline-block align-text-top">
          <div class="footer-trademark">
            <p>&copy; 2006-{{ currentYear }} Miss Vietnam of San Diego. All rights reserved.</p>
            <p>Trademark belongs to Vietnamese-American Youth Alliance (VAYA).</p>
          </div>
        </div>

        <!-- About and Contact grouped section (matches nav order: About) -->
        <div class="foot-col foot-col--grouped" v-if="aboutSection || contactSection">
          <div v-if="aboutSection" class="footer-subsection">
            <h4>About</h4>
            <ul>
              <li v-for="link in aboutSection.links" :key="link.text">
                <RouterLink v-if="link.href.startsWith('/')" :to="link.href">{{ link.text }}</RouterLink>
                <a v-else :href="link.href">{{ link.text }}</a>
              </li>
            </ul>
          </div>
          <div v-if="contactSection" class="footer-subsection">
            <h4>Contact</h4>
            <ul>
              <li v-for="link in contactSection.links" :key="link.text">
                <RouterLink v-if="link.href.startsWith('/')" :to="link.href">{{ link.text }}</RouterLink>
                <a v-else :href="link.href">{{ link.text }}</a>
              </li>
            </ul>
            <div v-if="contactSection.social" class="social-links">
              <a :href="externalLinks.socialMedia.instagram" target="_blank"><i class="fa-brands fa-instagram"></i></a>
              <a :href="externalLinks.socialMedia.facebook" target="_blank"><i class="fa-brands fa-facebook"></i></a>
              <a :href="externalLinks.socialMedia.youtube"><i class="fa-brands fa-youtube"></i></a>
              <a :href="externalLinks.socialMedia.tiktok" target="_blank"><i class="fa-brands fa-tiktok"></i></a>
            </div>
          </div>
        </div>

        <!-- Sisterhood section (matches nav order: Sisterhood) -->
        <div v-for="section in regularFooterSections.filter(s => s.title === 'Sisterhood')" :key="section.title"
          class="foot-col">
          <h4>{{ section.title }}</h4>
          <ul>
            <li v-for="link in section.links" :key="link.text">
              <RouterLink v-if="link.href.startsWith('/')" :to="link.href">{{ link.text }}</RouterLink>
              <a v-else :href="link.href">{{ link.text }}</a>
            </li>
          </ul>
        </div>

        <!-- Competition section (matches nav order: Competition) -->
        <div v-for="section in regularFooterSections.filter(s => s.title === 'Competition')" :key="section.title"
          class="foot-col">
          <h4>{{ section.title }}</h4>
          <ul>
            <li v-for="link in section.links" :key="link.text">
              <RouterLink v-if="link.href.startsWith('/')" :to="link.href">{{ link.text }}</RouterLink>
              <a v-else :href="link.href">{{ link.text }}</a>
            </li>
          </ul>
        </div>

        <!-- Impact and Reign grouped section (matches nav order: Impact, Reign) -->
        <div class="foot-col foot-col--grouped" v-if="impactSection || reignSection">
          <div v-if="impactSection" class="footer-subsection">
            <h4>Impact</h4>
            <ul>
              <li v-for="link in impactSection.links" :key="link.text">
                <RouterLink v-if="link.href.startsWith('/')" :to="link.href">{{ link.text }}</RouterLink>
                <a v-else :href="link.href">{{ link.text }}</a>
              </li>
            </ul>
          </div>
          <div v-if="reignSection" class="footer-subsection">
            <h4>Reign</h4>
            <ul>
              <li v-for="link in reignSection.links" :key="link.text">
                <RouterLink v-if="link.href.startsWith('/')" :to="link.href">{{ link.text }}</RouterLink>
                <a v-else :href="link.href">{{ link.text }}</a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Apply Now section (matches nav order: Apply Now!) -->
        <div v-for="section in regularFooterSections.filter(s => s.title === 'Apply Now')" :key="section.title"
          class="foot-col">
          <h4>{{ section.title }}</h4>
          <ul>
            <li v-for="link in section.links" :key="link.text">
              <RouterLink v-if="link.href.startsWith('/')" :to="link.href">{{ link.text }}</RouterLink>
              <a v-else :href="link.href">{{ link.text }}</a>
            </li>
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
  padding: 16px 0px;
  background: #faf9f8;
  font-size: .8em;

  .footer-logo {
    margin-bottom: 20px;
    max-width: 200px;
    margin-right: 10vw;

    .footer-trademark {
      margin-top: 15px;
      font-size: 0.8em;
      color: #666;
      line-height: 1.4;

      p {
        margin: 3px 0;
      }
    }
  }

  h4 {
    line-height: 2;
    font-size: 1em;
  }

  .social-links {
    font-size: 18px;

    a {
      margin-right: 8px;
    }

  }

  .foot-col {
    flex: 1;

    a {
      line-height: 1.5;
      color: $mvsd-colors-text;
      text-decoration: none;

      &:hover {
        color: $mvsd-colors-primary;
        text-decoration: underline;
      }
    }

    &.foot-col--grouped {
      .footer-subsection {
        margin-bottom: 16px;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>
