<template>
  <v-btn depressed fab dark :color="buttonColor" @click="click">
    <span v-if="isActive">{{ text }}</span>
  </v-btn>
</template>

<script lang="ts">
import { createComponent, computed } from '@vue/composition-api'

export default createComponent({
  props: {
    color: {
      type: String,
      default: 'red lighten-3'
    },
    isActive: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ''
    }
  },
  setup(props, ctx) {
    const buttonColor = computed(() =>
      props.isActive ? props.color : 'grey lighten-1'
    )

    function click(e: MouseEvent) {
      ctx.emit('click', e)
    }

    return { click, buttonColor }
  }
})
</script>
