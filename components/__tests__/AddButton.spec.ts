import { mount } from '@vue/test-utils'
import AddButton from '@/components/molecules/AddButton.vue'

describe('Molecules/AddButton.vue', () => {
  it('snapshot', () => {
    const wrapper = mount(AddButton, {
      propsData: {
        color: undefined
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
