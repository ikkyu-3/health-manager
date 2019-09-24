<template>
  <v-bottom-navigation
    v-model="state.bottomNav"
    fixed
    grow
    shift
    :color="state.color"
    :background-color="state.backgroundColor"
  >
    <v-btn
      v-for="(button, index) in state.buttons"
      :key="index"
      :value="button.value"
      :to="button.to"
      nuxt
    >
      <span class="button-text">{{ button.text }}</span>
      <v-icon>{{ button.icon }}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script lang="ts">
import { createComponent, reactive } from '@vue/composition-api'
import { bottomNavigation, mainColor, mainTextColor } from '@/constants'

export default createComponent({
  setup() {
    const state = reactive({
      color: mainTextColor,
      backgroundColor: mainColor,
      buttons: bottomNavigation,
      bottomNav: bottomNavigation[0].value
    })

    return { state }
  }
})
</script>

<style lang="scss" scoped>
.button-text {
  font-size: 90%;
  font-weight: 500;
}
</style>
