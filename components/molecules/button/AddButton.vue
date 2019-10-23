<template>
  <v-btn fab dark :color="color" :class="className" @click="click">
    <v-icon>fa-plus</v-icon>
  </v-btn>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'

export default createComponent({
  props: {
    color: {
      type: String,
      default: 'teal'
    }
  },
  setup(_, { attrs, emit }) {
    const className = attrs.hasOwnProperty('right-bottom') ? 'rightBottom' : ''

    function click(e: MouseEvent) {
      emit('click', e)
    }

    return { className, click }
  }
})
</script>

<style lang="scss" scoped>
.rightBottom {
  position: absolute;
  right: 16px;
  bottom: 16px;
}
</style>
