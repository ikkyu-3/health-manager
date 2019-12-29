import Vuex from 'vuex'
import Vuetify from 'vuetify'
import { mount, createLocalVue } from '@vue/test-utils'
import Toolbar from '@/components/organisms/global/TheToolbar.vue'
import { userStore } from '@/store'

const localVue = createLocalVue()
localVue.use(Vuex)

const store = userStore()

const options = {
  store,
  localVue,
  vuetify: new Vuetify()
}

describe('organisms/Toolbar.vue', () => {
  it('titleが表示される', () => {
    store.state.title = 'Test'
    const wrapper = mount(Toolbar, { ...options })
    expect(wrapper.find('.v-toolbar__title').text()).toBe('Test')
  })
})
