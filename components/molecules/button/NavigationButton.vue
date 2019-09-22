<template>
  <v-btn :value="value">
    <span class="button-text">{{ text }}</span>
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

<style lang="scss" scoped>
.button-text {
  font-size: 90%;
  font-weight: 500;
}
</style>
