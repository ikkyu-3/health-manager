import { Module, ActionContext } from 'vuex'
import { RootState } from './type'
import { Workout } from '@/types'

type State = {
  workouts: Workout[]
}

const workouts: Module<State, RootState> = {
  state: {
    workouts: []
  },
  getters: {
    workoutContext: (state: State) =>
      state.workouts.map(({ name, startTime, endTime, results }) => {
        return {
          name,
          isExited: startTime && endTime && results.length > 0
        }
      })
  },
  mutations: {
    addWorkout(state, payload: { name: string }) {
      state.workouts.push({
        name: payload.name,
        results: [],
        memo: '',
        startTime: null,
        endTime: null
      })
    },
    removeWorkout(state, payload: { index: number }) {
      state.workouts.splice(payload.index, 1)
    }
  },
  actions: {
    addWorkout(context: ActionContext<State, any>, payload: { name: string }) {
      context.commit('addWorkout', { name: payload.name })
    },
    removeWorkout(
      context: ActionContext<State, any>,
      payload: { index: number }
    ) {
      context.commit('addWorkout', {
        index: payload.index
      })
    }
  }
}

export default workouts
