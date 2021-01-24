<template>
  <b-card>
    <b-card-title class="mb-1"> Responses to Prompts </b-card-title>
    <b-card-sub-title class="mb-2">
      Responses to a prompt sent at {{ promptTime }}
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
    promptId: String,
    promptTime: Date,
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
  },
  methods: {
    countReactions(reaction) {
      return this.reactions.filter(
        x => x.reaction === reaction && x.question === this.promptId
      ).length
    },
    connectsession() {
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
