<template>
  <!-- SEO Component -->
  <PageSEO :title="seoTitle" :description="seoDescription" :keywords="seoKeywords" :image="seoImage" :url="seoUrl" />

  <!-- landing section  -->
  <PageBanner title="About Us" background-image="about/banner-about.jpg" text-position="bottom" />

  <!-- about  -->
  <section class="mvsd-section__container">
    <div class="img-left">
      <img src="../assets/about/about-1.jpg" alt="dog">
    </div>
    <div class="section-content" id="about-section">
      <h2 class="fancy-underline">Our Mission</h2>
      <p>Established in 2006 as part of The Vietnamese American Youth Alliance (VAYA), Miss Vietnam San Diego celebrates
        the beauty and cultural heritage of the Vietnamese community in San Diego.
      </p>
      <p>Our mission is to unite and strengthen the community through women’s empowerment, leadership, and service. By
        providing a platform and mentorship for youth and goodwill ambassadors, we cultivate community role models and
        leaders.</p>
    </div>
  </section>

  <section id="pageant-staff">
    <h2 class="fancy-underline">Pageant Staff</h2>
    <br /><br />
    <ul class="pageant-staff-list">
      <StaffMemberCard v-for="staffMember in staffMembers" :key="staffMember.id" :staff-member="staffMember" />
    </ul>
  </section>

  <section id="workshop-leaders">
    <h2 class="fancy-underline">Workshop Leaders</h2>
    <br /><br />
    <ul class="pageant-staff-list">
      <WorkshopLeaderCard v-for="workshopLeader in workshopLeaders" :key="workshopLeader.id"
        :staff-member="workshopLeader" />
    </ul>
  </section>

  <section id="design-team">
    <h2 class="fancy-underline">Design Team</h2>
    <br /><br />
    <p class="design-team-thanks">We extend our heartfelt gratitude to our talented design team for their exceptional
      work in creating this beautiful website. Their creativity, attention to detail, and dedication to showcasing our
      community's story through thoughtful design has brought our vision to life. <a
        href="https://www.notion.so/Vietnamese-American-Youth-Alliance-Miss-Vietnam-San-Diego-ea18725798e242d1b6539c0bf7cca8c5?pvs=40"
        target="_blank" class="notion-link">Learn more about our design process on Notion</a>.</p>
    <ul class="pageant-staff-list">
      <DesignTeamCard v-for="designTeamMember in designTeamMembers" :key="designTeamMember.id"
        :design-team-member="designTeamMember" />
    </ul>
  </section>
</template>

<script>
import PageBanner from '../components/PageBanner.vue'
import StaffMemberCard from '../components/StaffMemberCard.vue'
import WorkshopLeaderCard from '../components/WorkshopLeaderCard.vue'
import DesignTeamCard from '../components/DesignTeamCard.vue'
import PageSEO from '../components/PageSEO.vue'
import staffData from '../data/staff.json'
import workshopLeadersData from '../data/workshop-leaders.json'
import designTeamData from '../data/design-team.json'

/**
 * About page component displaying mission, staff, and application information
 * @component
 */
export default {
  name: 'About',
  components: {
    PageBanner,
    StaffMemberCard,
    WorkshopLeaderCard,
    DesignTeamCard,
    PageSEO
  },
  data() {
    return {
      seoTitle: 'About Miss Vietnam San Diego | Our Mission & Team',
      seoDescription: 'Learn about Miss Vietnam San Diego\'s mission to unite and strengthen the Vietnamese community through women\'s empowerment, leadership, and service since 2006.',
      seoKeywords: 'About Miss Vietnam San Diego, Vietnamese American pageant, VAYA, community leadership, women empowerment, San Diego Vietnamese community',
      seoImage: '/src/assets/about/banner-about.jpg',
      seoUrl: 'https://missvietnamsandiego.com/about',
      staffMembers: staffData,
      workshopLeaders: workshopLeadersData,
      designTeamMembers: designTeamData
    }
  }
}
</script>

<style scoped lang="scss">
@use '../styles/variables' as *;


.text-left {
  margin-left: 70px;
  margin-right: 70px;
  flex: 50%;
}

