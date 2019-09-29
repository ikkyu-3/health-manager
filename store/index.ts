import Vue from 'vue'
import Vuex, { ActionContext } from 'vuex'
import { bottomNavigation } from '@/constants'

Vue.use(Vuex)

export type State = {
  title: string
}

const store = new Vuex.Store<State>({
  state: {
    title: bottomNavigation[0].text
  },
  mutations: {
    changeTitle(state: State, payload: any) {
      state.title = payload.title
    }
  },
  actions: {
    changeTitle(context: ActionContext<State, any>, payload: any) {
      context.commit('changeTitle', { title: payload.title })
    }
  }
})

export const userStore = () => store
