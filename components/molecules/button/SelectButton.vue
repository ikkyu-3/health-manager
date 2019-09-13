<template>
  <v-btn fab dark :color="buttonColor" @click="click">
    <span v-if="isActive">{{ number }}</span>
  </v-btn>
</template>

<script lang="ts">
import { createComponent, computed } from '@vue/composition-api'

export default createComponent({
  props: {
    color: {
      type: String,
      default: 'red'
    },
    isActive: {
      type: Boolean,
      required: true,
      default: false
    },
    number: {
      type: String,
      required: true,
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
