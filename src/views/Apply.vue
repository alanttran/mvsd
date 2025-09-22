<template>
  <!-- SEO Component -->
  <PageSEO :title="seoTitle" :description="seoDescription" :keywords="seoKeywords" :image="seoImage" :url="seoUrl" />

  <!-- landing section  -->
  <PageBanner title="Program Details and Application" background-image="royal-courts/2024/contestants-apply-banner.jpg"
    text-position="bottom" />

  <!-- about  -->
  <section class="mvsd-section__container">
    <div class="img-left">
      <img src="../assets/apply/apply-1.jpg" alt="dog">
    </div>
    <div class="section-content" id="about-section">
      <h2 class="fancy-underline">Join the Sisterhood</h2>
      <p>Ready to show us if you're the future Miss Vietnam San Diego? Apply now!
      </p>
      <a :href="applicationForm.url" target="_blank" class="mvsd-button--primary">{{ applicationForm.text }}</a>
    </div>
  </section>

  <section class="mvsd-section__container" id="why-mvsd">
    <div class="section-content">
      <h2 class="fancy-underline">Why Miss Vietnam San Diego?</h2>
      <p>Miss Vietnam San Diego is more than a pageant or a competition—we are a sisterhood and a community. Joining the
        Miss Vietnam San Diego program will allow you to meet other passionate, community-drive girls, while being a
        space for you to grow and share your passion. Join Miss Vietnam San Diego to…</p>
      <ul>
        <li>Embrace your cultural roots</li>
        <li>Boost self-efficacy and captivating presentation skills</li>
        <li>Develop personal & professional skills</li>
        <li>Engage with the Vietnamese community</li>
      </ul>
    </div>
    <div class="img-right">
      <img src="../assets/apply/apply-2.jpg" alt="dog">
    </div>
  </section>

  <!-- apply now  -->
  <section class="mvsd-section__container">
    <div class="img-left">
      <img src="../assets/apply/apply-3.jpg" alt="dog">
    </div>
    <div class="section-content" id="apply-now">
      <h2 class="fancy-underline">Royal Court's Responsibilities</h2>
      <br /><br />
      <h3>Community Leaders</h3>
      <p>As spokespeople of VAYA, titleholders of Miss Vietnam San Diego carry their roles with dignity, class, and
        grace. MVSD is a role model for youth empowerment and the local Vietnamese community.</p>
      <h3>A Year of Service</h3>
      <p>Once crowned, the Royal Court of Miss Vietnam San Diego carries out a year of service with the Vietnamese
        American Youth Alliance.</p>
      <h3>Court's Project</h3>
      <p>During their reign, the Royal Court shall carry out a term project of their choosing. They will work together
        to organize and complete a large scale service project which combines their skills and interests in order to
        serve their community.</p>
    </div>
  </section>

  <section class="mvsd-section__container" id="requirements">
    <div class="section-content">
      <h2 class="fancy-underline">Requirements</h2>

      <ul>
        <li>No entry fee, application fee, or registration fee [Program is 100% free to join.]</li>
        <li>Prior pageant experience NOT required</li>
        <li>Must identify as a woman</li>
        <li>17-26 years old and at least a high school senior</li>
        <li>At least 1/8 Vietnamese</li>
        <li>Foundational proficiency in Vietnamese or a commitment to ongoing Vietnamese language development</li>
        <li>Not a previous titleholder of Miss Vietnam San Diego or part of VAYA/TET Festival Staff</li>
        <li>Not currently married or divorced</li>
        <li>Not pregnant nor have a child</li>
        <li>Not been subject to any criminal proceedings (arrests) and/or criminal convictions (such as felonies)</li>
      </ul>
      <p>Deposit: $100 deposit is asked of every participant to ensure her commitment throughout the pageant process.
        This deposit will be returned at the completion of the pageant. </p>
    </div>
    <div class="img-right">
      <img src="../assets/apply/apply-4.jpg" alt="dog">
    </div>
  </section>

  <section id="titles-awards">
    <h2 class="fancy-underline-2">Titles and Awards</h2>
    <br /><br />
    <div class="awards-image-container">
      <img src="../assets/apply/apply-5.jpg" alt="Titles and Awards">
    </div>
    <div class="mvsd-section__container">
      <div class="section-content">
        <h3>Royal Court Awards</h3>
        <hr>
        <h4>Miss Vietnam of San Diego (Queen) : $2,000</h4>
        <p>Miss Vietnam of San Diego is highest award presented by Miss Vietnam San Diego. This award is given to the
          contestant that fully embodies the beauty, intelligence, and cultural heritage of the Vietnamese community.
          More than just a beautiful face, Miss Vietnam of San Diego is a symbol of empowerment for the Vietnamese women
          of San Diego. </p>
        <h4>First Princess : $1,500</h4>
        <p>First Princess is the runner-up to the Miss Vietnam of San Diego. First Princess is a pillar of support for
          the crowned queen and carries the spirit of unity to the Royal Court. In times when the queen may be
          unavailable, our First Princess steps in with grace and poise.</p>

        <h4>Second Princess : $1,000</h4>
        <p>Second Princess, with their outstanding grace, charisma, and dedication to the Vietnamese community, are
          amazing role models recognized for their goodwill in the community. </p>
      </div>
      <div class="section-content special-awards">
        <h3>Specials Awards</h3>
        <hr>
        <h4>Miss Community Service : $100</h4>
        <p>Awarded to the contestant with the most hours of community service throughout the pageant process, Miss
          Community Service shows that true beauty lies in kindness and selflessness.</p>
        <h4>Miss Congeniality : $100</h4>
        <p>Awarded to the contestant with the most votes from fellow contestants for their uplifting and genuine
          friendship, Miss Congeniality radiates kindness and positivity.</p>

        <h4>Miss People's Choice : $100</h4>
        <p>Awarded to the contestant with the most votes on Facebook and Instagram, Miss People's Choice's charisma and
          heart never fails to captivate and represent our fantastic audience. </p>
      </div>
    </div>
  </section>


