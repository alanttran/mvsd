<template>
  <PageBanner title="Competition" background-image="banner-competition.jpg" :show-gradient="true"
    text-position="bottom" />

  <section class="competition-intro-section" id="competition-intro">
    <h2 class="fancy-underline">Competition Details</h2>
    <p>Our Miss Vietnam San Diego pageant is a comprehensive competition that evaluates contestants across multiple
      categories.
      The scoring system is designed to recognize well-rounded individuals who embody the values of leadership, cultural
      pride,
      and community service. Contestants are judged on their preparation, presentation, and commitment to the Vietnamese
      community.</p>
  </section>

  <!-- Scoring Breakdown Section -->
  <section class="scoring-section" id="scoring">
    <h2 class="fancy-underline">Scoring Breakdown</h2>
    <div class="scoring-grid">
      <div class="scoring-category">
        <div class="category-header">
          <h3>Pre-Pageant Score</h3>
          <span class="percentage">10%</span>
        </div>
        <div class="category-details">
          <p>Based on attendance to practices and volunteering activities throughout the preparation period.</p>
        </div>
      </div>

      <div class="scoring-category">
        <div class="category-header">
          <h3>Interviews</h3>
          <span class="percentage">20%</span>
        </div>
        <div class="category-details">
          <p>Personal interviews evaluating communication skills, cultural knowledge, and leadership potential.</p>
        </div>
      </div>

      <div class="scoring-category">
        <div class="category-header">
          <h3>Pageant Night Performance</h3>
          <span class="percentage">52.5%</span>
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
          <span class="percentage">17.5%</span>
        </div>
        <div class="category-details">
          <p>Final Question & Answer round for the top 3 contestants only.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Practice Schedule Section -->
  <section class="practice-section" id="practice-schedule">
    <h2 class="fancy-underline">Practice Schedule</h2>
    <div class="practice-timeline">
      <div class="practice-phase">
        <div class="phase-header">
          <h3>Phase 1: Foundation Building</h3>
          <span class="phase-duration">Weeks 1-4</span>
        </div>
        <div class="phase-content">
          <ul>
            <li>Introduction to pageant format and expectations</li>
            <li>Basic walking and posture training</li>
            <li>Cultural education and Vietnamese traditions</li>
            <li>Community service project planning</li>
          </ul>
        </div>
      </div>

      <div class="practice-phase">
        <div class="phase-header">
          <h3>Phase 2: Skill Development</h3>
          <span class="phase-duration">Weeks 5-8</span>
        </div>
        <div class="phase-content">
          <ul>
            <li>Advanced modeling and presentation techniques</li>
            <li>Interview preparation and public speaking</li>
            <li>Áo Dài fitting and cultural presentation</li>
            <li>Evening gown selection and styling</li>
          </ul>
        </div>
      </div>

      <div class="practice-phase">
        <div class="phase-header">
          <h3>Phase 3: Final Preparation</h3>
          <span class="phase-duration">Weeks 9-12</span>
        </div>
        <div class="phase-content">
          <ul>
            <li>Full dress rehearsals</li>
            <li>Mock interviews and Q&A sessions</li>
            <li>Final wardrobe fittings and styling</li>
            <li>Community service project completion</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Judge Criteria Section -->
  <section class="judge-criteria-section" id="judge-criteria">
    <h2 class="fancy-underline">Judge Criteria & Vetting</h2>
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
        </div>
      </div>
    </div>
  </section>

  <!-- Past Judges Section -->
  <section class="past-judges-section" id="past-judges">
    <h2 class="fancy-underline">Past Judges</h2>
    <p class="judges-intro">We are honored to have had these distinguished community leaders serve as judges for our
      pageant.</p>
    <div class="judges-grid">
      <div v-for="judge in judgesData" :key="judge.id" class="judge-card">
        <div class="judge-avatar">
          <span class="judge-initial">{{ getInitial(judge.name) }}</span>
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
      judgesData: judgesData
    }
  },
  methods: {
    getInitial(name) {
      return name.split(' ').map(n => n[0]).join('')
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

.competition-intro-section p {
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
}

.practice-phase {
  background: #faf9f8;
  border-left: 4px solid #DF6BA2;
  padding: 2rem;
  margin-bottom: 2rem;
  border-radius: 0 8px 8px 0;
  position: relative;
}

.practice-phase::before {
  content: '';
  position: absolute;
  left: -8px;
  top: 2rem;
  width: 12px;
  height: 12px;
  background: #DF6BA2;
  border-radius: 50%;
}

.phase-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.phase-header h3 {
  color: #DF6BA2;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
}

.phase-duration {
  background: #DF6BA2;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 500;
}

.phase-content ul {
  margin: 0;
  padding-left: 1.5rem;
}

.phase-content li {
  margin-bottom: 0.5rem;
  line-height: 1.5;
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
  text-align: center;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 600px;
}

.judges-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2rem;
  width: 100%;
}

.judge-card {
  background: #faf9f8;
  border: 2px solid #DF6BA2;
  border-radius: 12px;
  padding: 2rem;
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
  width: 80px;
  height: 80px;
  background: #DF6BA2;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  flex-shrink: 0;
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

  .phase-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .category-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .practice-phase {
    padding: 1.5rem;
  }
}
</style>
