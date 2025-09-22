<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { getPageHeadings } from './utils/pageHeadings.js'
import externalLinks from './data/external-links.json'
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useSEO } from './composables/useSEO.js'

// Get current year for copyright
const currentYear = computed(() => new Date().getFullYear())

// SEO management
const { generateOrganizationSchema, injectStructuredData } = useSEO()

// Mobile menu state
const isMobileMenuOpen = ref(false)

// Toggle mobile menu
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  // Prevent body scroll when menu is open
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

// Close mobile menu when route changes
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  document.body.style.overflow = ''
}

// Handle click outside to close menu
const handleClickOutside = (event) => {
  if (isMobileMenuOpen.value && !event.target.closest('.navbar')) {
    closeMobileMenu()
  }
}

// Add event listeners
onMounted(() => {
  document.addEventListener('click', handleClickOutside)

  // Inject organization structured data
  const organizationData = generateOrganizationSchema({
    contactPoint: {
      "@type": "ContactPoint",
      "contactType": "General Inquiry",
      "email": externalLinks.contact.email
    },
    sameAs: [
      externalLinks.socialMedia.instagram,
      externalLinks.socialMedia.facebook,
      externalLinks.socialMedia.youtube,
      externalLinks.socialMedia.tiktok
    ]
  })
  injectStructuredData(organizationData)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  // Clean up body overflow on unmount
  document.body.style.overflow = ''
})

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
    <nav class="navbar" role="navigation" aria-label="Main navigation">
      <a class="navbar-logo" href="/" aria-label="Miss Vietnam San Diego - Home">
        <img src="./assets/mvsd.svg" style="height: 100px" alt="Miss Vietnam San Diego Logo">
      </a>

      <!-- Hamburger menu button -->
      <button class="hamburger-menu" @click="toggleMobileMenu" :class="{ 'hamburger-menu--open': isMobileMenuOpen }"
        :aria-expanded="isMobileMenuOpen" aria-label="Toggle navigation menu">
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>

      <!-- Desktop navigation -->
      <ul class="navbar-pages navbar-pages--desktop" role="menubar">
        <li v-for="link in activeNavLinks" :key="link.name" class="nav-item" role="none">
          <RouterLink class="nav-link" :to="link.path" :aria-current="link.name === 'Home' ? 'page' : undefined"
            role="menuitem">
            {{ link.name }}
          </RouterLink>
        </li>
      </ul>

      <!-- Mobile navigation -->
      <ul class="navbar-pages navbar-pages--mobile" :class="{ 'navbar-pages--open': isMobileMenuOpen }" role="menubar">
        <li v-for="link in activeNavLinks" :key="link.name" class="nav-item" role="none">
          <RouterLink class="nav-link" :to="link.path" :aria-current="link.name === 'Home' ? 'page' : undefined"
            @click="closeMobileMenu" role="menuitem">
            {{ link.name }}
          </RouterLink>
        </li>
      </ul>
    </nav>


    <main role="main">
      <RouterView />
    </main>

    <footer class="footer" role="contentinfo">
      <div class="mvsd-footer__container">
        <div class="footer-logo">
          <img src="./assets/mvsd.svg" alt="Miss Vietnam San Diego Logo" height="100"
            class="d-inline-block align-text-top">
          <div class="footer-trademark">
            <p>&copy; 2006-{{ currentYear }} Miss Vietnam of San Diego. All rights reserved.</p>
            <p>Trademark belongs to Vietnamese-American Youth Alliance (VAYA).</p>
          </div>
        </div>

        <!-- About and Contact grouped section (matches nav order: About) -->
        <div class="foot-col foot-col--grouped foot-col--about-contact" v-if="aboutSection || contactSection">
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
        <div class="foot-col foot-col--grouped foot-col--impact-reign" v-if="impactSection || reignSection">
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
  align-items: center;
  position: relative;
}

.navbar-logo {
  margin-left: 1rem;
  z-index: 1001; // Ensure logo stays above mobile menu
}

// Hamburger menu button
.hamburger-menu {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;
  transition: all 0.3s ease;
  margin-right: 1rem;

  .hamburger-line {
    width: 100%;
    height: 3px;
    background-color: #363636;
    transition: all 0.3s ease;
    transform-origin: center;
  }

  // Hamburger animation when open
  &.hamburger-menu--open {
    .hamburger-line {
      &:nth-child(1) {
        transform: rotate(45deg) translate(6px, 6px);
      }

      &:nth-child(2) {
        opacity: 0;
      }

      &:nth-child(3) {
        transform: rotate(-45deg) translate(8px, -8px);
      }
    }
  }

  @media (max-width: 768px) {
    display: flex;
  }
}

.navbar-pages {
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  li a {
    text-decoration: none;
    position: relative;
    color: #363636;
    margin: 0 10px;

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

  // Desktop navigation
  &--desktop {
    @media (max-width: 768px) {
      display: none;
    }
  }

  // Mobile navigation
  &--mobile {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(10px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    transform: translateX(-100%);
    transition: transform 0.3s ease;

    &.navbar-pages--open {
      transform: translateX(0);
    }

    li {
      margin: 1rem 0;

      a {
        font-size: 1.5rem;
        font-weight: 500;
        padding: 1rem 2rem;
        display: block;
        text-align: center;
        border-radius: 8px;
        transition: all 0.3s ease;

        &:hover {
          background-color: rgba($mvsd-colors-primary, 0.1);
          transform: translateY(-2px);
        }

        &.router-link-active {
          background-color: rgba($mvsd-colors-primary, 0.2);
          color: $mvsd-colors-primary;

          &:after {
            display: none;
          }
        }
      }
    }

    @media (max-width: 768px) {
      display: flex;
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

    // Hide navigation sections on mobile (keep only logo and contact)
    @media (max-width: 768px) {
      &:not(.foot-col--grouped) {
        display: none;
      }
    }
  }

  // Hide About section in about-contact grouped section on mobile
  .foot-col--about-contact {
    @media (max-width: 768px) {
      .footer-subsection:first-child {
        display: none; // Hide About section
      }
    }
  }

  // Hide entire Impact and Reign grouped section on mobile
  .foot-col--impact-reign {
    @media (max-width: 768px) {
      display: none;
    }
  }

  // Mobile-specific adjustments
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 20px 16px;

    .footer-logo {
      margin-right: 0;
      margin-bottom: 30px;
      max-width: 100%;
    }

    .foot-col--grouped {
      width: 100%;
      max-width: 400px;
    }
  }
}
</style>
