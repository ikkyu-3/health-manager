import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import BaseResult from './BaseResult.vue'
import LegPressResult, { initResult } from './LegPressResult.vue'
import WorkoutTimeResult from './WorkoutTimeResult.vue'

storiesOf('molecules.results', module).add('BaseResult', () => ({
  components: { BaseResult },
  template: `
    <base-result :delete-result="action" style="height: 200px;" >Base Result</base-result>
  `,
  methods: {
    action: action('clicked')
  }
}))

storiesOf('molecules.results', module).add('LegPressResult', () => ({
  components: { LegPressResult },
  template: `
    <leg-press-result :index="index" :result="result" :delete-result="action"/>
  `,
  data: () => ({ index: 0, result: initResult() }),
  methods: {
    action: action('clicked')
  }
}))

storiesOf('molecules.results', module).add('WorkoutTimeResult', () => ({
  components: { WorkoutTimeResult },
  template: `
    <workout-time-result :startTime="startTime" :endTime="endTime" />
  `,
  data: () => ({
    startTime: '2019-01-01T00:00:00.000Z',
    endTime: '2019-01-01T00:01:30.000Z'
  })
}))
