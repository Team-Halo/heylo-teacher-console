<template>
  <b-card
    no-body
    class="card-session color-primary"
  >
    <b-card-header>
      <b-card-title>Start a Session</b-card-title>
    </b-card-header>
    <b-card-body>
      <p>Press the button to start a new session. Share this code to students for them to join the session.</p>
      <!-- form -->
      <b-form>
        <b-row>
          <b-col cols="12">
            <b-form-group
              label="Session ID"
              label-for="session-id"
              class="mb-2"
            >
              <b-form-input
                id="session-id"
                v-model="sessionId"
                readonly
                placeholder="Start a session to get the code"
              />
            </b-form-group>
          </b-col>
          <b-col cols="12">
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              block
              variant="primary"
            >
              New Session
            </b-button>
          </b-col>
        </b-row>
      </b-form>
      <!--/ form -->
    </b-card-body>
  </b-card>
</template>

<script>
import {
  BCard, BCardHeader, BCardTitle, BCardBody, BRow, BCol, BFormGroup, BFormInput, BButton, BForm,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BCard,
    BCardHeader,
    BCardTitle,
    BCardBody,
    BRow,
    BCol,
    BForm,
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
    }
  },
}
</script>
