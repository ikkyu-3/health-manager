import Vuetify from 'vuetify'
import { mount, createLocalVue } from '@vue/test-utils'
import BottomNavigation from '@/components/organisms/BottomNavigation.vue'

const options = {
  localVue: createLocalVue(),
  vuetify: new Vuetify()
}

describe('organisms/BottomNavigation.vue', () => {
  it('snapshot', () => {
    const wrapper = mount(BottomNavigation, { ...options })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
