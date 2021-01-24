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
import defaultChartOptions from './donutChartOptions'

export default {
  components: {
    VueApexCharts,
    BCard,
    BCardTitle,
    BCardSubTitle,
  },
  data() {
    return {}
  },
  computed: {
    chartOptions() {
      return {
        ...defaultChartOptions,
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                name: {
                  fontSize: '2rem',
                  fontFamily: 'Montserrat',
                },
                value: {
                  fontSize: '1rem',
                  fontFamily: 'Montserrat',
                  formatter(val) {
                    // eslint-disable-next-line radix
                    return `${parseInt(val)}%`
                  },
                },
                total: {
                  show: true,
                  fontSize: '1.5rem',
                  label: 'Total',
                  formatter() {
                    return '12'
                  },
                },
              },
            },
          },
        },
      }
    },
  },
}
</script>
