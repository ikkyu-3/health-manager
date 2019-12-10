import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import BaseResult from './BaseResult.vue'
import WorkoutTimeResult from './WorkoutTimeResult.vue'
import LegPressResult, {
  initResult as legPressInitResult
} from './LegPressResult.vue'
import LegCurlResult, {
  initResult as legCurlInitResult
} from './LegCurlResult.vue'
import LegExtensionResult, {
  initResult as legExtensionInitResult
} from './LegExtensionResult.vue'

storiesOf('molecules.results', module).add('BaseResult', () => ({
  components: { BaseResult },
  template: `
    <base-result :delete-result="action" style="height: 200px;" >Base Result</base-result>
  `,
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

storiesOf('molecules.results', module).add('WorkoutResult', () => ({
  components: { LegPressResult, LegCurlResult, LegExtensionResult },
  template: `
    <article>
      <h1>WorkoutResult</h1>
      <section>
        <h2>LegPressResult</h2>
        <leg-press-result :index="index" :result="legPressResult" :delete-result="action"/>
      </section>
      <section>
        <h2>LegPressResult</h2>
        <leg-curl-result :index="index" :result="legCurlResult" :delete-result="action"/>
      </section>
      <section>
        <h2>LegExtensionResult</h2>
        <leg-extension-result :index="index" :result="legExtensionResult" :delete-result="action"/>
      </section>
    </article>
  `,
  data: () => ({
    index: 0,
    legPressResult: legPressInitResult(),
    legCurlResult: legCurlInitResult(),
    legExtensionResult: legExtensionInitResult()
  }),
  methods: {
    action: action('clicked')
  }
}))
