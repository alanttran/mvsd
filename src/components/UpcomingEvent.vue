<template>
  <div class="event-info" v-if="showEvent">
    <h3><strong>{{ mainTitle }}</strong></h3>
    <p class="event-subtitle">{{ eventName }}</p>
    <p class="event-description">{{ eventDescription }}</p>
    <p><strong>Date:</strong> {{ eventDate }}<br>
      <strong>Time:</strong> {{ eventTime }}<br>
      <strong>Location:</strong> {{ eventLocation }}
    </p>
    <a v-if="showRegistration" :href="registrationUrl" target="_blank" class="mvsd-button--primary">Register Now</a>
    <p v-else class="registration-closed">Registration closed</p>
  </div>
</template>

<script>
/**
 * UpcomingEvent component displaying event information with timer functionality
 * @component
 */
export default {
  name: 'UpcomingEvent',
  props: {
    mainTitle: {
      type: String,
      default: 'Upcoming Event'
    },
    eventName: {
      type: String,
      required: true
    },
    eventDescription: {
      type: String,
      default: ''
    },
    eventDate: {
      type: String,
      required: true
    },
    eventTime: {
      type: String,
      required: true
    },
    eventLocation: {
      type: String,
      required: true
    },
    registrationUrl: {
      type: String,
      required: true
    },
    registrationDeadline: {
      type: String,
      required: true
    },
    eventEndTime: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      showEvent: true,
      showRegistration: true
    }
  },
  mounted() {
    this.checkEventStatus()
    // Check every minute
    this.interval = setInterval(this.checkEventStatus, 60000)
  },
  beforeUnmount() {
    if (this.interval) {
      clearInterval(this.interval)
    }
  },
  methods: {
    checkEventStatus() {
      const now = new Date()
      const registrationDeadline = new Date(this.registrationDeadline)
      const eventEnd = new Date(this.eventEndTime)

      // Hide registration after Friday 11:59 PM
      if (now > registrationDeadline) {
        this.showRegistration = false
      }

      // Change title to "Past Event" after Saturday 3:00 PM
      if (now > eventEnd) {
        this.$emit('update:mainTitle', 'Past Event')
        this.showRegistration = false
      }
    }
  }
}
</script>

<style scoped>
.event-info {
  background: #faf9f8;
  border: 2px solid #DF6BA2;
  border-radius: 12px;
  padding: 1.5rem;
  margin: 2rem 0;
}

.event-info h3 {
  color: #DF6BA2;
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
}

.event-info p {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.event-subtitle {
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
}

.event-description {
  font-style: italic;
  color: #666;
  margin-bottom: 1rem;
}

.event-info a {
  display: inline-block;
  margin-top: 1rem;
}

.registration-closed {
  color: #666;
  font-style: italic;
  margin-top: 1rem;
}
</style>
