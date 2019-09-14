import Vuetify from 'vuetify'
import { mount, createLocalVue } from '@vue/test-utils'
import NavigationButton from '@/components/molecules/button/NavigationButton.vue'

const options = {
  localVue: createLocalVue(),
  vuetify: new Vuetify()
}

describe('molecules/button/NavigationButton.vue', () => {
  it('snapshot', () => {
    const wrapper = mount(NavigationButton, {
      ...options,
      propsData: {
        value: 'workouts',
        text: 'Workouts',
        icon: 'fa-dumbbell'
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
