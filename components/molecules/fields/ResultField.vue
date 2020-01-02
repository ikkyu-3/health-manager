<template>
  <div class="input-container">
    <v-btn fab dark color="grey" x-small @click="remove">
      <v-icon>fa-minus</v-icon>
    </v-btn>
    <div class="input-value">
      {{ value }}<span class="unit">{{ unit }}</span>
    </div>
    <v-btn fab dark color="grey" x-small @click="add">
      <v-icon>fa-plus</v-icon>
    </v-btn>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'

export type ResultInputType = {
  value: number
  weight: boolean
  times: boolean
  seconds: boolean
  set: boolean
  add: () => void
  remove: () => void
}

export default createComponent<ResultInputType>({
  props: {
    value: Number,
    weight: Boolean,
    times: Boolean,
    seconds: Boolean,
    set: Boolean,
    add: Function,
    remove: Function
  },
  setup(props) {
    const { weight, times, seconds, set } = props

    let unit = ''

    if (weight) unit = 'kg'
    if (times) unit = '回'
    if (seconds) unit = '秒'
    if (set) unit = 'セット'

    return { unit }
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
