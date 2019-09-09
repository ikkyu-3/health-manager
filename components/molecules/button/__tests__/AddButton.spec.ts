import Vuetify from 'vuetify'
import { mount, createLocalVue } from '@vue/test-utils'
import AddButton from '@/components/molecules/button/AddButton.vue'

const localVue = createLocalVue()

describe('molecules/button/AddButton.vue', () => {
  let vuetify: typeof Vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  it('snapshot', () => {
    const wrapper = mount(AddButton, {
      localVue,
      vuetify
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('colorを指定しない場合、デフォルトの色が指定される', () => {
    const wrapper = mount(AddButton, {
      localVue,
      vuetify
    })
    expect(wrapper.find('button').classes()).toContain('teal')
  })

  it('colorに色を指定した場合、その指定した色が指定される', () => {
    const color = 'red'
    const wrapper = mount(AddButton, {
      localVue,
      vuetify,
      propsData: { color }
    })
    expect(wrapper.find('button').classes()).toContain('red')
  })

  it('clickした場合、@clickで登録した関数が実行される', () => {
    const click = jest.fn()
    const wrapper = mount(AddButton, {
      localVue,
      vuetify
    })
    wrapper.vm.$on('click', click)
    wrapper.trigger('click')

    expect(click.mock.calls).toHaveLength(1)
  })
})
