import { Module } from 'vuex'
import { WorkoutsState } from './type'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import { RootState } from '@/store/type'

const workouts: Module<WorkoutsState, RootState> = {
  namespaced: true,
  state: { workouts: [] },
  getters,
  mutations,
  actions
}

export default workouts
