<template>
  <base-result :delete-result="() => deleteResult(index)">
    <v-row class="row">
      <v-col cols="5" class="key">Seconds</v-col>
      <v-col cols="7">
        <result-field
          seconds
          :value="state.seconds"
          :remove="reduceSeconds"
          :add="addSeconds"
        />
      </v-col>
      <v-col cols="5" class="key">Set</v-col>
      <v-col cols="7">
        <result-field
          set
          :value="state.set"
          :remove="reduceSet"
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
  seconds: { max: 300, default: 30, step: 5 },
  set: { max: 10, default: 3, step: 1 }
}

type PlankResultType = {
  index: number
  result: {
    seconds: number
    set: number
  }
  deleteResult: (index: number) => void
}

export const initResult = (): WeightTrainingResult => ({
  seconds: config.seconds.default,
  set: config.set.default
})

export default createComponent<PlankResultType, {}>({
  components: { BaseResult, ResultField },
  props: {
    index: Number,
    result: Object,
    deleteResult: Function
  },
  setup(props, { emit }) {
    const { index, result } = props
    const { seconds, set } = result
    const state = reactive({ seconds, set })

    const reduceSeconds = (e: MouseEvent) => {
      e.stopPropagation()
      if (state.seconds === 0) return
      state.seconds -= config.seconds.step
      emit('seconds-change', index, state.seconds)
    }

    const addSeconds = (e: MouseEvent) => {
      e.stopPropagation()
      if (state.seconds === config.seconds.max) return
      state.seconds += config.seconds.step
      emit('seconds-change', index, state.seconds)
    }

    const reduceSet = (e: MouseEvent) => {
      e.stopPropagation()
      if (state.set === 0) return
      state.set -= config.set.step
      emit('set-change', index, state.set)
    }

    const addSet = (e: MouseEvent) => {
      e.stopPropagation()
      if (state.set === config.set.max) return
      state.set += config.set.step
      emit('set-change', index, state.set)
    }

    return {
      state,
      reduceSeconds,
      addSeconds,
      reduceSet,
      addSet
    }
  }
})
</script>

<style lang="scss" scoped>
@import url('../results.scss');
</style>
