<template>
  <base-result :delete-result="() => deleteResult(index)">
    <v-row class="row">
      <v-col cols="5" class="key">Weight</v-col>
      <v-col cols="7">
        <result-field
          weight
          :value="state.weight"
          :reduce="reduceWeight"
          :add="addWeight"
        />
      </v-col>
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
import { WeightMachineResult } from '@/types'
import BaseResult from '@/components/molecules/results/BaseResult.vue'
import ResultField from '@/components/molecules/fields/ResultField.vue'

const config = {
  weight: { max: 500, default: 60, step: 10 },
  times: { max: 50, default: 10, step: 1 },
  set: { max: 10, default: 3, step: 1 }
}

type LegPressResultType = {
  index: number
  result: {
    weight: number
    times: number
    set: number
  }
  deleteResult: (index: number) => void
}

export const initResult = (): WeightMachineResult => ({
  weight: config.weight.default,
  times: config.times.default,
  set: config.set.default
})

export default createComponent<LegPressResultType, {}>({
  components: { BaseResult, ResultField },
  props: {
    index: Number,
    result: Object,
    deleteResult: Function
  },
  setup(props, { emit }) {
    const { index, result } = props
    const { weight, times, set } = result
    const state = reactive({ weight, times, set })

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
.row {
  margin: 0;
}
</style>
