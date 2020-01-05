import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import WorkoutPanelHeader from './WorkoutPanelHeader.vue'
import WorkoutPanelContent from './WorkoutPanelContent.vue'

storiesOf('molecules.panel-parts', module).add('WorkoutPanelHeader', () => ({
  components: { WorkoutPanelHeader },
  template: `
      <v-expansion-panels readonly focusable>
        <v-expansion-panel disabled><workout-panel-header name="Pending" status="pending"/></v-expansion-panel>
        <v-expansion-panel><workout-panel-header name="Ready" status="ready"/></v-expansion-panel>
        <v-expansion-panel><workout-panel-header name="Running" status="running"/></v-expansion-panel>
        <v-expansion-panel><workout-panel-header name="Exited" status="exited"/></v-expansion-panel>
      </v-expansion-panels>
    `
}))

storiesOf('molecules.panel-parts', module).add('WorkoutPanelContent', () => ({
  components: { WorkoutPanelHeader, WorkoutPanelContent },
  template: `
      <article>
        <h1>WorkoutPanelContent</h1>
        <section v-for="(workout, index) in workouts" :key="index">
          <h2>{{ workout.name }}</h2>
          <v-expansion-panels>
            <v-expansion-panel>
              <workout-panel-header :name="workout.name" status="exited" />
              <workout-panel-content :index="index" :workout="workout" :save="save" />
            </v-expansion-panel>
          </v-expansion-panels>
        </section>
      </article>
    `,
  data: () => ({
    workouts: [
      {
        name: 'Bench Press',
        results: [],
        memo: '',
        startTime: '2019-01-01T00:00:00.000Z',
        endTime: '2019-01-01T00:01:23.000Z'
      },
      {
        name: 'Chest Press',
        results: [],
        memo: '',
        startTime: '2019-01-01T00:00:00.000Z',
        endTime: '2019-01-01T00:01:23.000Z'
      },
      {
        name: 'Lat Pulldown',
        results: [],
        memo: '',
        startTime: '2019-01-01T00:00:00.000Z',
        endTime: '2019-01-01T00:01:23.000Z'
      },
      {
        name: 'Leg Curl',
        results: [],
        memo: '',
        startTime: '2019-01-01T00:00:00.000Z',
        endTime: '2019-01-01T00:01:23.000Z'
      },
      {
        name: 'Leg Extension',
        results: [],
        memo: '',
        startTime: '2019-01-01T00:00:00.000Z',
        endTime: '2019-01-01T00:01:23.000Z'
      },
      {
        name: 'Leg Press',
        results: [],
        memo: '',
        startTime: '2019-01-01T00:00:00.000Z',
        endTime: '2019-01-01T00:01:23.000Z'
      },
      {
        name: 'Ab Roller',
        results: [],
        memo: '',
        startTime: '2019-01-01T00:00:00.000Z',
        endTime: '2019-01-01T00:01:23.000Z'
      },
      {
        name: 'Back Extension',
        results: [],
        memo: '',
        startTime: '2019-01-01T00:00:00.000Z',
        endTime: '2019-01-01T00:01:23.000Z'
      },
      {
        name: 'Crunch',
        results: [],
        memo: '',
        startTime: '2019-01-01T00:00:00.000Z',
        endTime: '2019-01-01T00:01:23.000Z'
      },
      {
        name: 'Leg Raise',
        results: [],
        memo: '',
        startTime: '2019-01-01T00:00:00.000Z',
        endTime: '2019-01-01T00:01:23.000Z'
      },
      {
        name: 'Sit Up',
        results: [],
        memo: '',
        startTime: '2019-01-01T00:00:00.000Z',
        endTime: '2019-01-01T00:01:23.000Z'
      }
    ]
  }),
  methods: {
    save: action('save')
  }
}))
