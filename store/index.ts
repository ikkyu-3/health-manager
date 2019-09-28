import { ActionContext } from 'vuex'
import { bottomNavigation } from '@/constants'

export type State = {
  title: string
}

export const state = () => ({
  title: bottomNavigation[0].text
})

export const mutations = {
  changeTitle(state: State, payload: any) {
    state.title = payload.title
  }
}

export const actions = {
  changeTitle(context: ActionContext<State, any>, payload: any) {
    context.commit('changeTitle', { title: payload.title })
  }
}
