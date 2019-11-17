import { ActionTree } from 'vuex'
import { RootState, changeTitleActionPayload } from './type'

const actions: ActionTree<RootState, RootState> = {
  changeTitle(context, payload: changeTitleActionPayload) {
    context.commit('changeTitle', { title: payload.title })
  }
}

export default actions
