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

storiesOf('molecules.panel-parts.WorkoutPanelContent', module).add(
  'LegPressPanelContent',
  () => ({
    components: { WorkoutPanelHeader, WorkoutPanelContent },
    template: `
      <v-expansion-panels>
        <v-expansion-panel>
          <workout-panel-header :name="workout.name" status="running" />
          <workout-panel-content :index="workoutIndex" :workout="workout" :save="save" />
        </v-expansion-panel>
      </v-expansion-panels>
    `,
    data: () => ({
      workoutIndex: 0,
      workout: {
        name: 'Leg Press',
        results: [],
        memo: '',
        startTime: '2019-01-01T00:00:00.000Z',
        endTime: '2019-01-01T00:01:23.000Z'
      }
    }),
    methods: {
      save: action('save')
    }
  })
)
