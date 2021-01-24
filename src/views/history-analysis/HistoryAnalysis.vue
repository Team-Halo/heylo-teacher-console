<template>
  <app-timeline>
    <timeline-card :text="text1" :time="time1" :ratio="series1" />
    <timeline-card :text="text2" :time="time2" :ratio="series2" />
    <timeline-card :text="text3" :time="time3" :ratio="series3" />
  </app-timeline>
</template>

<script>
import AppTimeline from '@core/components/app-timeline/AppTimeline.vue'
import TimelineCard from './TimelineCard.vue'

export default {
  components: {
    AppTimeline,
    TimelineCard,
  },
  data() {
    return {
      text1: `FROM fairest creatures we desire increase,
That thereby beauty's rose might never die,
But as the riper should by time decease,
His tender heir might bear his memory:
But thou, contracted to thine own bright eyes,
Feed'st thy light'st flame with self-substantial fuel,
`,
      text2: `Making a famine where abundance lies,
Thyself thy foe, to thy sweet self too cruel.
Thou that art now the world's fresh ornament
And only herald to the gaudy spring,
Within thine own bud buriest thy content
And, tender churl, makest waste in niggarding.`,
      text3: `Pity the world, or else this glutton be,
To eat the world's due, by the grave and thee.
And, tender churl, makest waste in niggarding.
Pity the world, or else this glutton be,
To eat the world's due, by the grave and thee.`,

      time1: '08:05',
      time2: '08:10',
      time3: '08:15',

      // time1: '1611491787551',
      // time2: '1611491848100',
      // time3: '1611491852669',

      series1: [10, 10, 50, 10, 20],
      series2: [10, 20, 20, 20, 30],
      series3: [20, 10, 0, 50, 20],
    }
  },
}
</script>

