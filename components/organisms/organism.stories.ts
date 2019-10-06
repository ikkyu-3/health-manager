import { storiesOf } from '@storybook/vue'
import Vuex from 'vuex'
import { action } from '@storybook/addon-actions'
import Toolbar from '@/components/organisms/Toolbar.vue'
import DialogToolbar from '@/components/organisms/DialogToolbar.vue'
import BottomNavigation from '@/components/organisms/BottomNavigation.vue'

storiesOf('Organisms', module).add('Toolbar', () => ({
  store: new Vuex.Store({
    state: { currentPage: 'Workouts' }
  }),
  components: { Toolbar },
  template: '<toolbar />'
}))

storiesOf('Organisms', module).add('DialogToolbar', () => ({
  components: { DialogToolbar },
  template:
    '<dialog-toolbar :arrowButtonClick="arrowButtonClick" :clearButtonClick="clearButtonClick"/>',
  data: () => {
    return {
      arrowButtonClick: action('Arrow button clicked'),
      clearButtonClick: action('Clear button clicked')
    }
  }
}))

storiesOf('Organisms', module).add('BottomNavigation', () => ({
  components: { BottomNavigation },
  template: '<bottom-navigation />'
}))
