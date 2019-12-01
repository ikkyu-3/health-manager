<template>
  <v-expansion-panel :disabled="state.disabled">
    <workout-panel-header :name="workout.name" :status="status" />
    <workout-panel-content :index="index" :workout="workout" :save="save" />
  </v-expansion-panel>
</template>

<script lang="ts">
import { createComponent, reactive, computed } from '@vue/composition-api'
import WorkoutPanelHeader from '@/components/molecules/panel-parts/WorkoutPanelHeader.vue'
import WorkoutPanelContent from '@/components/molecules/panel-parts/WorkoutPanelContent.vue'
import { userStore } from '@/store'
import { Workout, WorkoutStatus, WeightMachineResult } from '@/types'

type WorkoutPanelProps = {
  index: number
  workout: Workout
  status: WorkoutStatus
}

export default createComponent<WorkoutPanelProps, {}>({
  components: { WorkoutPanelHeader, WorkoutPanelContent },
  props: {
    index: Number,
    workout: Object,
    status: String
  },
  setup(props) {
    const store = userStore()
    const state = reactive({
      disabled: computed(() => props.status === 'pending')
    })

    function save(index: number, results: WeightMachineResult[], memo: string) {
      store.dispatch('workouts/updateWorkoutResults', { index, results, memo })
    }

    return { state, save }
  }
})
</script>
