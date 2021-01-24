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
      :series="chartSeries"
    />
  </b-card>
</template>

<script>
import { BCard, BCardTitle, BCardSubTitle } from 'bootstrap-vue'
import VueApexCharts from 'vue-apexcharts'
import db from '@/libs/firebase'
import defaultChartOptions from './donutChartOptions'

export default {
  components: {
    VueApexCharts,
    BCard,
    BCardTitle,
    BCardSubTitle,
  },
  props: {
    sessionId: String,
  },
  data() {
    return {
      reactionsCount: {
        faster: 0,
        slower: 0,
        interested: 0,
        sleepy: 0,
        confused: 0,
      },
    }
  },
  computed: {
    chartSeries() {
      return [
        this.reactionsCount.faster,
        this.reactionsCount.slower,
        this.reactionsCount.interested,
        this.reactionsCount.sleepy,
        this.reactionsCount.confused,
      ]
    },
    chartOptions() {
      const self = this
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
                    return self.chartSeries.reduce(
                      (prev, curr) => prev + curr,
                      0
                    )
                  },
                },
              },
            },
          },
        },
      }
    },
  },
  created() {
    this.connectsession()
  },
  methods: {
    connectsession() {
      console.log(`connect ${this.sessionId}`)
      const id = this.sessionId
      const reactionsRef = db.ref(`sessions/${this.sessionId}/reactions`)
      reactionsRef.on('value', snapshot => {
        if (this.sessionId !== id) return
        const data = snapshot.val()
        this.onReactionUpdate(data)
      })
    },
    onReactionUpdate(data) {
      this.reactionsCount.connect = 0
      this.reactionsCount.faster = 0
      this.reactionsCount.slower = 0
      this.reactionsCount.interested = 0
      this.reactionsCount.sleepy = 0
      this.reactionsCount.confused = 0
      // eslint-disable-next-line
      for (let reactionId in data) {
        this.reactionsCount[data[reactionId].reaction] += 1
      }
    },
  },
}
</script>
