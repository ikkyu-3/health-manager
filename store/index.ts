import Vue from 'vue'
import Vuex, { ActionContext } from 'vuex'
import workouts from './workouts'
import { bottomNavigation } from '@/constants'

Vue.use(Vuex)

export type RootState = {
  title: string
}

const store = new Vuex.Store<RootState>({
  state: {
    title: bottomNavigation[0].text
  },
  mutations: {
    changeTitle(state: RootState, payload: any) {
      state.title = payload.title
    }
  },
  actions: {
    changeTitle(context: ActionContext<RootState, any>, payload: { title: 1 }) {
      context.commit('changeTitle', { title: payload.title })
    }
  },
  modules: { workouts }
})

export const userStore = () => store
