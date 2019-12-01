import { storiesOf } from '@storybook/vue'

import Toolbar from '@/components/organisms/global/TheToolbar.vue'
import BottomNavigation from '@/components/organisms/global/TheBottomNavigation.vue'

storiesOf('organisms.global', module).add('TheToolbar', () => ({
  components: { Toolbar },
  template: '<toolbar />'
}))

storiesOf('organisms.global', module).add('BottomNavigation', () => ({
  components: { BottomNavigation },
  template: '<bottom-navigation />'
}))
