import { storiesOf } from '@storybook/vue'
import BottomNavigation from '@/components/organisms/BottomNavigation.vue'

storiesOf('Organisms', module).add('BottomNavigation', () => ({
  components: { BottomNavigation },
  template: '<bottom-navigation />'
}))
