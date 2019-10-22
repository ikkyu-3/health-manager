<template>
  <v-layout>
    <v-flex>
      <!-- TODO: コンポーネントを作成する -->
      <div v-if="state.workoutsExists">Workoutsあり</div>
      <div v-else>Workoutsなし</div>

      <add-button right-bottom @click="showDialog" />
    </v-flex>
    <workouts-dialog :dialog="state.dialog" :back="hideDialog" />
  </v-layout>
</template>

<script lang="ts">
import { createComponent, reactive, computed } from '@vue/composition-api'
import AddButton from '@/components/molecules/button/AddButton.vue'
import WorkoutsDialog from '@/components/organisms/WorkoutsDialog.vue'
import { subColor } from '@/constants'
import { userStore } from '@/store'

export default createComponent({
  components: { AddButton, WorkoutsDialog },
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
