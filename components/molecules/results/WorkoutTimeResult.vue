<template>
  <dl>
    <dt class="title">Workout Time</dt>
    <dd class="data">{{ state.workoutTime }}</dd>
  </dl>
</template>

<script lang="ts">
import { createComponent, reactive } from '@vue/composition-api'
import getPeriod from '@/modules/getPeriod'

export type WorkoutTimeProps = {
  startTime: string
  endTime: string
}

export default createComponent<WorkoutTimeProps, {}>({
  props: {
    startTime: String,
    endTime: String
  },
  setup({ startTime, endTime }) {
    const state = reactive({
      workoutTime: getPeriod(startTime, endTime)
    })

    return { state }
  }
})
</script>

<style lang="scss" scoped>
.title {
  margin: 8px 0 4px;
}

.data {
  margin-left: 12px;
}
</style>
