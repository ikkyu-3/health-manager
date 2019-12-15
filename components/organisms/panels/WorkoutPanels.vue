<template>
  <v-expansion-panels class="hoge">
    <workout-panel
      v-for="panelProps in state.panelPropsList"
      :key="panelProps.index"
      :index="panelProps.index"
      :workout="panelProps.workout"
      :status="panelProps.status"
      :disabled="panelProps.disabled"
      :readonly="panelProps.readonly"
      :click="click"
      :save="save"
    />
  </v-expansion-panels>
</template>

<script lang="ts">
import { createComponent, reactive, computed } from '@vue/composition-api'
import WorkoutPanel from '@/components/organisms/panels/WorkoutPanel.vue'
import { userStore } from '@/store'
import { Workout, WorkoutStatus, WorkoutResult } from '@/types'

export default createComponent({
  components: { WorkoutPanel },
  props: {},
  setup() {
    const store = userStore()

    const state = reactive({
      panelPropsList: computed(() => {
        const nextWorkout = store.getters[ // eslint-disable-line
          'workouts/nextWorkout'
        ] as Workout | null
        const nextWorkoutName = nextWorkout ? nextWorkout.name : ''
        const workouts = store.getters['workouts/workouts'] as Workout[]
        const workoutStatus = store.getters['workouts/workoutStatus'] as (
          index: number,
          nextWorkoutName: string
        ) => WorkoutStatus | ''

        return workouts.map((workout, index) => {
          const status = workoutStatus(index, nextWorkoutName)
          const disabled = status === '' || status === 'pending'
          const readonly = disabled || status === 'ready'

          return { workout, index, status, disabled, readonly }
        })
      })
    })

    const click = (index: number, state: WorkoutStatus) => {
      switch (state) {
        case 'ready':
          store.dispatch('workouts/updateStartTime', {
            index,
            time: new Date().toISOString()
          })
          break
        case 'running':
          store.dispatch('workouts/updateEndTime', {
            index,
            time: new Date().toISOString()
          })
          break
      }
    }

    const save = (index: number, results: WorkoutResult[], memo: string) => {
      store.dispatch('workouts/updateResults', { index, results, memo })
    }

    return { state, click, save }
  }
})
</script>
