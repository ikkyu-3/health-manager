import { storiesOf } from '@storybook/vue'

import WorkoutListItem from '@/components/molecules/list-items/WorkoutListItem.vue'

storiesOf('molecules.list-items', module).add('WorkoutListItem', () => ({
  components: { WorkoutListItem },
  template: `
      <v-list>
        <workout-list-item name="not selected" index=""/>
        <workout-list-item name="selected" index="1"/>
        <workout-list-item disabled name="disabled" index="2"/>
      </v-list>
    `
}))