</template>

<script>
import PageBanner from '../components/PageBanner.vue'
import PageSEO from '../components/PageSEO.vue'
import externalLinks from '../data/external-links.json'

/**
 * Apply page component displaying program details and application information
 * @component
 */
export default {
  name: 'Apply',
  components: {
    PageBanner,
    PageSEO
  },
  data() {
    return {
      applicationForm: externalLinks.applicationForm,
      seoTitle: 'Apply to Miss Vietnam San Diego 2026 | Program Details & Application',
      seoDescription: 'Join the Miss Vietnam San Diego sisterhood! Apply now for 2026 and embrace your cultural roots while developing leadership skills and community engagement.',
      seoKeywords: 'Apply Miss Vietnam San Diego, 2026 applications, Vietnamese American pageant, sisterhood, community leadership, San Diego pageant',
      seoImage: '/src/assets/royal-courts/2024/contestants-apply-banner.jpg',
      seoUrl: 'https://missvietnamsandiego.com/apply'
    }
  }
}
</script>

<style scoped lang="scss">
@use '../styles/variables' as *;


.sponsor-list {
  padding: 50px 0;
  display: flex;
  justify-content: space-evenly;
  gap: 4em;
  flex-wrap: wrap;
}

.text-left {
  margin-left: 70px;
  margin-right: 70px;
  flex: 50%;
}

ul {
  padding-left: 20px;
  margin: 1rem 0;
}

li {
  list-style-type: disc;
  line-height: 1.5;
  margin-bottom: 1rem;
}

hr {
  border: none;
  border-top: 2px solid $mvsd-colors-primary;
  opacity: 1;
  width: 100%;
  margin: 1rem 0;
}

/* about section  */
.mvsd-section__container {
  display: flex;
  justify-content: space-between;

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

section {
  margin-top: 50px;
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

/* Awards section responsive styles */
#titles-awards {
  padding: 2rem 1rem;

  @media (max-width: 768px) {
    padding: 1rem 0.5rem;
  }
}

.awards-image-container {
  text-align: center;
  margin-bottom: 2rem;

  img {
    width: 100%;
    max-width: 800px;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;

    img {
      max-width: 100%;
    }
  }
}

.special-awards {
  @media (max-width: 768px) {
    margin-top: 2rem;
  }
}
</style>