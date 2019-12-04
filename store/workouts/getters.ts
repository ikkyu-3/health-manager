import { GetterTree } from 'vuex'
import { RootState } from '../type'
import { WorkoutsState } from './type'
import { Workout, WorkoutStatus } from '@/types'

const getters: GetterTree<WorkoutsState, RootState> = {
  workouts: state => state.workouts,
  workoutsExists: state => state.workouts.length > 0,
  workoutContexts: state =>
    state.workouts.map(({ name, startTime, endTime, results }, index) => {
      return {
        index: String(index + 1),
        name,
        isExited: startTime != null && endTime != null && results.length > 0
      }
    }),
  nextWorkout: state => {
    const filteredWorkouts = state.workouts.filter(
      workout => !workout.startTime && !workout.endTime
    )

    if (filteredWorkouts.length === 0) return null

    return filteredWorkouts[0]
  },
  workoutStatus: state => (
    index: number,
    nextWorkoutName: string
  ): WorkoutStatus | '' => {
    const workout = state.workouts[index] as Workout | undefined

    if (!workout) {
      console.warn('index is invalid: ', index, ' workouts: ', state.workouts) // eslint-disable-line no-console
      return ''
    }

    if (workout.startTime) {
      if (workout.endTime) return 'exited'

      return 'running'
    } else {
      if (workout.name === nextWorkoutName) return 'ready'

      return 'pending'
    }
  }
}

export default getters
