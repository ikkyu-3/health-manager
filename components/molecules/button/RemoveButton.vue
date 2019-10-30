<template>
  <v-btn fab dark :color="color" :class="className" @click="click">
    <v-icon>fa-minus</v-icon>
  </v-btn>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'

export default createComponent({
  props: {
    color: {
      type: String,
      default: 'grey'
    }
  },
  setup(_, { emit }) {
    function click(e: MouseEvent) {
      emit('click', e)
    }

    return { click }
  }
})
</script>
