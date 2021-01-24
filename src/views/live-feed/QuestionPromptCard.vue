<template>
  <b-card no-body class="card-prompt color-primary">
    <b-card-header>
      <b-card-title>Ask for Responses</b-card-title>
    </b-card-header>
    <b-card-body>
      <p>
        Press the button to ask all students for responses
      </p>
      <b-row>
        <b-col cols="12">
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            block
            variant="primary"
            @click="newprompt"
          >
            Ask for Responses
          </b-button>
        </b-col>
      </b-row>
      <p class="mt-1" v-if="!!time">
        Prompted for responses at {{ time }}
      </p>
    </b-card-body>
  </b-card>
</template>

<script>
import {
  BCard,
  BCardHeader,
  BCardTitle,
  BCardBody,
  BRow,
  BCol,
  BButton,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import db from '../../libs/firebase'

export default {
  components: {
    BCard,
    BCardHeader,
    BCardTitle,
    BCardBody,
    BRow,
    BCol,
    BButton,
  },
  directives: {
    Ripple,
  },
  props: {
    sessionId: String
  },
  data() {
    return {
      time: null,
    }
  },
  methods: {
    newprompt() {
      const newPromptId = db.ref(`/sessions/${this.sessionId}/questions`).push().key

      const updates = {}
      updates[`/sessions/${this.sessionId}/questions/${newPromptId}`] = {
        timestamp: +new Date(),
      }

      db.ref().update(updates)
      this.time = new Date();
      this.$emit('newprompt', {promptId:newPromptId, time: this.time});
    },
  },
}
</script>
