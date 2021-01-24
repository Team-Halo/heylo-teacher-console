<template>
  <b-row class="match-height">
    <b-col md="6">
      <new-session-card />
    </b-col>
    <b-col md="6">
      <live-reaction-donut-chart />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'
import NewSessionCard from './NewSessionCard.vue'
import LiveReactionDonutChart from './LiveReactionDonutChart.vue'

export default {
  components: {
    BRow,
    BCol,
    NewSessionCard,
    LiveReactionDonutChart,
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-flatpicker.scss';
@import '@core/scss/vue/libs/chart-apex.scss';
</style>
