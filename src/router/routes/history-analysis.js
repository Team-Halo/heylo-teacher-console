export default [
  // History Analysis
  {
    path: '/history-analysis',
    name: 'history-analysis',
    component: () =>
      import('@/views/history-analysis/HistoryAnalysis.vue'),
    meta: {
      resource: 'manage',
      action: 'all',
    },
  },
]
