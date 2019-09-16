import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import WorkoutListItem from '@/components/molecules/listItem/WorkoutListItem.vue'

storiesOf('Molecules.ListItem.WorkoutListItem', module)
  .add('not selected', () => ({
    components: { WorkoutListItem },
    template: `
    <v-list>
      <workout-list-item
        :name="name"
        :index="index"
        :click="click"
      />
    </v-list>
  `,
    data() {
      return {
        name: 'Leg Press',
        index: '',
        click: action('clicked')
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
        :click="click"
      />
    </v-list>
  `,
    data() {
      return {
        name: 'Chest Press',
        index: '1',
        click: action('clicked')
      }
    }
  }))
