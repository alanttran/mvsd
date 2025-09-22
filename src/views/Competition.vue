<template>
  <PageBanner title="Competition" background-image="banner-competition.jpg" :show-gradient="true"
    text-position="bottom" />

  <section class="competition-intro-section" id="competition-intro">
    <h2 class="fancy-underline">Competition Details</h2>
    <p class="intro-paragraph">Our Miss Vietnam San Diego pageant is a comprehensive competition that evaluates
      contestants across multiple
      categories.
      The scoring system is designed to recognize well-rounded individuals who embody the values of leadership, cultural
      pride,
      and community service. Contestants are judged on their preparation, presentation, and commitment to the Vietnamese
      community.</p>
  </section>

  <!-- Scoring Breakdown Section -->
  <section class="scoring-section" id="scoring">
    <h2 class="fancy-underline">Scoring Breakdown</h2>
    <p class="intro-paragraph">The scoring system is cumulative, meaning that the scores from each category are added
      together to determine the
      final score.</p>
    <div class="scoring-grid">
      <div class="scoring-category">
        <div class="category-header">
          <h3>Pre-Pageant Score</h3>
          <span class="percentage"></span>
        </div>
        <div class="category-details">
          <p>Based on attendance to practices and volunteering activities throughout the preparation period.</p>
        </div>
      </div>

      <div class="scoring-category">
        <div class="category-header">
          <h3>Interviews</h3>
          <span class="percentage"></span>
        </div>
        <div class="category-details">
          <p>Personal interviews evaluating communication skills, cultural knowledge, and leadership potential.</p>
        </div>
      </div>

      <div class="scoring-category">
        <div class="category-header">
          <h3>Pageant Night Performance</h3>
          <span class="percentage"></span>
        </div>
        <div class="category-details">
          <p>Combined evaluation of:</p>
          <ul>
            <li>Evening Gown Presentation</li>
            <li>Áo Dài Cultural Wear</li>
            <li>First Question & Answer Round</li>
          </ul>
        </div>
      </div>

      <div class="scoring-category main-category">
        <div class="category-header">
          <h3>Final Q&A (Top 3 Only)</h3>
          <span class="percentage"></span>
        </div>
        <div class="category-details">
          <p>Final Question & Answer round for the top 3 contestants only.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Practice Schedule Section -->
  <section class="practice-section" id="practice-schedule">
    <h2 class="fancy-underline">Proposed Practice Schedule</h2>
    <p class="intro-paragraph">This is a proposed practice schedule and is subject to change.</p>
    <div class="practice-timeline">
      <div v-for="session in practiceSchedule" :key="session.id" :class="['practice-session', session.type]">
        <div class="session-date">{{ session.date }}</div>
        <div class="session-activity">{{ session.activity }}</div>
      </div>
    </div>
  </section>

  <!-- Judge Criteria Section -->
  <section class="judge-criteria-section" id="judge-criteria">
    <h2 class="fancy-underline">Judge Criteria & Vetting</h2>
    <p class="intro-paragraph">The judges are selected based on their reputation, language, objective, and
      confidentiality. Once a new contestant class is announced, we will be looking for new judges to join our panel.
    </p>
    <div class="criteria-container">
      <div class="criteria-table">
        <div class="criteria-header">
          <h3>MVSD Judge Criteria & Vetting</h3>
        </div>
        <div class="criteria-grid">
          <div class="criteria-item">
            <h4>Reputation</h4>
            <p>Respected member of the VN Community w/ minimal controversy. Pageant experience is ideal.</p>
          </div>
          <div class="criteria-item">
            <h4>Language</h4>
            <p>Fluent in both Vietnamese and English</p>
          </div>
          <div class="criteria-item">
            <h4>Objective</h4>
            <p>Does not know or never have met any of the contestants. Is not a part of any community group or family of
              any contestant</p>
          </div>
          <div class="criteria-item">
            <h4>Confidentiality</h4>
            <p>Once vetted, they are to keep their identity as a judge confidential until the time of competition.</p>
          </div>
          <div class="criteria-item">
            <h4>Financial Independence</h4>
            <p>Are not financial sponsors or donators to the pageant, VAYA, or Tet Festival to maintain impartiality.
            </p>
          </div>
          <div class="criteria-item">
            <h4>Training Requirement</h4>
            <p>Attend mandatory judge training sessions to understand scoring criteria and evaluation standards.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Past Judges Section -->
  <section class="past-judges-section" id="past-judges">
    <h2 class="fancy-underline">Past Judges</h2>
    <p class="intro-paragraph judges-intro">We are honored to have had these distinguished community leaders serve as
      judges for our
      pageant.</p>
    <div class="judges-grid">
      <div v-for="judge in judgesData" :key="judge.id" class="judge-card">
        <div class="judge-avatar">
          <img v-if="judge.image" :src="getJudgeImage(judge.image)" :alt="judge.name" class="judge-photo" />
          <span v-else class="judge-initial">{{ getInitial(judge.name) }}</span>
        </div>
        <div class="judge-info">
          <h3 class="judge-name">{{ judge.name }}</h3>
          <p class="judge-title">{{ judge.title }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PageBanner from '../components/PageBanner.vue'
import judgesData from '../data/judges.json'
import practiceSchedule from '../data/practice-schedule.json'

/**
 * Competition page component displaying scoring breakdown, practice schedule, and judge information
 * @component
 */
export default {
  name: 'Competition',
  components: {
    PageBanner
  },
  data() {
    return {
      judgesData: judgesData.sort((a, b) => a.name.localeCompare(b.name)),
      practiceSchedule: practiceSchedule
    }
  },
  methods: {
    getInitial(name) {
      return name.split(' ').map(n => n[0]).join('')
    },
    getJudgeImage(imageName) {
      return new URL(`../assets/judges/${imageName}`, import.meta.url).href
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


.competition-intro-section,
.scoring-section,
.practice-section,
.judge-criteria-section,
.past-judges-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 980px;
  margin: 0 auto;
  padding: 2rem;
}

.intro-paragraph {
  text-align: center;
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 800px;
}

/* Scoring Section */
.scoring-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  width: 100%;
}

.scoring-category {
  background: #faf9f8;
  border: 2px solid #DF6BA2;
  border-radius: 12px;
  padding: 2rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.scoring-category:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(223, 107, 162, 0.15);
}

.scoring-category.main-category {
  background: linear-gradient(135deg, #DF6BA2, #C55A8A);
  color: white;
  border-color: #C55A8A;
}

.category-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.category-header h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
}

.percentage {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 1.2rem;
}

.main-category .percentage {
  background: rgba(255, 255, 255, 0.3);
}

.category-details p {
  margin: 0 0 1rem 0;
  line-height: 1.5;
}

.category-details ul {
  margin: 0;
  padding-left: 1.5rem;
}

.category-details li {
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

/* Practice Schedule */
.practice-timeline {
  margin-top: 2rem;
  width: 100%;
  max-width: 600px;
}

.practice-session {
  display: flex;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid #e0e0e0;
  position: relative;
}

.practice-session:last-child {
  border-bottom: none;
}


.session-date {
  min-width: 80px;
  font-weight: 600;
  color: #DF6BA2;
  font-size: 1rem;
  margin-right: 1.5rem;
}

.practice-session.no-practice .session-date {
  color: #999;
}

.session-activity {
  flex: 1;
  color: #333;
  font-size: 1rem;
  line-height: 1.4;
}

.practice-session.no-practice .session-activity {
  color: #999;
  font-style: italic;
}

/* Judge Criteria */
.criteria-container {
  margin-top: 2rem;
  width: 100%;
}

.criteria-table {
  background: #faf9f8;
  border: 2px solid #DF6BA2;
  border-radius: 12px;
  overflow: hidden;
}

.criteria-header {
  background: #DF6BA2;
  color: white;
  padding: 1.5rem;
  text-align: center;
}

.criteria-header h3 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
}

.criteria-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 0;
}

.criteria-item {
  padding: 1.5rem;
  border-bottom: 1px solid #e0e0e0;
  border-right: 1px solid #e0e0e0;
}

.criteria-item:last-child {
  border-bottom: none;
}

.criteria-item.optional {
  background: #f8f9fa;
  border-left: 4px solid #DF6BA2;
}

.criteria-item h4 {
  color: #DF6BA2;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
}

.criteria-item p {
  margin: 0;
  line-height: 1.5;
  color: #555;
}

/* Past Judges */
.judges-intro {
  margin-bottom: 2rem;
  max-width: 600px;
}

.judges-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-top: 2rem;
  width: 100%;
}

.judge-card {
  background: #faf9f8;
  border: 2px solid #DF6BA2;
  border-radius: 12px;
  padding: 1.5rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.judge-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(223, 107, 162, 0.15);
}

.judge-avatar {
  width: 100px;
  height: 100px;
  background: #DF6BA2;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  flex-shrink: 0;
  overflow: hidden;
}

.judge-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.judge-initial {
  color: white;
  font-size: 2rem;
  font-weight: 600;
}

.judge-info {
  width: 100%;
}

.judge-name {
  color: #333;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
}

.judge-title {
  color: #666;
  font-size: 0.9rem;
  line-height: 1.4;
  margin: 0;
}

/* Responsive design */
@media (max-width: 768px) {
  .scoring-grid {
    grid-template-columns: 1fr;
  }

  .criteria-grid {
    grid-template-columns: 1fr;
  }

  .judges-grid {
    grid-template-columns: 1fr;
  }

  .category-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .practice-session {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .session-date {
    min-width: auto;
    margin-right: 0;
  }
}
</style>
