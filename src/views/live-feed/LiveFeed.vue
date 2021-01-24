<template>
  <b-row class="match-height">
    <b-col md="6">
      <new-session-card @newsession="newsession" />
    </b-col>
    <b-col md="6">
      <live-reaction-donut-chart v-if="inSession" :session-id="sessionId" />
    </b-col>
    <b-col md="6">
      <question-prompt-card v-if="inSession" :session-id="sessionId" @newprompt="newprompt" />
    </b-col>
    <b-col md="6" v-for="question in questions" :key="question.promptId">
      <prompt-reaction-donut-chart v-if="inSession" :session-id="sessionId" :prompt-id="question.promptId" :prompt-time="question.time" />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'
import NewSessionCard from './NewSessionCard.vue'
import LiveReactionDonutChart from './LiveReactionDonutChart.vue'
import QuestionPromptCard from './QuestionPromptCard.vue'
import PromptReactionDonutChart from './PromptReactionDonutChart.vue'

export default {
  components: {
    BRow,
    BCol,
    NewSessionCard,
    LiveReactionDonutChart,
    QuestionPromptCard,
    PromptReactionDonutChart
  },
  data() {
    return {
      sessionId: null,
      inSession: false,
      questions: [],
    }
  },
  methods: {
    newsession(sessionid) {
      this.sessionId = sessionid
      this.inSession = true;
    },
    newprompt(question) {
      this.questions.push(question);
    }
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-flatpicker.scss';
@import '@core/scss/vue/libs/chart-apex.scss';
</style>
