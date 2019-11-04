import Vuetify from 'vuetify'
import { mount, createLocalVue, Wrapper } from '@vue/test-utils'
import WeightInput from '@/components/molecules/input/WeightInput.vue'

const options = {
  localVue: createLocalVue(),
  vuetify: new Vuetify()
}

describe('molecules/input/WeightInput.vue', () => {
  let wrapper: Wrapper<WeightInput>
  const remove = jest.fn()
  const add = jest.fn()

  beforeAll(() => {
    wrapper = mount(WeightInput, {
      ...options,
      propsData: { weight: 100, remove, add }
    })
  })

  it('weightに渡した値が表示される', () => {
    expect(wrapper.find('.input-value').text()).toBe('100kg')
  })

  it('RemoveButtonをClickすると、removeに渡した関数が実行される', () => {
    const btn = wrapper.findAll('button').at(0)
    btn.trigger('click')
    expect(remove).toBeCalled()
  })

  it('AddButtonをClickすると、addに渡した関数が実行される', () => {
    const btn = wrapper.findAll('button').at(1)
    btn.trigger('click')
    expect(add).toBeCalled()
  })
})
