<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <v-card>
      <dialog-toolbar :arrow-button-click="back" :clear-button-click="clear" />
      <v-list
        v-for="(group, index) in state.workoutList"
        :key="index"
        subheader
      >
        <workout-list-group
          :sub-header="group.target"
          :items="group.items"
          :item-click="click"
        />
      </v-list>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { createComponent, reactive, computed } from '@vue/composition-api'
import DialogToolbar from '@/components/organisms/DialogToolbar.vue'
import WorkoutListGroup from '@/components/organisms/WorkoutListGroup.vue'
import { userStore } from '@/store'
import { workoutMenu } from '@/constants'
import { WorkoutContexts } from '@/types'

export default createComponent({
  components: { DialogToolbar, WorkoutListGroup },
  props: {
    dialog: { type: Boolean, require: true },
    back: { type: Function, require: true },
    clear: { type: Function, require: true }
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

    function click(index: string, name: string) {
      if (index === '') {
        store.dispatch('workouts/addWorkout', { name })
      } else {
        store.dispatch('workouts/removeWorkout', { index: Number(index) - 1 })
      }
    }

    return { state, click }
  }
})
</script>
