<template>
  <v-btn :value="value">
    <span>{{ text }}</span>
    <v-icon>{{ icon }}</v-icon>
  </v-btn>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'

export default createComponent({
  props: {
    value: String,
    text: String,
    icon: {
      type: String,
      validator: (value: string) => /^fa-.+$/.test(value)
    }
  },
  setup() {
    return {}
  }
})
</script>