.pageant-staff-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  max-width: 960px;

  @media (max-width: 1024px) {
    gap: 12px;
  }

  @media (max-width: 768px) {
    gap: 8px;
    padding: 0 0.5rem;
    flex-direction: column;
    align-items: center;
  }
}


/* about section  */
.mvsd-section__container {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;

  .img-left,
  .img-right {
    flex: 50%;
  }

  img {
    width: 100%;
  }

  // Mobile responsive: stack images vertically
  @media (max-width: 768px) {
    flex-direction: column;

    .img-left,
    .img-right {
      flex: none;
      width: 100%;
      margin-bottom: 1rem;
    }

    .section-content {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
}

#pageant-staff,
#workshop-leaders,
#design-team {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;

  h2 {
    text-align: center;
    width: fit-content;
  }

  .pageant-staff-section-content {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    max-width: 980px;
  }

  .pageant-staff-profile {
    flex: none;
    margin: .5rem;
    border: 1px solid $mvsd-colors-primary;
    border-radius: 10px;

    // Responsive card widths
    @media (max-width: 1024px) {
      width: 45%; // 2 cards per row on tablets
    }

    @media (max-width: 768px) {
      width: 100%; // 1 card per row on mobile
      margin: .25rem 0;
    }

    @media (min-width: 1200px) {
      width: 28%; // Slightly smaller on very large screens for better spacing
    }
  }

  @media (max-width: 1024px) {
    padding: 0 0.75rem;
  }

  @media (max-width: 768px) {
    padding: 0 0.5rem;

  }
}


.img-left {
  flex: 50%;

  @media (max-width: 768px) {
    flex: none;
    width: 100%;
    margin-bottom: 1rem;
  }
}

.img-left img {
  width: 100%;
}


.section-content {
  padding-left: 2rem;
  padding-right: 2rem;
  flex: 50%;

  @media (max-width: 768px) {
    padding-left: 1rem;
    padding-right: 1rem;
    flex: none;
    width: 100%;
  }
}



.announcements-section {
  margin-top: 30px;
  margin-bottom: 30px;
}

.announcement-header {
  display: flex;
  justify-content: space-between;
  padding-left: 8%;
  padding-right: 8%;
  align-items: center;
}

.announcements-cards {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.card {
  background-color: #FFF8FD;
  border: 2px solid $mvsd-colors-primary;
  width: 412px;
  height: 445px;
  margin: 10px;
  text-align: left;
  border-radius: 20px;

}

.card:hover {
  background-color: #eec3d7;
}

.card-img {
  height: 222px;
  width: 382px;
  border-radius: 15px;
  margin-bottom: 15px;
  background-size: cover;
  border-radius: 10px;
  margin: 15px;
}

.card-1 {
  background-image: url('https://cc-prod.scene7.com/is/image/CCProdAuthor/What-is-Stock-Photography_P1_mobile?$pjpeg$&jpegSize=200&wid=720');
}

.hr-wrapper {
  display: flex;
  justify-content: center;
}

.hr-wrapper hr {
  border: none;
  border-top: 1.5px solid $mvsd-colors-primary;
  opacity: 1;
  /* border-color: $mvsd-colors-primary-dark; */
  width: 382px;
  margin-top: 0;
}

.card h3 {
  padding-left: 12px;
  padding-right: 12px;
}

.card p {
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 5px;
  margin-bottom: 0;
}

.calendar {
  display: flex;
  padding-left: 12px;
  /* margin: 10px; */
  align-items: center;
  padding-bottom: 15px;
}

.calendar p {
  margin: 0;
  padding-top: 0;
  padding-bottom: 0;
}

.author {
  display: flex;
  padding-left: 12px;
  align-items: center;
}

.author p {
  margin: 0;
  padding-top: 0;
  padding-bottom: 0;
}

.sponsor-list {
  background-color: #faf9f8;
}

.design-team-thanks {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 2rem auto;
  line-height: 1.6;
  font-size: 1.1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 1rem;
    margin: 0 auto 1.5rem auto;
  }
}

section {
  margin-top: 30px;
}

.notion-link {
  color: #DF6BA2;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s ease;
}

.notion-link:hover {
  color: #C55A8A;
  text-decoration: underline;
}
</style>