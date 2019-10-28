<template>
  <component :is="state.componentName" :workout="workout" />
</template>

<script lang="ts">
import { createComponent, reactive } from '@vue/composition-api'
import LegPressContent from './Content/LegPressContent.vue'
import { Workout } from '@/types'

type WorkoutPanelContentProps = {
  workout: Workout
}

export default createComponent<WorkoutPanelContentProps, {}>({
  components: { LegPressContent },
  props: {
    workout: Object
  },
  setup(props) {
    const state = reactive({
      componentName: `${props.workout.name.replace(/\s+/g, '')}Content`
    })

    return { state }
  }
})
</script>
