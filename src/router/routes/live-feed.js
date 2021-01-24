export default [
  {
    path: '/live-feed',
    name: 'live-feed',
    component: () => import('@/views/live-feed/LiveFeed.vue'),
    meta: {
      pageTitle: 'Live Feed',
    },
  },
]
