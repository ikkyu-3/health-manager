import { MutationTree } from 'vuex'
import {
  WorkoutsState,
  AddWorkoutMutationPayload,
  RemoveWorkoutMutationPayload,
  UpdateWorkoutMutationResults
} from './type'

const mutations: MutationTree<WorkoutsState> = {
  addWorkout(state, payload: AddWorkoutMutationPayload) {
    const newWorkouts = state.workouts.slice(0, state.workouts.length)
    newWorkouts.push({
      name: payload.name,
      results: [],
      memo: '',
      startTime: null,
      endTime: null
    })
    state.workouts = newWorkouts
  },
  removeWorkout(state, payload: RemoveWorkoutMutationPayload) {
    const newWorkouts = state.workouts.filter(
      (_, index) => index !== payload.index
    )
    state.workouts = newWorkouts
  },
  clearWorkouts(state) {
    const newWorkouts = state.workouts.filter(
      ({ results, startTime, endTime }) =>
        results.length > 0 && startTime && endTime
    )
    state.workouts = newWorkouts
  },
  updateWorkoutResults(state, payload: UpdateWorkoutMutationResults) {
    const newWorkouts = state.workouts.map((workout, index) => {
      if (payload.index !== index) return workout
      return { ...workout, results: payload.results, memo: payload.memo }
    })
    state.workouts = newWorkouts
  }
}

export default mutations
