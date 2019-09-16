<template>
  <v-bottom-navigation v-model="bottomNav" fixed grow>
    <navigation-button
      v-for="(button, index) in buttons"
      :key="index"
      :to="button.to"
      :value="button.value"
      :text="button.text"
      :icon="button.icon"
    />
  </v-bottom-navigation>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
import NavigationButton from '@/components/molecules/button/NavigationButton.vue'

export default createComponent({
  components: { NavigationButton },
  setup() {
    const buttons = [
      {
        to: 'workouts',
        value: 'workouts',
        text: 'Workouts',
        icon: 'fa-dumbbell'
      },
      {
        to: 'schedule',
        value: 'schedule',
        text: 'Schedule',
        icon: 'fa-calendar-alt'
      },
      {
        to: 'workout-data',
        value: 'workout-data',
        text: 'Workout Data',
        icon: 'fa-list-alt'
      },
      {
        to: 'health-planet',
        value: 'health-planet',
        text: 'Health Planet',
        icon: 'fa-globe'
      }
    ]

    const bottomNav: string = buttons[0].value

    return {
      buttons,
      bottomNav
    }
  }
})
</script>

<style></style>
