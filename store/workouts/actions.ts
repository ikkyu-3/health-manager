import { ActionTree } from 'vuex'
import { RootState } from '../type'
import {
  WorkoutsState,
  AddWorkoutActionPayload,
  RemoveWorkoutActionPayload,
  UpdateResultsActionPayload,
  UpdateTimeActionPayload
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
  updateResults(context, payload: UpdateResultsActionPayload) {
    context.commit('updateResults', {
      index: payload.index,
      results: payload.results,
      memo: payload.memo
    })
  },
  updateStartTime(context, payload: UpdateTimeActionPayload) {
    context.commit('updateStartTime', {
      index: payload.index,
      time: payload.time
    })
  },
  updateEndTime(context, payload: UpdateTimeActionPayload) {
    context.commit('updateEndTime', {
      index: payload.index,
      time: payload.time
    })
  }
}

export default actions
