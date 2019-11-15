import { Module } from 'vuex'
import { RootState } from '@/store/type'
import { Workout, WeightMachineResult } from '@/types'

export type WorkoutsState = {
  workouts: Workout[]
}

const workouts: Module<WorkoutsState, RootState> = {
  namespaced: true,
  state: {
    workouts: []
  },
  getters: {
    workoutsExists: state => state.workouts.length > 0,
    workoutContexts: state =>
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
    },
    updateWorkoutResults(
      state,
      payload: { index: number; results: WeightMachineResult[]; memo: string }
    ) {
      const newWorkouts = state.workouts.map((workout, index) => {
        if (payload.index !== index) return workout
        return { ...workout, results: payload.results, memo: payload.memo }
      })
      state.workouts = newWorkouts
    }
  },
  actions: {
    addWorkout(context, payload: { name: string }) {
      context.commit('addWorkout', { name: payload.name })
    },
    removeWorkout(context, payload: { index: number }) {
      context.commit('removeWorkout', { index: payload.index })
    },
    clearWorkouts(context) {
      context.commit('clearWorkouts')
    },
    updateWorkoutResults(
      context,
      payload: { index: number; results: WeightMachineResult[]; memo: string }
    ) {
      context.commit('updateWorkoutResults', {
        index: payload.index,
        results: payload.results,
        memo: payload.memo
      })
    }
  }
}

export default workouts
