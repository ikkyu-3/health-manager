import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import AddButton from '@/components/molecules/button/AddButton.vue'
import RemoveButton from '@/components/molecules/button/RemoveButton.vue'
import EndWorkoutsButton from '@/components/molecules/button/EndWorkoutsButton.vue'

storiesOf('Molecules.Button', module).add('AddButton', () => ({
  components: { AddButton },
  template: `
    <article>
      <h1>AddButton</h1>
      <section>
        <h2>Size</h2>
        <ul>
          <li>
            <div>x-small</div>
            <add-button x-small @click="action"/>
          </li>
          <li>
            <div>small</div>
            <add-button small @click="action"/>
          </li>
          <li>
            <div>default</div>
            <add-button @click="action"/>
          </li>
          <li>
            <div>large</div>
            <add-button large @click="action"/>
          </li>
          <li>
            <div>x-large</div>
            <add-button x-large @click="action"/>
          </li>
        </ul>
      </section>
      <section>
        <h2>Color</h2>
        <ul>
          <li>
            <div>default</div>
            <add-button @click="action"/>
          </li>
          <li>
            <div>Red</div>
            <add-button color="red" @click="action"/>
          </li>
          <li>
            <div>Blue</div>
            <add-button color="blue" @click="action"/>
          </li>
          <li>
          <div>Green</div>
          <add-button color="green" @click="action"/>
          </li>
        </ul>
      </section>
    </article>
  `,
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
