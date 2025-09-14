<template>
  <PageBanner title="Reign" background-image="banner-impact.jpg" :show-gradient="true" text-position="bottom" />

  <section class="impact-title-section" id="reign-intro">
    <h2 class="fancy-underline">A Year of Service</h2>
    <p>Follow the journey of our Royal Court throughout their year of service. From community appearances to cultural
      celebrations, witness the impact they make across San Diego. Our titleholders engage with diverse communities
      through
      university events, cultural festivals, scholarship pageants, and community service projects. They participate in
      Vietnamese cultural celebrations, multicultural fairs, Buddhist temple events, and AAPI unity festivals, while
      supporting local organizations and fostering connections across San Diego's vibrant communities.</p>
  </section>

  <!-- Timeline Section -->
  <section class="timeline-section" id="timeline">
    <h2 class="fancy-underline">Timeline of Events</h2>
    <div class="timeline">
      <div v-for="month in timelineData" :key="month.month" class="timeline-month">
        <div class="month-header">
          <h3>{{ month.month }}</h3>
        </div>
        <div class="month-content">
          <div class="events-column">
            <div v-for="event in month.events" :key="event.id" class="event-item">
              <span class="event-title">{{ event.title }}</span>
            </div>
          </div>
          <div class="photos-column">
            <div v-if="month.month === 'September'" class="month-photos">
              <div class="month-photo" :style="{ '--random-offset': getRandomOffset() }">
                <img :src="sepImg" :alt="`${month.month} Photos`" loading="lazy" />
              </div>
              <div class="month-photo" :style="{ '--random-offset': getRandomOffset() }">
                <img :src="sep2Img" :alt="`${month.month} Photos`" loading="lazy" />
              </div>
            </div>
            <div v-else-if="month.month === 'May'" class="month-photos">
              <div class="month-photo" :style="{ '--random-offset': getRandomOffset() }">
                <img :src="mayImg" :alt="`${month.month} Photos`" loading="lazy" />
              </div>
              <div class="month-photo" :style="{ '--random-offset': getRandomOffset() }">
                <img :src="may2Img" :alt="`${month.month} Photos`" loading="lazy" />
              </div>
            </div>
            <div v-else-if="month.month === 'October'" class="month-photos">
              <div class="month-photo" :style="{ '--random-offset': getRandomOffset() }">
                <img :src="octImg" :alt="`${month.month} Photos`" loading="lazy" />
              </div>
              <div class="month-photo" :style="{ '--random-offset': getRandomOffset() }">
                <img :src="oct2Img" :alt="`${month.month} Photos`" loading="lazy" />
              </div>
            </div>
            <div v-else-if="month.imageUrl" class="month-photo" :style="{ '--random-offset': getRandomOffset() }">
              <img :src="month.imageUrl" :alt="`${month.month} Photos`" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PageBanner from '../components/PageBanner.vue'
import timelineData from '../data/timeline.json'

// Import timeline images
import febImg from '../assets/timeline/feb.jpg'
import feb2Img from '../assets/timeline/feb2.jpg'
import marImg from '../assets/timeline/mar.jpg'
import aprImg from '../assets/timeline/apr.jpg'
import apr2Img from '../assets/timeline/apr-2.jpg'
import mayImg from '../assets/timeline/may.jpg'
import may2Img from '../assets/timeline/may2.jpg'
import junImg from '../assets/timeline/jun.jpg'
import julImg from '../assets/timeline/jul.jpg'
import sepImg from '../assets/timeline/sep.jpg'
import sep2Img from '../assets/timeline/sep2.jpg'
import octImg from '../assets/timeline/oct.jpg'
import oct2Img from '../assets/timeline/oct2.jpg'
import novImg from '../assets/timeline/nov.jpg'
import decImg from '../assets/timeline/dec.jpg'
import janImg from '../assets/timeline/jan.jpg'

/**
 * Reign page component displaying the Royal Court's timeline of events
 * @component
 */
export default {
  name: 'Reign',
  components: {
    PageBanner
  },
  data() {
    return {
      timelineData: timelineData.map(month => ({
        ...month,
        imageUrl: this.getMonthImage(month.month)
      })),
      sepImg: sepImg,
      sep2Img: sep2Img,
      mayImg: mayImg,
      may2Img: may2Img,
      octImg: octImg,
      oct2Img: oct2Img
    }
  },
  methods: {
    getMonthImage(monthName) {
      const imageMap = {
        'January/February': febImg,
        'March': marImg,
        'April': aprImg,
        'May': mayImg,
        'June': junImg,
        'July': julImg,
        'August': null, // No image for August
        'September': sep2Img,
        'October': octImg,
        'November': novImg,
        'December': decImg,
        'January': janImg,
        'February (Next Year)': feb2Img
      }
      return imageMap[monthName] || null
    },
    getRandomOffset() {
      // Generate random offset between -20px and 40px to avoid collision with left content
      return Math.floor(Math.random() * 61) - 20 + 'px'
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

h2.fancy-underline {
  line-height: 4;
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

.timeline-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 980px;
  margin: 0 auto;
  padding: 2rem;
}

.timeline {
  margin-top: 3rem;
  width: 100%;
  max-width: 980px;
}

.timeline-month {
  margin-bottom: 4rem;
  border-left: 3px solid #DF6BA2;
  padding-left: 2rem;
  position: relative;
}

.timeline-month::before {
  content: '';
  position: absolute;
  left: -8px;
  top: 0;
  width: 13px;
  height: 13px;
  background: #DF6BA2;
  border-radius: 50%;
}

.month-header {
  margin-bottom: 2rem;
}

.month-header h3 {
  color: #DF6BA2;
  font-size: 2rem;
  font-weight: 600;
  margin: 0;
}

.month-content {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
}

.events-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.event-item {
  background: #faf9f8;
  border: 2px solid #DF6BA2;
  border-radius: 8px;
  padding: 1rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.event-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(223, 107, 162, 0.2);
}

.event-title {
  color: #333;
  font-size: 1.1rem;
  font-weight: normal;
  margin: 0;
}

.photos-column {
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 1rem;
  min-width: 0;
}

.month-photo {
  width: 100%;
  max-width: 300px;
  position: relative;
}

.month-photo img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  transform: translateX(var(--random-offset, 0px));
  max-width: 280px;
}

.month-photos {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  align-items: flex-start;
}

.month-photos .month-photo {
  width: 100%;
  max-width: 300px;
  position: relative;
}

/* Responsive design */
@media (max-width: 768px) {
  .month-content {
    flex-direction: column;
    gap: 1rem;
  }

  .photos-column {
    order: -1;
  }

  .month-photo {
    max-width: 100%;
  }

  .timeline-month {
    padding-left: 1rem;
  }
}
</style>
