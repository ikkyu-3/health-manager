import { storiesOf } from '@storybook/vue'

import WorkoutListItem from '@/components/molecules/listItem/WorkoutListItem.vue'

storiesOf('Molecules.ListItem.WorkoutListItem', module)
  .add('not selected', () => ({
    components: { WorkoutListItem },
    template: `
    <v-list>
      <workout-list-item
        :name="name"
        :index="index"
      />
    </v-list>
  `,
    data() {
      return {
        name: 'Leg Press',
        index: ''
      }
    }
  }))
  .add('selected', () => ({
    components: { WorkoutListItem },
    template: `
    <v-list>
      <workout-list-item
        :name="name"
        :index="index"
      />
    </v-list>
  `,
    data() {
      return {
        name: 'Chest Press',
        index: '1'
      }
    }
  }))
