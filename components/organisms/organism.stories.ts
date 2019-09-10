import { storiesOf } from '@storybook/vue'

import BottomNavigation from './BottomNavigation.vue'

storiesOf('Organisms', module).add('BottomNavigation', () => ({
  components: { BottomNavigation },
  template: '<bottom-navigation bottomNav="workouts"/>'
}))
