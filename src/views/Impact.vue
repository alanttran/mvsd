<template>
  <PageBanner title="Our Impact" background-image="banner-impact.jpg" :show-gradient="true" text-position="bottom" />
  <section class="impact-title-section" id="empowering-beauty">
    <h2 class="fancy-underline">Empowering Beauty, Inspiring Community</h2>
    <p>Miss Vietnam San Diego is making lasting waves throughout the Vietnamese community in San Diego by empowering
      beauty and inspiring community. MVSD is giving Vietnamese girls the confidence to become their best selves and the
      sisterhood to find lifelong community. MVSD is also giving back through meaningful service projects that allow the
      beauty of the community to shine brighter.</p>
  </section>
  <section class="impact-title-section" id="past-court-projects">
    <h2 class="fancy-underline">Past Court Projects</h2>
    <p>Every year since 2015, the Royal Court of Miss Vietnam San Diego organizes a community-based project to
      strengthen the connection between Miss Vietnam San Diego and the local Vietnamese and broader San Diego
      communities
      which they proudly
      represent. Each year, the Court focuses on a topic of their choosing, which they feel best represents their
      passions and the community's needs.</p>
  </section>

  <!-- Projects Section -->
  <section class="projects-section">
    <div v-for="project in projects" :key="project.year" class="project-item" :id="`project-${project.year}`">
      <div class="project-image">
        <img :src="project.imageUrl" :alt="`${project.year} - ${project.title}`" loading="lazy" />
      </div>
      <div class="project-content">
        <h3>{{ project.year }}: {{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <div v-if="project.sponsors.length > 0" class="sponsors">
          <h4>Sponsors{{ project.year === '2018' || project.year === '2019' ? '/Partners' : '' }}:</h4>
          <ul>
            <li v-for="sponsor in project.sponsors" :key="sponsor">{{ sponsor }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
import PageBanner from '../components/PageBanner.vue'
import projectsData from '../data/projects.json'

// Import project images
import project2015 from '../assets/projects/2015-viet-4-cure.jpg'
import project2017 from '../assets/projects/2017-project-homecoming.jpg'
import project2018 from '../assets/projects/2018-homeless-care-package.png'
import project2019 from '../assets/projects/2019-homeless-care-package.png'
import project2020 from '../assets/projects/2020-food-bank.png'
import project2021 from '../assets/projects/2021-communites-in-action.png'
import project2022 from '../assets/projects/2022-project-power-with-periods.jpg'
import project2023 from '../assets/projects/2023-community-resource-fair.png'
import project2024 from '../assets/projects/2024-project-empower.jpg'

/**
 * Impact page component displaying the organization's impact
 * @component
 */
export default {
  name: 'Impact',
  components: {
    PageBanner
  },
  data() {
    return {
      projects: projectsData
        .slice()
        .reverse()
        .map(project => ({
          ...project,
          imageUrl: this.getProjectImage(project.image)
        }))
    }
  },
  methods: {
    getProjectImage(imageName) {
      const imageMap = {
        '2015-viet-4-cure.jpg': project2015,
        '2017-project-homecoming.jpg': project2017,
        '2018-homeless-care-package.png': project2018,
        '2019-homeless-care-package.png': project2019,
        '2020-food-bank.png': project2020,
        '2021-communites-in-action.png': project2021,
        '2022-project-power-with-periods.jpg': project2022,
        '2023-community-resource-fair.png': project2023,
        '2024-project-empower.jpg': project2024
      }
      return imageMap[imageName] || ''
    }
  }
}
</script>

<style scoped>
h1 {
  font-weight: 700;
  font-size: 40px;
}

h2 {
  width: fit-content;

  &.fancy-underline {
    line-height: 4;
  }
}

.impact-title-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 980px;
  margin: 0 auto;
  padding: 2rem;
}

.projects-section {
  max-width: 980px;
  margin: 0 auto;
  padding: 2rem;
}

.project-item {
  display: flex;
  margin-bottom: 5rem;
  gap: 2rem;
  align-items: flex-start;
}

.project-image {
  flex: 0 0 300px;
}

.project-image img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.project-content {
  flex: 1;
  padding-left: 1rem;
}

.project-content h3 {
  color: #DF6BA2;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.project-content p {
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: #333;
}

.sponsors h4 {
  color: #DF6BA2;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.sponsors ul {
  list-style-type: disc;
  padding-left: 1.5rem;
  margin: 0;
}

.sponsors li {
  margin-bottom: 0.25rem;
  color: #666;
}

/* Responsive design */
@media (max-width: 768px) {
  .project-item {
    flex-direction: column;
    gap: 1rem;
  }

  .project-image {
    flex: none;
    width: 100%;
  }

  .project-content {
    padding-left: 0;
  }
}
</style>