import { ActionTree } from 'vuex'
import { RootState } from '../type'
import {
  WorkoutsState,
  AddWorkoutActionPayload,
  RemoveWorkoutActionPayload,
  UpdateWorkoutResultsActionPayload
} from './type'

const actions: ActionTree<WorkoutsState, RootState> = {
  addWorkout(context, payload: AddWorkoutActionPayload) {
    context.commit('addWorkout', { name: payload.name })
  },
  removeWorkout(context, payload: RemoveWorkoutActionPayload) {
    context.commit('removeWorkout', { index: payload.index })
  },
  clearWorkouts(context) {
    context.commit('clearWorkouts')
  },
  updateWorkoutResults(context, payload: UpdateWorkoutResultsActionPayload) {
    context.commit('updateWorkoutResults', {
      index: payload.index,
      results: payload.results,
      memo: payload.memo
    })
  }
}

export default actions
