<template>
  <v-layout :class="{ 'fill-height': !state.workoutsExists }">
    <workout-panels v-if="state.workoutsExists" />
    <p v-else class="empty">Let's Start Workouts!!💪</p>
    <v-btn class="add" fixed fab dark color="lime" @click="showDialog">
      <v-icon>fa-plus</v-icon>
    </v-btn>
    <workouts-dialog :dialog="state.dialog" :back="hideDialog" />
  </v-layout>
</template>

<script lang="ts">
import { createComponent, reactive, computed } from '@vue/composition-api'
import WorkoutsDialog from '@/components/organisms/dialog/WorkoutsDialog.vue'
import WorkoutPanels from '@/components/organisms/panels/WorkoutPanels.vue'
import { subColor } from '@/constants'
import { userStore } from '@/store'

export default createComponent({
  components: { WorkoutsDialog, WorkoutPanels },
  setup() {
    const store = userStore()

    const state = reactive({
      dialog: false,
      color: subColor,
      workoutsExists: computed(() => store.getters['workouts/workoutsExists'])
    })

    function showDialog() {
      state.dialog = true
    }

    function hideDialog() {
      state.dialog = false
    }

    return { state, showDialog, hideDialog }
  }
})
</script>

<style lang="scss" scoped>
.empty {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  font-weight: bold;
  margin: 0;
}

.add {
  right: 16px;
  bottom: 72px;
}
</style>
