<template>
  <v-btn fab dark :color="color" @click="click">
    <v-icon>fa-plus</v-icon>
  </v-btn>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'

export default createComponent({
  setup(_, ctx) {
    function click(e: MouseEvent) {
      ctx.emit('click', e)
    }
    return { click }
  }
})
</script>
