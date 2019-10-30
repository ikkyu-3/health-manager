<template>
  <v-btn
    fab
    dark
    :color="color"
    :x-small="state.xSmall"
    :small="state.small"
    :large="state.large"
    :x-large="state.xLarge"
    @click="click"
  >
    <v-icon>fa-plus</v-icon>
  </v-btn>
</template>

<script lang="ts">
import { createComponent, reactive } from '@vue/composition-api'

export default createComponent({
  props: {
    color: {
      type: String,
      default: 'grey'
    }
  },
  setup(_, { attrs, emit }) {
    const state = reactive({
      xSmall: attrs.hasOwnProperty('x-small'),
      small: attrs.hasOwnProperty('small'),
      large: attrs.hasOwnProperty('large'),
      xLarge: attrs.hasOwnProperty('x-large')
    })

    function click(e: MouseEvent) {
      emit('click', e)
    }

    return { state, click }
  }
})
</script>
