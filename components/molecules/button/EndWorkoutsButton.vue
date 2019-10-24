<template>
  <v-btn class="end-workouts-button" color="#ef9a9a" dark @click="click"
    >End Workouts</v-btn
  >
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
.end-workouts-button {
  width: 100%;
}
</style>
