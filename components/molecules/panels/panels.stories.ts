import { storiesOf } from '@storybook/vue'
import WorkoutPanelHeader from './WorkoutPanelHeader.vue'
// import WorkoutPanelContent from './WorkoutPanelContent.vue'

storiesOf('molecules.panels.WorkoutPanel', module).add('Header', () => ({
  components: { WorkoutPanelHeader },
  template: `
      <v-expansion-panels readonly focusable>
        <v-expansion-panel disabled><workout-panel-header header="Pending" status="pending"/></v-expansion-panel>
        <v-expansion-panel><workout-panel-header header="Ready" status="ready"/></v-expansion-panel>
        <v-expansion-panel><workout-panel-header header="Running" status="running"/></v-expansion-panel>
        <v-expansion-panel><workout-panel-header header="Exited" status="exited"/></v-expansion-panel>
      </v-expansion-panels>
    `
}))

// storiesOf('Molecules.Panel.WorkoutPanel', module).add(
//   'LegPressContent',
//   () => ({
//     components: { WorkoutPanelHeader, WorkoutPanelContent },
//     template: `
//       <v-expansion-panels readonly focusable>
//         <v-expansion-panel>
//           <workout-panel-header header="Pending" status="pending" />
//           <workout-panel-content :workout="workout" />
//         </v-expansion-panel>
//       </v-expansion-panels>
//     `,
//     data: () => ({
//       workout: {
//         name: 'Leg Press',
//         results: [],
//         memo: '',
//         startTime: null,
//         endTime: null
//       }
//     })
//   })
// )
