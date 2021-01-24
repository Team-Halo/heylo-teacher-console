import Vue from 'vue'
import VueRouter from 'vue-router'

// Routes

import liveFeed from './routes/live-feed'
import historyAnalysis from './routes/history-analysis'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    { path: '/', redirect: { name: 'live-feed' } },
    ...historyAnalysis,
    ...liveFeed,
    {
      path: '*',
      redirect: 'error-404',
    },
  ],
})

export default router
