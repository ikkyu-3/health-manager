import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import WorkoutListGroup from '@/components/organisms/lists/WorkoutListGroup.vue'

storiesOf('organisms.lists', module).add('WorkoutListGroup', () => ({
  components: { WorkoutListGroup },
  template:
    '<v-list flat><workout-list-group :sub-header="subHeader" :items="items" :itemClick="itemClick"/></v-list>',
  data: () => ({
    subHeader: 'Leg',
    items: [
      { name: 'Leg Press', index: '' },
      { name: 'Leg Extention', index: '1', disabled: true },
      { name: 'Leg Curl', index: '2' }
    ]
  }),
  methods: { itemClick: action('Item Click') }
}))
