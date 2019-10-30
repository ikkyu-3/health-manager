import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import AddButton from '@/components/molecules/button/AddButton.vue'
import RemoveButton from '@/components/molecules/button/RemoveButton.vue'
import EndWorkoutsButton from '@/components/molecules/button/EndWorkoutsButton.vue'

storiesOf('Molecules.Button.AddButton', module).add('default color', () => ({
  components: { AddButton },
  template: '<add-button @click="action"/>',
  methods: { action: action('clicked') }
}))

storiesOf('Molecules.Button.RemoveButton', module).add('default color', () => ({
  components: { RemoveButton },
  template: '<remove-button @click="action"/>',
  methods: { action: action('clicked') }
}))

storiesOf('Molecules.Button.EndWorkoutsButton', module).add(
  'default color',
  () => ({
    components: { EndWorkoutsButton },
    template: '<end-workouts-button @click="action"/>',
    methods: { action: action('clicked') }
  })
)
