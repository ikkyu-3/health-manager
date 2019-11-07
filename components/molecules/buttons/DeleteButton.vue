<template>
  <v-btn
    block
    dark
    depressed
    height="100%"
    class="delete-button"
    color="red"
    @click="click"
  >
    <v-icon>fa-times</v-icon>
  </v-btn>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'

export default createComponent({
  setup(_, { emit }) {
    function click(e: MouseEvent) {
      emit('click', e)
    }

    return { click }
  }
})
</script>

<style lang="scss" scoped>
.delete-button {
  border-radius: 0px;
}
</style>
