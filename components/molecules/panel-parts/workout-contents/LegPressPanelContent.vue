<template>
  <v-expansion-panel-content class="panel-content">
    <workout-time-result
      :start-time="state.startTime"
      :end-time="state.endTime"
    />
    <label class="results-header">Results</label>
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
import LegPressResult, {
  initResult
} from '@/components/molecules/results/LegPressResult.vue'
import MemoField from '@/components/molecules/fields/MemoField.vue'
import { WorkoutPanelContentProps } from '@/types'

export default createComponent<WorkoutPanelContentProps, {}>({
  components: { WorkoutTimeResult, LegPressResult, MemoField },
  props: {
    index: Number,
    workout: Object,
    save: Function
  },
  setup({ index, workout, save }) {
    const state = reactive({
      startTime: workout.startTime || '',
      endTime: workout.endTime || '',
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

  display: block;
}

.result-content {
  margin: 8px 0 20px;
}

.add-result-button {
  position: relative;
  left: calc(100% - 40px);
  margin-bottom: 12px;
}

.memo-header {
  @include header-margin;

  display: block;
}

.save-button {
  width: 100%;
}
</style>
