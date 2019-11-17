import { MutationTree } from 'vuex'
import { RootState, changeTitleMutationPayload } from './type'

const mutations: MutationTree<RootState> = {
  changeTitle(state, payload: changeTitleMutationPayload) {
    state.title = payload.title
  }
}

export default mutations
