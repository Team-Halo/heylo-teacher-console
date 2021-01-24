<template>
  <app-timeline>
    <app-timeline-item>
      <div
        class="d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"
      >
        <h6>12 Invoices have been paid</h6>
        <large class="text-muted">08:00</large>
      </div>
      <p>Invoices have been paid to the company.</p>
    </app-timeline-item>

    <app-timeline-item>
      <div
        class="d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"
      >
        <h6>12 Invoices have been paid</h6>
        <large class="text-muted">08:15</large>
      </div>
      <p>Invoices have been paid to the company.</p>
    </app-timeline-item>

    <app-timeline-item>
      <div
        class="d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"
      >
        <h6>12 Invoices have been paid</h6>
        <large class="text-muted">08:30</large>
      </div>
      <p>Invoices have been paid to the company.</p>
    </app-timeline-item>

    <app-timeline-item>
      <div
        class="d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"
      >
        <h6>12 Invoices have been paid</h6>
        <large class="text-muted">08:45</large>
      </div>
      <p>Invoices have been paid to the company.</p>
    </app-timeline-item>
  </app-timeline>
</template>

<script>
import { VBToggle, VBTooltip } from "bootstrap-vue";
import AppTimeline from "@core/components/app-timeline/AppTimeline.vue";
import AppTimelineItem from "@core/components/app-timeline/AppTimelineItem.vue";
import Ripple from "vue-ripple-directive";

export default {
  components: {
    AppTimeline,
    AppTimelineItem,
  },
  directives: { "b-toggle": VBToggle, "b-tooltip": VBTooltip, Ripple },
};
</script>