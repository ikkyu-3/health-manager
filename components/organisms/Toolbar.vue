<template>
  <div>
    <v-toolbar :color="state.color" dark>
      <v-toolbar-title>{{ state.title }}</v-toolbar-title>
    </v-toolbar>
  </div>
</template>

<script lang="ts">
import { createComponent, reactive } from '@vue/composition-api'
import { mainColor } from '@/constants'

export default createComponent({
  setup() {
    const state = reactive({
      color: mainColor,
      title: 'Title'
      // title: computed(() => ctx.root.$store.getters)
    })

    return { state }
  }
})
</script>
