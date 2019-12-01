<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <v-card>
      <workouts-dialog-toolbar
        :arrow-button-click="back"
        :clear-button-click="clear"
      />
      <div class="workout-list">
        <v-list
          v-for="(group, index) in state.workoutList"
          :key="index"
          subheader
          flat
        >
          <workout-list-group
            :sub-header="group.target"
            :items="group.items"
            :item-click="itemClick"
          />
        </v-list>
      </div>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { createComponent, reactive, computed } from '@vue/composition-api'
import WorkoutsDialogToolbar from '@/components/organisms/dialog/WorkoutsDialogToolbar.vue'
import WorkoutListGroup from '@/components/organisms/lists/WorkoutListGroup.vue'
import { userStore } from '@/store'
import { workoutMenu } from '@/constants'
import { WorkoutContexts } from '@/types'

export default createComponent({
  components: { WorkoutsDialogToolbar, WorkoutListGroup },
  props: {
    dialog: { type: Boolean, require: true },
    back: { type: Function, require: true }
  },
  setup() {
    const store = userStore()

    const workoutContexts = computed<WorkoutContexts>(
      () => store.getters['workouts/workoutContexts']
    )

    const workoutList = computed(() => {
      return workoutMenu.map(menu => {
        return {
          target: menu.target,
          items: menu.workouts.map(name => {
            const context = workoutContexts.value.find(
              workContext => workContext.name === name
            )

            return {
              index: context ? context.index : '',
              name,
              disabled: context ? context.isExited : false
            }
          })
        }
      })
    })

    const state = reactive({ workoutList })

    function itemClick(index: string, name: string) {
      if (index === '') {
        store.dispatch('workouts/addWorkout', { name })
      } else {
        store.dispatch('workouts/removeWorkout', { index: Number(index) - 1 })
      }
    }

    function clear() {
      store.dispatch('workouts/clearWorkouts')
    }

    return { state, itemClick, clear }
  }
})
</script>

<style lang="scss" scoped>
.workout-list {
  margin-top: 56px;
}
</style>
