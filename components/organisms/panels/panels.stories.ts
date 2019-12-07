import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { userStore } from '@/store'
import WorkoutPanel from '@/components/organisms/panels/WorkoutPanel.vue'
import WorkoutPanels from '@/components/organisms/panels/WorkoutPanels.vue'

storiesOf('organisms.panels', module).add('WorkoutPanel', () => ({
  components: { WorkoutPanel },
  template: `
    <v-expansion-panels>
      <workout-panel
        v-for="panelProps in panelPropsList"
        :key="panelProps.index"
        :index="panelProps.index"
        :workout="panelProps.workout"
        :status="panelProps.status"
        :disabled="panelProps.disabled"
        :readonly="panelProps.readonly"
        :click="click"
        :save="save"
      />
    </v-expansion-panels>
  `,
  data: () => ({
    panelPropsList: [
      {
        index: 0,
        workout: {
          name: 'Leg Press',
          results: [
            {
              weight: 60,
              times: 10,
              set: 3
            }
          ],
          memo: '',
          startTime: '2019-01-01T00:00:00.000Z',
          endTime: '2019-01-01T00:11:11.000Z'
        },
        status: 'exited',
        disabled: false,
        readonly: false
      },
      {
        index: 1,
        workout: {
          name: 'Leg Press',
          results: [],
          memo: '',
          startTime: '2019-01-01T00:00:00.000Z',
          endTime: null
        },
        status: 'running',
        disabled: false,
        readonly: true
      },
      {
        index: 2,
        workout: {
          name: 'Leg Press',
          results: [],
          memo: '',
          startTime: null,
          endTime: null
        },
        status: 'ready',
        disabled: false,
        readonly: true
      },
      {
        index: 3,
        workout: {
          name: 'Leg Press',
          results: [],
          memo: '',
          startTime: null,
          endTime: null
        },
        status: 'pending',
        disabled: true,
        readonly: true
      }
    ]
  }),
  methods: {
    click: action('click'),
    save: action('save')
  }
}))

const store = userStore() as any
store.state.workouts.workouts = [
  {
    name: 'Leg Press',
    results: [],
    memo: '',
    startTime: null,
    endTime: null
  }
]
storiesOf('organisms.panels', module).add('WorkoutPanels', () => ({
  components: { WorkoutPanels },
  template: `
    <workout-panels />
  `
}))
