import { mount } from '@vue/test-utils'
import NavigationButton from '@/components/molecules/button/NavigationButton.vue'

describe('molecules/button/NavigationButton.vue', () => {
  it('snapshot', () => {
    const wrapper = mount(NavigationButton, {
      propsData: {
        value: 'workouts',
        text: 'Workouts',
        icon: 'fa-dumbbell'
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
