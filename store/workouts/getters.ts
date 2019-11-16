import { GetterTree } from 'vuex'
import { RootState } from '../type'
import { WorkoutsState } from './type'

const getters: GetterTree<WorkoutsState, RootState> = {
  workoutsExists: state => state.workouts.length > 0,
  workoutContexts: state =>
    state.workouts.map(({ name, startTime, endTime, results }, index) => {
      return {
        index: String(index + 1),
        name,
        isExited: startTime != null && endTime != null && results.length > 0
      }
    })
}

export default getters
