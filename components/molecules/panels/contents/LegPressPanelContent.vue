<template>
  <v-expansion-panel-content class="panel-content">
    <div class="workout-time-header">Workout Time</div>
    <div class="workout-time-value">00:00:00</div>
    <div class="results-header">Results</div>
    <leg-press-result
      v-for="(result, index) in state.results"
      :key="index"
      class="result-content"
      :index="index"
      :result="result"
      :delete-result="deleteResult"
      @weight-change="weightChange"
      @times-change="timesChange"
      @set-change="setChange"
    />
    <add-button
      class="add-result-button"
      small
      color="lime"
      @click="addResult"
    />
    <v-btn class="save-button" color="blue-grey" dark @click="save">終了</v-btn>
  </v-expansion-panel-content>
</template>

<script lang="ts">
import { createComponent, reactive } from '@vue/composition-api'
import LegPressResult, {
  initResult
} from '@/components/molecules/workout-results/LegPressResult.vue'
import AddButton from '@/components/molecules/buttons/AddButton.vue'
import { userStore } from '@/store'
import { Workout } from '@/types'

export type LegPressPanelContentProps = {
  workoutIndex: number
  workout: Workout
}

export default createComponent<LegPressPanelContentProps, {}>({
  components: { LegPressResult, AddButton },
  props: {
    workoutIndex: Number,
    workout: Object
  },
  setup({ workoutIndex, workout }) {
    const store = userStore()
    const state = reactive({
      results: workout.results.length ? workout.results : [initResult()],
      memo: workout.memo
    })

    const weightChange = (index: number, value: number) => {
      state.results[index].weight = value
    }

    const timesChange = (index: number, value: number) => {
      state.results[index].times = value
    }

    const setChange = (index: number, value: number) => {
      state.results[index].set = value
    }

    const deleteResult = (index: number) => {
      console.log('remove result')
      state.results = state.results.filter((_, i) => i !== index)
    }

    const addResult = () => {
      state.results.push(initResult())
    }

    const save = () => {
      store.dispatch('updateWorkoutResults', {
        index: workoutIndex,
        resuls: state.results,
        mome: state.memo
      })
    }

    return {
      state,
      weightChange,
      timesChange,
      setChange,
      deleteResult,
      addResult,
      save
    }
  }
})
</script>

<style lang="scss" scoped>
@mixin header-margin() {
  margin: 8px 0 4px;
}

.panel-content {
  padding-top: 8px;
}

.workout-time-header {
  @include header-margin;
}

.workout-time-value {
  margin-left: 12px;
}

.results-header {
  @include header-margin;
}

.result-content {
  margin: 8px 0 20px;
}

.add-result-button {
  position: relative;
  left: calc(100% - 40px);
  margin-bottom: 24px;
}
</style>
