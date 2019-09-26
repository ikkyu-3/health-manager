<template>
  <v-app>
    <toolbar />
    <v-content>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-content>
    <bottom-navigation />
  </v-app>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
import Toolbar from '@/components/organisms/Toolbar.vue'
import BottomNavigation from '@/components/organisms/BottomNavigation.vue'

export default createComponent({
  components: { Toolbar, BottomNavigation },
  setup() {
    return {}
  }
})
</script>
