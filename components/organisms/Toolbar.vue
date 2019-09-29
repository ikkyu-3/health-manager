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
import { userStore } from '@/store'

export default createComponent({
  setup() {
    const store = userStore()
    const state = reactive({
      color: mainColor,
      title: computed(() => store.state.title)
    })

    return { state }
  }
})
</script>
