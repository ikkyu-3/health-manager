import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import AddButton from '@/components/molecules/buttons/AddButton.vue'
import ReduceButton from '@/components/molecules/buttons/ReduceButton.vue'
import DeleteButton from '@/components/molecules/buttons/DeleteButton.vue'

storiesOf('molecules.buttons', module).add('AddButton', () => ({
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
        <cite>
          <a href="https://vuetifyjs.com/ja/styles/colors">
            <i>VuetifyのColor</i>
          </a>
        </cite>の値が使用できます
        <ul>
          <li>
            <div>default(Grey)</div>
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

storiesOf('molecules.buttons', module).add('ReduceButton', () => ({
  components: { ReduceButton },
  template: `
    <article>
      <h1>ReduceButton</h1>
      <section>
        <h2>Size</h2>
        <ul>
          <li>
            <div>x-small</div>
            <reduce-button x-small @click="action"/>
          </li>
          <li>
            <div>small</div>
            <reduce-button small @click="action"/>
          </li>
          <li>
            <div>default</div>
            <reduce-button @click="action"/>
          </li>
          <li>
            <div>large</div>
            <reduce-button large @click="action"/>
          </li>
          <li>
            <div>x-large</div>
            <reduce-button x-large @click="action"/>
          </li>
        </ul>
      </section>
      <section>
        <h2>Color</h2>
        <cite>
          <a href="https://vuetifyjs.com/ja/styles/colors">
            <i>VuetifyのColor</i>
          </a>
        </cite>の値が使用できます
        <ul>
          <li>
            <div>default(Grey)</div>
            <reduce-button @click="action"/>
          </li>
          <li>
            <div>Red</div>
            <reduce-button color="red" @click="action"/>
          </li>
          <li>
            <div>Blue</div>
            <reduce-button color="blue" @click="action"/>
          </li>
          <li>
          <div>Green</div>
          <reduce-button color="green" @click="action"/>
          </li>
        </ul>
      </section>
    </article>
  `,
  methods: { action: action('clicked') }
}))

storiesOf('molecules.buttons', module).add('DeleteButton', () => ({
  components: { DeleteButton },
  template:
    '<div style="width: 50px; height: 200px;"><delete-button @click="action"/></div>',
  methods: { action: action('clicked') }
}))
