<template>
  <div class="input-container">
    <reduce-button x-small @click="reduce" />
    <div class="input-value">
      {{ value }}<span class="unit">{{ state.unit }}</span>
    </div>
    <add-button x-small @click="add" />
  </div>
</template>

<script lang="ts">
import { createComponent, reactive } from '@vue/composition-api'
import AddButton from '@/components/molecules/buttons/AddButton.vue'
import ReduceButton from '@/components/molecules/buttons/ReduceButton.vue'

export type ResultInputType = {
  value: number
  weight: boolean
  times: boolean
  set: boolean
  remove: () => void
  add: () => void
}

export default createComponent<ResultInputType>({
  components: { AddButton, ReduceButton },
  props: {
    value: Number,
    weight: Boolean,
    times: Boolean,
    set: Boolean,
    reduce: Function,
    add: Function
  },
  setup(props) {
    const { weight, times, set } = props

    let unit = ''
    if (weight) {
      unit = 'kg'
    } else if (times) {
      unit = '回'
    } else if (set) {
      unit = 'セット'
    }

    const state = reactive({ unit })

    return { state }
  }
})
</script>

<style lang="scss" scoped>
.input-container {
  display: flex;
  align-items: center;
}

.input-value {
  width: 100%;
  flex-grow: 1;
  text-align: center;
}
</style>
