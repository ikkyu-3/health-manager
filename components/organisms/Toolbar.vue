<template>
  <div>
    <v-toolbar :color="state.color" dark>
      <v-toolbar-title>{{ state.title }}</v-toolbar-title>
    </v-toolbar>
  </div>
</template>

<script lang="ts">
import { createComponent, reactive, computed } from '@vue/composition-api'
import { mainColor } from '@/constants'

export default createComponent({
  setup(_, ctx) {
    const state = reactive({
      color: mainColor,
      title: computed(() => ctx.root.$store.state.title)
    })

    console.warn(ctx.root.$store.state)

    return { state }
  }
})
</script>
