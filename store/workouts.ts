import { Module, ActionContext } from 'vuex'
import { RootState } from './type'
import { Workout } from '@/types'

type WorkoutsState = {
  workouts: Workout[]
}

const workouts: Module<WorkoutsState, RootState> = {
  namespaced: true,
  state: {
    workouts: []
  },
  getters: {
    workoutContexts: (state: WorkoutsState) =>
      state.workouts.map(({ name, startTime, endTime, results }, index) => {
        return {
          index: String(index + 1),
          name,
          isExited: startTime != null && endTime != null && results.length > 0
        }
      })
  },
  mutations: {
    addWorkout(state, payload: { name: string }) {
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
    removeWorkout(state, payload: { index: number }) {
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
    }
  },
  actions: {
    addWorkout(
      context: ActionContext<WorkoutsState, any>,
      payload: { name: string }
    ) {
      context.commit('addWorkout', { name: payload.name })
    },
    removeWorkout(
      context: ActionContext<WorkoutsState, any>,
      payload: { index: number }
    ) {
      context.commit('removeWorkout', { index: payload.index })
    },
    clearWorkouts(context: ActionContext<WorkoutsState, any>) {
      context.commit('clearWorkouts')
    }
  }
}

export default workouts
