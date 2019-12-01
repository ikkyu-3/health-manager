import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import WorkoutsDialog from '@/components/organisms/dialog/WorkoutsDialog.vue'
import WorkoutsDialogToolbar from '@/components/organisms/dialog/WorkoutsDialogToolbar.vue'

storiesOf('organisms.dialog', module).add('DialogToolbar', () => ({
  components: { WorkoutsDialogToolbar },
  template: `
    <workouts-dialog-toolbar
      :arrowButtonClick="arrowButtonClick"
      :clearButtonClick="clearButtonClick"
    />
  `,
  methods: {
    arrowButtonClick: action('Arrow button clicked'),
    clearButtonClick: action('Clear button clicked')
  }
}))

storiesOf('organisms.dialog', module).add('WorkoutsDialog', () => ({
  components: { WorkoutsDialog },
  template: '<workouts-dialog :dialog="true" :back="back"/>',
  methods: {
    back: action('Back Page')
  }
}))
