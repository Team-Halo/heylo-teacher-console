<template>
  <app-timeline>
    <timeline-card />
    <timeline-card />
  </app-timeline>
</template>

<script>
import AppTimeline from '@core/components/app-timeline/AppTimeline.vue'
import TimelineCard from './TimelineCard.vue'

export default {
  components: {
    AppTimeline,
    TimelineCard,
  },
  data() {},
}
</script>