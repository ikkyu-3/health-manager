<template>
  <v-expansion-panel-content class="panel-content">
    <workout-time-result
      :start-time="workout.startTime"
      :end-time="workout.endTime"
    />
    <label class="results-header">Results</label>
    <bench-press-result
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
    <v-btn
      fab
      dark
      small
      class="add-result-button"
      color="lime"
      @click="addResult"
    >
      <v-icon>fa-plus</v-icon>
    </v-btn>
    <memo-field :value="state.memo" />
    <v-btn class="save-button" color="blue-grey" dark @click="workoutSave"
      >終了</v-btn
    >
  </v-expansion-panel-content>
</template>

<script lang="ts">
import { createComponent, reactive } from '@vue/composition-api'
import WorkoutTimeResult from '@/components/molecules/results/WorkoutTimeResult.vue'
import BenchPressResult, {
  initResult
} from '@/components/molecules/results/weight-machine-trainings/BenchPressResult.vue'
import MemoField from '@/components/molecules/fields/MemoField.vue'
import { WeightMachineWorkoutPanelContentProps } from '@/types'

export default createComponent<WeightMachineWorkoutPanelContentProps, {}>({
  components: { WorkoutTimeResult, BenchPressResult, MemoField },
  props: {
    index: Number,
    workout: Object,
    save: Function
  },
  setup({ index, workout, save }) {
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
      state.results = state.results.filter((_, i) => i !== index)
    }

    const addResult = () => {
      state.results.push(initResult())
    }

    const workoutSave = () => {
      save(index, state.results, state.memo)
    }

    return {
      state,
      weightChange,
      timesChange,
      setChange,
      deleteResult,
      addResult,
      workoutSave
    }
  }
})
</script>

<style lang="scss" scoped>
@import '../workout-contents';
</style>
