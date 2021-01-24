<template>
  <div class="navbar-container d-flex content align-items-center">
    <!-- Nav Menu Toggler -->
    <ul class="nav navbar-nav d-xl-none">
      <li class="nav-item">
        <b-link class="nav-link" @click="toggleVerticalMenuActive">
          <feather-icon icon="MenuIcon" size="21" />
        </b-link>
      </li>
    </ul>

    <b-navbar-nav class="nav align-items-center ml-auto">
      <b-row>
        <b-col>
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            block
            variant="primary"
            :disabled="!isLiveFeed"
            @click="navigateTo('live-feed')"
          >
            Live Feed
          </b-button>
        </b-col>
        <b-col>
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            block
            variant="primary"
            :disabled="isLiveFeed"
            @click="navigateTo('history-analysis')"
          >
            History Analysis
          </b-button>
        </b-col>
        <b-col>
          <dark-Toggler class="d-none d-lg-block" />
        </b-col>
      </b-row>
    </b-navbar-nav>
  </div>
</template>

<script>
import { BButton, BCol, BRow, BLink, BNavbarNav } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import router from '@/router'
import DarkToggler from './components/DarkToggler.vue'

export default {
  components: {
    BLink,
    BButton,
    BCol,
    BRow,
    // Navbar Components
    BNavbarNav,
    DarkToggler,
  },
  directives: {
    Ripple,
  },
  props: {
    toggleVerticalMenuActive: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      isLiveFeed: true,
    }
  },
  methods: {
    navigateTo(name) {
      router.push(name)
      this.isLiveFeed = !this.isLiveFeed
    },
  },
}
</script>
