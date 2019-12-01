import { storiesOf } from '@storybook/vue'
// import { action } from '@storybook/addon-actions'
import WorkoutPanel from '@/components/organisms/panels/WorkoutPanel.vue'

storiesOf('organisms.panels', module).add('WorkoutPanel', () => ({
  components: { WorkoutPanel },
  template: `
    <v-expansion-panels>
      <workout-panel
        :index="index"
        :workout="workout"
        :status="status"
      />
    </v-expansion-panels>
  `,
  data: () => ({
    index: 0,
    workout: {
      name: 'Leg Press',
      results: [],
      memo: '',
      startTime: null,
      endTime: null
    },
    status: 'ready'
  })
}))
