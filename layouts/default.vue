<template>
  <v-app>
    <toolbar />
    <v-content>
      <v-container class="container">
        <nuxt />
      </v-container>
    </v-content>
    <bottom-navigation />
  </v-app>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
import Toolbar from '@/components/organisms/global/TheToolbar.vue'
import BottomNavigation from '@/components/organisms/global/TheBottomNavigation.vue'

export default createComponent({
  components: { Toolbar, BottomNavigation },
  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
}
</style>
