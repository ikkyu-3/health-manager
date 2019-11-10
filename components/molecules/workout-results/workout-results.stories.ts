import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import BaseResult from './BaseResult.vue'
import LegPressResult, { initResult } from './LegPressResult.vue'

storiesOf('molecules.workout-results', module).add('BaseResult', () => ({
  components: { BaseResult },
  template: `
    <base-result :delete-result="action" style="height: 200px;" >Base Result</base-result>
  `,
  methods: {
    action: action('clicked')
  }
}))

storiesOf('molecules.workout-results', module).add('LegPressResult', () => ({
  components: { LegPressResult },
  template: `
    <leg-press-result :index="index" :result="result" :delete-result="action"/>
  `,
  data: () => ({ index: 0, result: initResult() }),
  methods: {
    action: action('clicked')
  }
}))
