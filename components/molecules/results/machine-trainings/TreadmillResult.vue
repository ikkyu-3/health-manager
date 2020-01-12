<template>
  <base-result :delete-result="() => deleteResult(index)">
    <v-row class="row">
      <v-col cols="5" class="key">Minutes</v-col>
      <v-col cols="7">
        <result-field
          minutes
          :value="state.minutes"
          :remove="reduceMinutes"
          :add="addMinutes"
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
import { WorkoutResultByMinutes } from '@/types'
import BaseResult from '@/components/molecules/results/BaseResult.vue'
import ResultField from '@/components/molecules/fields/ResultField.vue'

const config = {
  seconds: { max: 300, default: 30, step: 5 },
  set: { max: 10, default: 1, step: 1 }
}

type TreadmillResultType = {
  index: number
  result: {
    minutes: number
    set: number
  }
  deleteResult: (index: number) => void
}

export const initResult = (): WorkoutResultByMinutes => ({
  minutes: config.seconds.default,
  set: config.set.default
})

export default createComponent<TreadmillResultType, {}>({
  components: { BaseResult, ResultField },
  props: {
    index: Number,
    result: Object,
    deleteResult: Function
  },
  setup(props, { emit }) {
    const { index, result } = props
    const { minutes, set } = result
    const state = reactive({ minutes, set })

    const reduceMinutes = (e: MouseEvent) => {
      e.stopPropagation()
      if (state.minutes === 0) return
      state.minutes -= config.seconds.step
      emit('minutes-change', index, state.minutes)
    }

    const addMinutes = (e: MouseEvent) => {
      e.stopPropagation()
      if (state.minutes === config.seconds.max) return
      state.minutes += config.seconds.step
      emit('minutes-change', index, state.minutes)
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
      reduceMinutes,
      addMinutes,
      reduceSet,
      addSet
    }
  }
})
</script>

<style lang="scss" scoped>
@import url('../results.scss');
</style>
