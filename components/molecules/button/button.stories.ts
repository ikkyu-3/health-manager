import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import AddButton from '@/components/molecules/button/AddButton.vue'

storiesOf('Molecules.Button.AddButton', module).add('default color', () => ({
  components: { AddButton },
  template: '<add-button @click="action"/>',
  methods: { action: action('clicked') }
}))
