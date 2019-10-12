import { ActionContext } from 'vuex/types/index'
import { Workout } from '@/types'

type State = {
  workouts: Workout[]
}

const workouts = {
  state: {
    workouts: []
  },
  getters: {
    workoutsCount: (state: State) => state.workouts.length
  },
  mutations: {
    addWorkout(state: State, payload: any) {
      state.workouts.push({
        workout: payload.workout,
        results: [],
        memo: '',
        startTime: '',
        endTime: ''
      })
    },
    removeWorkout(state: State, payload: any) {
      state.workouts.splice(payload.index, 1)
    }
  },
  actions: {
    addWorkout(context: ActionContext<State, any>, payload: any) {
      context.commit('addWorkout', { workout: payload.workout })
    },
    removeWorkout(context: ActionContext<State, any>, payload: any) {
      context.commit('addWorkout', {
        index: payload.index,
        workout: payload.workout
      })
    }
  }
}

export default workouts
