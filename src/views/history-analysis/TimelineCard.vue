<template>
  <app-timeline-item>
    <div
      class="d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"
    >
      <vue-apex-charts
        type="donut"
        :options="apexChatData.donutChart.chartOptions"
        :series="ratio"
      />
      <div class="card">
        <p class="card-block">{{ text }}</p>
      </div>
      <strong class="time-text">{{ time }}</strong>
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
  props: {
    text: String,
    time: String,
    ratio: Array,
  },
  directives: { 'b-toggle': VBToggle, 'b-tooltip': VBTooltip, Ripple },
  data() {
    return {
      apexChatData,
    }
  },
  computed: {
    dateTime: () => {
      console.log(this.time)
      const dateObject = new Date(this.time)
      console.log(dateObject)
      return dateObject.toLocaleString()
    },
  },
}
</script>

<style>
.card {
  overflow: hidden;
  width: 65%;
  background-color: 'transparent';
}
.card-block {
  overflow: hidden;
  word-wrap: break-word;
  overflow-wrap: break-word;
  font-size: 18px;
  line-height: 30px;
}
.time-text {
  font-size: 15px;
}
</style>