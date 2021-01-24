<template>
  <b-card>
    <b-card-title class="mb-1"> Live Reaction </b-card-title>
    <b-card-sub-title class="mb-2">
      Ratio of reactions from the past 5 minutes
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
      reactions: [],
    }
  },
  computed: {
    chartSeries() {
      return [
        this.countReactions('faster'),
        this.countReactions('slower'),
        this.countReactions('interested'),
        this.countReactions('sleepy'),
        this.countReactions('confused'),
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
    setInterval(() => {
      this.reactions = this.reactions.filter(
        x => +new Date() - x.timestamp < 1000 * 60 * 5 && x.question == null
      )
    }, 5000)
  },
  methods: {
    countReactions(reaction) {
      return this.reactions.filter(
        x =>
          x.reaction === reaction &&
          +new Date() - x.timestamp < 1000 * 60 * 5 &&
          x.question == null
      ).length
    },
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
      this.reactions = []
      // eslint-disable-next-line
      for (let reactionId in data) {
        this.reactions.push(data[reactionId])
      }
    },
  },
}
</script>
