<template>
  <v-app-bar dark fixed :color="state.color">
    <v-btn icon @click="arrowButtonClick">
      <v-icon>fa-arrow-left</v-icon>
    </v-btn>
    <v-toolbar-title>Workoutsを追加</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text @click="clearButtonClick">Clear</v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import { createComponent, reactive } from '@vue/composition-api'
import { subColor } from '@/constants'

export default createComponent({
  props: {
    arrowButtonClick: Function,
    clearButtonClick: Function
  },
  setup() {
    const state = reactive({
      color: subColor
    })

    return { state }
  }
})
</script>
