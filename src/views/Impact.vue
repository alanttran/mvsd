<template>
  <PageBanner title="Our Impact" background-image="banner-impact.jpg" :show-gradient="true" text-position="bottom" />
  <section class="impact-title-section" id="empowering-beauty">
    <h2 class="fancy-underline">Inspiring Community</h2>
    <p class="intro-paragraph">Miss Vietnam San Diego is making lasting waves throughout the Vietnamese community in San
      Diego by empowering
      beauty and inspiring community. MVSD is giving Vietnamese girls the confidence to become their best selves and the
      sisterhood to find lifelong community. MVSD is also giving back through meaningful service projects that allow the
      beauty of the community to shine brighter.</p>
  </section>

  <!-- Current Project Section -->
  <section class="current-project-section" id="current-project">
    <h2 class="fancy-underline">2025 Project Sang</h2>
    <p class="intro-paragraph">Our current Royal Court is proud to present Project Sang, a comprehensive initiative
      focused on empowering children with autism through accessible STEAM education and community support.</p>

    <div class="project-sang-content">
      <div class="image-mission-container">
        <div class="project-sang-image">
          <img :src="projectSangImage" alt="2025 Project Sang" loading="lazy" />
        </div>

        <div class="mission-section">
          <h3>Mission</h3>
          <p>Our mission is to empower children with autism by providing accessible and engaging STEAM (Science,
            Technology, Engineering, Art, and Mathematics) resources. We believe that every child, regardless of
            background or ability, deserves to feel seen, supported, and inspired to learn. Through our work, we aim to
            deconstruct cultural stigmas surrounding learning disabilities and promote compassion, understanding, and
            inclusivity within the community.</p>
          <UpcomingEvent main-title="Reach for the Sky!" event-name="STEAM Workshop with Autism Tree"
            event-description="Engineering fun with paper airplanes & towers" event-date="September 27, 2025"
            event-time="1:00 PM - 3:00 PM" event-location="4747 Morena Blvd, Suite 355, San Diego, CA 92117"
            registration-url="https://bit.ly/ATMVSDW1" registration-deadline="2025-09-26T23:59:00"
            event-end-time="2025-09-27T15:00:00" />
        </div>
      </div>



      <div class="objectives-section">
        <h3>Objectives</h3>
        <div class="objectives-grid">
          <div class="objective-item">
            <div class="objective-icon">🔬</div>
            <h4>Introduce STEAM Concepts</h4>
            <p>Partner with Autism Tree to host specialized STEAM workshops that make these fields approachable for
              children with autism.</p>
          </div>
          <div class="objective-item">
            <div class="objective-icon">👨‍👩‍👧‍👦</div>
            <h4>Support Families</h4>
            <p>Host parent/guardian support groups and workshops to create safe spaces for discussing autism. This will
              empower families, particularly those in the Vietnamese community, to share their experiences and find the
              resources they need.</p>
          </div>
          <div class="objective-item">
            <div class="objective-icon">🤝</div>
            <h4>Promote Inclusivity</h4>
            <p>Serve as advocates for inclusive learning environments and destigmatize misconceptions about Autism
              Spectrum Disorder within the community.</p>
          </div>
          <div class="objective-item">
            <div class="objective-icon">🌟</div>
            <h4>Inspire Lasting Change</h4>
            <p>Inspire other organizations, schools, and libraries to continue providing accessible STEAM resources for
              autistic children long after our project is complete.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="impact-title-section" id="past-court-projects">
    <h2 class="fancy-underline">Past Court Projects</h2>
    <p class="intro-paragraph">Every year since 2015, the Royal Court of Miss Vietnam San Diego organizes a
      community-based project to
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
import UpcomingEvent from '../components/UpcomingEvent.vue'
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
import projectSangImage from '../assets/projects/2025-project-sang.jpg'

/**
 * Impact page component displaying the organization's impact
 * @component
 */
export default {
  name: 'Impact',
  components: {
    PageBanner,
    UpcomingEvent
  },
  data() {
    return {
      projectSangImage: projectSangImage,
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
}


.intro-paragraph {
  text-align: center;
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 800px;
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

.current-project-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 980px;
  margin: 0 auto;
  padding: 2rem;
}

.project-sang-content {
  width: 100%;
  margin-top: 2rem;
}

.image-mission-container {
  display: flex;
  gap: 3rem;
  align-items: flex-start;
  margin-bottom: 3rem;
}

.project-sang-image {
  flex: 1;
  text-align: center;
}

.project-sang-image img {
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.mission-section {
  flex: 1;
  margin-bottom: 0;
}

.mission-section h3 {
  color: #DF6BA2;
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-align: left;
}

.mission-section p {
  line-height: 1.6;
  color: #333;
  text-align: left;
  margin: 0;
}

.objectives-section h3 {
  color: #DF6BA2;
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
}

.objectives-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.objective-item {
  background: #faf9f8;
  border: 2px solid #DF6BA2;
  border-radius: 12px;
  padding: 2rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-align: center;
}

.objective-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: block;
}

.objective-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(223, 107, 162, 0.15);
}

.objective-item h4 {
  color: #DF6BA2;
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
}

.objective-item p {
  line-height: 1.5;
  color: #333;
  margin: 0;
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
  .image-mission-container {
    flex-direction: column;
    gap: 2rem;
  }

  .mission-section h3 {
    text-align: center;
  }

  .mission-section p {
    text-align: center;
  }

  .objectives-grid {
    grid-template-columns: 1fr;
  }

  .objective-item {
    padding: 1.5rem;
  }

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