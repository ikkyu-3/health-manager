import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import AddButton from './AddButton.vue'

storiesOf('Molecules.Button', module).add('add-button', () => ({
  components: { AddButton },
  template: '<add-button @click="action"/>',
  methods: { action: action('clicked') }
}))
