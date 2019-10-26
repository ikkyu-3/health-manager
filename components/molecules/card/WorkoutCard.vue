<template>
  <v-card @click="click">
    <v-card-title>
      {{ workoutName }}
    </v-card-title>
  </v-card>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
import { Workout } from '@/types'

type WorkoutCardProps = {
  click: (e: MouseEvent) => void
  workout: Workout
}

export default createComponent<WorkoutCardProps, {}>({
  props: {
    workout: Object,
    click: Function
  },
  setup(props) {
    const { workout } = props

    return { workoutName: workout.name }
  }
})
</script>
