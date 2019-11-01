import Vuetify from 'vuetify'
import { mount, createLocalVue } from '@vue/test-utils'
import RemoveButton from '@/components/molecules/button/RemoveButton.vue'

const options = {
  localVue: createLocalVue(),
  vuetify: new Vuetify()
}

describe('molecules/button/RemoveButton.vue', () => {
  it('colorを指定しない場合、デフォルトの色が指定される', () => {
    const wrapper = mount(RemoveButton, { ...options })
    expect(wrapper.find('button').classes()).toContain('grey')
  })

  it('colorに色を指定した場合、その指定した色が指定される', () => {
    const color = 'red'
    const wrapper = mount(RemoveButton, { ...options, propsData: { color } })
    expect(wrapper.find('button').classes()).toContain('red')
  })

  it('clickした場合、@clickで渡した関数が実行される', () => {
    const click = jest.fn()
    const wrapper = mount(RemoveButton, { ...options })

    wrapper.vm.$on('click', click)
    wrapper.trigger('click')

    expect(click.mock.calls).toHaveLength(1)
  })
})
