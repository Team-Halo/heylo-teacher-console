<template>
  <app-timeline-item>
    <div
      class="d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"
    >
      <vue-apex-charts
        type="donut"
        height="350"
        :options="apexChatData.donutChart.chartOptions"
        :series="apexChatData.donutChart.series"
      />
      <h6>{{ text }}</h6>
      <large class="text-muted"> 08:00</large>
    </div>
  </app-timeline-item>
</template>

<script>
import { VBToggle, VBTooltip } from 'bootstrap-vue'
import AppTimelineItem from '@core/components/app-timeline/AppTimelineItem.vue'
import Ripple from 'vue-ripple-directive'
import VueApexCharts from 'vue-apexcharts'
import apexChatData from './apexChartData'

export default {
  components: {
    AppTimelineItem,
    VueApexCharts,
  },
  directives: { 'b-toggle': VBToggle, 'b-tooltip': VBTooltip, Ripple },
  data() {
    return {
      apexChatData,
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    }
  },
}
</script>