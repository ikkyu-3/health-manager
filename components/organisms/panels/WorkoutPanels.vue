<template>
  <v-expansion-panels v-model="state.panel" multiple class="hoge">
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
      panel: [] as string[],
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

    const click = (index: number, workoutStatus: WorkoutStatus) => {
      switch (workoutStatus) {
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
      state.panel.push(state.panelPropsList[index].workout.name)
    }

    const save = (index: number, results: WorkoutResult[], memo: string) => {
      store.dispatch('workouts/updateResults', { index, results, memo })
      state.panel = []
    }

    return { state, click, save }
  }
})
</script>
