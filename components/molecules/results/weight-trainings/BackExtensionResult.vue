<template>
  <base-result :delete-result="() => deleteResult(index)">
    <v-row class="row">
      <v-col cols="12">
        <v-switch v-model="state.hasWeight" inset label="Weight" />
      </v-col>
      <template v-if="state.hasWeight">
        <v-col cols="5" class="key">Weight</v-col>
        <v-col cols="7">
          <result-field
            weight
            :value="state.weight"
            :reduce="reduceWeight"
            :add="addWeight"
          />
        </v-col>
      </template>
      <v-col cols="5" class="key">Times</v-col>
      <v-col cols="7">
        <result-field
          times
          :value="state.times"
          :reduce="reduceTimes"
          :add="addTimes"
        />
      </v-col>
      <v-col cols="5" class="key">Set</v-col>
      <v-col cols="7">
        <result-field
          set
          :value="state.set"
          :reduce="reduceSet"
          :add="addSet"
        />
      </v-col>
    </v-row>
  </base-result>
</template>

<script lang="ts">
import { createComponent, reactive } from '@vue/composition-api'
import { WeightTrainingResult } from '@/types'
import BaseResult from '@/components/molecules/results/BaseResult.vue'
import ResultField from '@/components/molecules/fields/ResultField.vue'

const config = {
  weight: { max: 50, default: 0, step: 5 },
  times: { max: 50, default: 10, step: 1 },
  set: { max: 10, default: 3, step: 1 }
}

type BackExtensionResultType = {
  index: number
  result: {
    hasWeight: boolean
    weight: number
    times: number
    set: number
  }
  deleteResult: (index: number) => void
}

export const initResult = (): WeightTrainingResult => ({
  hasWeight: false,
  weight: config.weight.default,
  times: config.times.default,
  set: config.set.default
})

export default createComponent<BackExtensionResultType, {}>({
  components: { BaseResult, ResultField },
  props: {
    index: Number,
    result: Object,
    deleteResult: Function
  },
  setup(props, { emit }) {
    const { index, result } = props
    const { hasWeight, weight, times, set } = result
    const state = reactive({ hasWeight, weight, times, set })

    const reduceWeight = (e: MouseEvent) => {
      e.stopPropagation()
      if (state.weight === 0) return
      state.weight -= config.weight.step
      emit('weight-change', index, state.weight)
    }

    const addWeight = (e: MouseEvent) => {
      e.stopPropagation()
      if (state.weight === config.weight.max) return
      state.weight += config.weight.step
      emit('weight-change', index, state.weight)
    }

    const reduceTimes = (e: MouseEvent) => {
      e.stopPropagation()
      if (state.times === 0) return
      state.times -= config.times.step
      emit('times-change', index, state.times)
    }

    const addTimes = (e: MouseEvent) => {
      e.stopPropagation()
      if (state.times === config.times.max) return
      state.times += config.times.step
      emit('times-change', index, state.times)
    }

    const reduceSet = (e: MouseEvent) => {
      e.stopPropagation()
      if (state.set === 0) return
      state.set -= config.set.step
      emit('set-change', index, state.times)
    }

    const addSet = (e: MouseEvent) => {
      e.stopPropagation()
      if (state.set === config.set.max) return
      state.set += config.set.step
      emit('set-change', index, state.times)
    }

    return {
      state,
      reduceWeight,
      addWeight,
      reduceTimes,
      addTimes,
      reduceSet,
      addSet
    }
  }
})
</script>

<style lang="scss" scoped>
@import url('../results.scss');
</style>
