<template>
  <component :is="state.componentName" :workout="workout" />
</template>

<script lang="ts">
import { createComponent, reactive } from '@vue/composition-api'
import LegPressResult from './results/LegPressResult.vue'
import { Workout } from '@/types'

type WorkoutPanelContentProps = {
  workout: Workout
}

export default createComponent<WorkoutPanelContentProps, {}>({
  components: { LegPressResult },
  props: {
    workout: Object
  },
  setup(props) {
    const state = reactive({
      componentName: `${props.workout.name.replace(/\s+/g, '')}Result`
    })

    return { state }
  }
})
</script>
