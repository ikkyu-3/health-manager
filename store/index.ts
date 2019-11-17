import Vue from 'vue'
import Vuex from 'vuex'
import workouts from './workouts'
import mutations from './mutations'
import actions from './actions'
import { RootState } from './type'
import { bottomNavigation } from '@/constants'

Vue.use(Vuex)

const store = new Vuex.Store<RootState>({
  state: { title: bottomNavigation[0].text },
  mutations,
  actions,
  modules: { workouts }
})

export const userStore = () => store
