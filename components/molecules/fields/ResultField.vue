<template>
  <div class="input-container">
    <v-btn fab dark color="grey" x-small @click="reduce">
      <v-icon>fa-minus</v-icon>
    </v-btn>
    <div class="input-value">
      {{ value }}<span class="unit">{{ state.unit }}</span>
    </div>
    <v-btn fab dark color="grey" x-small @click="add">
      <v-icon>fa-plus</v-icon>
    </v-btn>
  </div>
</template>

<script lang="ts">
import { createComponent, reactive } from '@vue/composition-api'

export type ResultInputType = {
  value: number
  weight: boolean
  times: boolean
  set: boolean
  remove: () => void
  add: () => void
}

export default createComponent<ResultInputType>({
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
