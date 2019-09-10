import Vuetify from 'vuetify'
import { mount, createLocalVue } from '@vue/test-utils'
import BottomNavigation from '@/components/organisms/BottomNavigation.vue'

const localVue = createLocalVue()

describe('organisms/BottomNavigation.vue', () => {
  let vuetify: typeof Vuetify

  it('snapshot', () => {
    const wrapper = mount(BottomNavigation, { localVue, vuetify })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
