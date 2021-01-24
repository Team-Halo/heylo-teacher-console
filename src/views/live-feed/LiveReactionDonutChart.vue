<template>
  <b-card>
    <b-card-title class="mb-1"> Live Reaction </b-card-title>
    <b-card-sub-title class="mb-2">
      Ratio of reactions from the past 15 minutes
    </b-card-sub-title>

    <vue-apex-charts
      type="donut"
      height="350"
      :options="chartOptions"
      :series="[0, 23, 65, 34]"
    />
  </b-card>
</template>

<script>
import { BCard, BCardTitle, BCardSubTitle } from 'bootstrap-vue'
import VueApexCharts from 'vue-apexcharts'
import chartOptions from './donutChartOptions'

export default {
  components: {
    VueApexCharts,
    BCard,
    BCardTitle,
    BCardSubTitle,
  },
  data() {
    return {
      chartOptions,
    }
  },
}
</script>
