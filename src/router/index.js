import Vue from 'vue'
import VueRouter from 'vue-router'

// Routes

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    { path: '/', redirect: { name: 'live-feed' } },
    {
      path: '/live-feed',
      name: 'live-feed',
      component: () => import('@/views/live-feed/LiveFeed.vue'),
      meta: {
        pageTitle: 'Live Feed'
      }
    },
    {
      path: '/history-analysis',
      name: 'history-analysis',
      component: () => import('@/views/history-analysis/HistoryAnalysis.vue'),
      meta: {
        pageTitle: 'History Analysis'
      }
    },
    {
      path: '*',
      redirect: 'error-404'
    }
  ]
})

export default router
