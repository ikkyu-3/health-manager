import Vuetify from 'vuetify'
import { mount, createLocalVue } from '@vue/test-utils'
import NavigationButton from '@/components/molecules/button/NavigationButton.vue'

const localVue = createLocalVue()

describe('molecules/button/NavigationButton.vue', () => {
  let vuetify: typeof Vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  it('snapshot', () => {
    const wrapper = mount(NavigationButton, {
      localVue,
      vuetify,
      propsData: {
        value: 'workouts',
        text: 'Workouts',
        icon: 'fa-dumbbell'
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
