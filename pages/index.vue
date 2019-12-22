<template>
  <v-layout :class="{ 'fill-height': !state.workoutsExists }">
    <workout-panels v-if="state.workoutsExists" :save="save" />
    <p v-else class="empty">{{ emptyText }}</p>
    <v-btn class="add" fixed fab dark color="lime" @click="showDialog">
      <v-icon>fa-plus</v-icon>
    </v-btn>
    <workouts-dialog :dialog="state.dialog" :back="hideDialog" />
    <v-snackbar v-model="state.snackbar">
      {{ state.snackbarText }}
      <v-btn color="pink" text @click="hideSnackbar">
        Close
      </v-btn>
    </v-snackbar>
  </v-layout>
</template>

<script lang="ts">
import {
  createComponent,
  reactive,
  computed,
  onMounted
} from '@vue/composition-api'
import WorkoutsDialog from '@/components/organisms/dialog/WorkoutsDialog.vue'
import WorkoutPanels from '@/components/organisms/panels/WorkoutPanels.vue'
import { subColor } from '@/constants'
import { userStore } from '@/store'
import IndexedDB from '@/modules/IndexedDB'

export default createComponent({
  components: { WorkoutsDialog, WorkoutPanels },
  setup() {
    const store = userStore()
    const db = new IndexedDB()

    const state = reactive({
      dialog: false,
      color: subColor,
      workoutsExists: computed(() => store.getters['workouts/workoutsExists']),
      canUseDb: false,
      snackbarText: '',
      snackbar: false
    })

    const emptyText = `ワークアウトをはじめましょう!!💪`

    const showDialog = () => {
      state.dialog = true
    }

    const hideDialog = () => {
      state.dialog = false
    }

    const hideSnackbar = () => {
      state.snackbar = false
      state.snackbarText = ''
    }

    const save = () => {
      if (state.canUseDb) {
        db.save(store.getters['workouts/workouts'])
          .then(() => {
            state.snackbarText = `保存しました💪`
            state.snackbar = true
          })
          .catch(() => {
            state.snackbarText = `保存に失敗しました...😇`
            state.snackbar = true
          })
      }
    }

    onMounted(() =>
      db
        .init()
        .then(() => (state.canUseDb = true))
        .catch(() => {
          state.snackbarText = `保存機能が使用できません...😇`
          state.snackbar = true
        })
    )

    return {
      state,
      emptyText,
      showDialog,
      hideDialog,
      hideSnackbar,
      save
    }
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
