<template>
  <v-bottom-navigation
    v-model="bottomNav"
    fixed
    grow
    :color="color"
    :background-color="backgroundColor"
  >
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
import colors from 'vuetify/es5/util/colors'
import NavigationButton from '@/components/molecules/button/NavigationButton.vue'

export default createComponent({
  components: { NavigationButton },
  setup() {
    const color = colors.grey.lighten5
    const backgroundColor = colors.blue.darken2
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
      color,
      backgroundColor,
      buttons,
      bottomNav
    }
  }
})
</script>
