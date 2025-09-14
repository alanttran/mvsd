<template>
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
    <p></p>
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
    DesignTeamCard
  },
  data() {
    return {
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
  align-items: center;
  gap: 16px;
  max-width: 960px;
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
}

#pageant-staff,
#workshop-leaders,
#design-team {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

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
    width: 30%;
    margin: .5rem;
    border: 1px solid $mvsd-colors-primary;
    border-radius: 10px;
  }
}


.img-left {
  flex: 50%;
}

.img-left img {
  width: 100%;
}


.section-content {
  padding-left: 2rem;
  padding-right: 2rem;
  flex: 50%;
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
</style>