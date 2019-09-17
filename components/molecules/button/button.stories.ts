import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import AddButton from '@/components/molecules/button/AddButton.vue'
import NavigationButton from '@/components/molecules/button/NavigationButton.vue'

storiesOf('Molecules.Button.AddButton', module).add('default color', () => ({
  components: { AddButton },
  template: '<add-button @click="action"/>',
  methods: { action: action('clicked') }
}))

storiesOf('Molecules.Button.NavigationButton', module)
  .add('Workouts', () => ({
    components: { NavigationButton },
    template: `
    <v-bottom-navigation grow>
      <navigation-button value="workouts" text="Workouts" icon="fa-dumbbell"/>
    </v-bottom-navigation>
    `
  }))
  .add('Schedule', () => ({
    components: { NavigationButton },
    template: `
    <v-bottom-navigation grow>
      <navigation-button value="schedule" text="Schedule" icon="fa-calendar-alt"/>
    </v-bottom-navigation>
    `
  }))
  .add('Workout Data', () => ({
    components: { NavigationButton },
    template: `
    <v-bottom-navigation grow>
      <navigation-button value="workout-data" text="Workout Data" icon="fa-list-alt"/>
    </v-bottom-navigation>
    `
  }))
  .add('Health Planet', () => ({
    components: { NavigationButton },
    template: `
    <v-bottom-navigation grow>
      <navigation-button value="health-planet" text="Health Planet" icon="fa-globe"/>
    </v-bottom-navigation>
    `
  }))
