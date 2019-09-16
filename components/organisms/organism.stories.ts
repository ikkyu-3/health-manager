import { storiesOf } from '@storybook/vue'

import BottomNavigation from '@/components/organisms/BottomNavigation.vue'

storiesOf('Organisms', module).add('BottomNavigation', () => ({
  components: { BottomNavigation },
  data() {
    return {
      bottomNav: 'workouts'
    }
  },
  template: '<bottom-navigation :bottomNav="bottomNav"/>'
}))
