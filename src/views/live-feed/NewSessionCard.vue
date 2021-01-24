<template>
  <b-card no-body class="card-session color-primary">
    <b-card-header>
      <b-card-title>Start a Lesson</b-card-title>
    </b-card-header>
    <b-card-body>
      <p>
        Press the button to start a new lesson. Share this code to students for
        them to join the lesson.
      </p>
      <b-row>
        <b-col cols="12">
          <b-form-group label="Session ID" label-for="session-id" class="mb-2">
            <b-form-input
              id="session-id"
              v-model="sessionId"
              readonly
              placeholder="Start a lesson to get the code"
            />
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            block
            variant="primary"
            :disabled="inSession"
            @click="newsession"
          >
            New Lesson
          </b-button>
        </b-col>
      </b-row>
      <p class="mt-1">
        Starting the lesson will also start the voice recording.
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
  BFormGroup,
  BFormInput,
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
    BFormGroup,
    BFormInput,
    BButton,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      sessionId: null,
      inSession: false,
    }
  },
  methods: {
    newsession() {
      const newSessionId = db.ref().child('sessions').push().key
      this.sessionId = newSessionId

      const updates = {}
      updates[`/sessions/${newSessionId}`] = {
        reactions: [],
      }

      db.ref().update(updates)
      this.inSession = true
      this.$emit('newsession', this.sessionId);
    },
  },
}
</script>
