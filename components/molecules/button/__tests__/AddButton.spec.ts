import Vuetify from 'vuetify'
import { mount, createLocalVue } from '@vue/test-utils'
import AddButton from '@/components/molecules/button/AddButton.vue'

const options = {
  localVue: createLocalVue(),
  vuetify: new Vuetify()
}

describe('molecules/button/AddButton.vue', () => {
  it('snapshot', () => {
    const wrapper = mount(AddButton, { ...options })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('clickした場合、@clickで登録した関数が実行される', () => {
    const click = jest.fn()
    const wrapper = mount(AddButton, { ...options })

    wrapper.vm.$on('click', click)
    wrapper.trigger('click')

    expect(click.mock.calls).toHaveLength(1)
  })
})
