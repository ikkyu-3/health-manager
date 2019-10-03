import { storiesOf } from '@storybook/vue'
import Vuex from 'vuex'
import BottomNavigation from '@/components/organisms/BottomNavigation.vue'
import Toolbar from '@/components/organisms/Toolbar.vue'

storiesOf('Organisms', module).add('Toolbar', () => ({
  store: new Vuex.Store({
    state: { currentPage: 'Workouts' }
  }),
  components: { Toolbar },
  template: '<toolbar />'
}))

storiesOf('Organisms', module).add('BottomNavigation', () => ({
  components: { BottomNavigation },
  template: '<bottom-navigation />'
}))
