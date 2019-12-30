import Vuetify from 'vuetify'
import { mount, createLocalVue, Wrapper } from '@vue/test-utils'
import ResultField from '@/components/molecules/fields/ResultField.vue'

const options = {
  localVue: createLocalVue(),
  vuetify: new Vuetify()
}

describe('molecules/fields/ResultField.vue', () => {
  let wrapper: Wrapper<ResultField>
  const add = jest.fn()
  const remove = jest.fn()

  beforeAll(() => {
    wrapper = mount(ResultField, {
      ...options,
      propsData: { value: 100, add, remove }
    })
  })

  it('valueに渡した値が表示される', () => {
    expect(wrapper.find('.input-value').text()).toBe('100')
  })

  it('Minus ButtonをClickすると、removeに渡した関数が実行される', () => {
    const btn = wrapper.findAll('button').at(0)
    btn.trigger('click')
    expect(remove).toBeCalled()
  })

  it('Plus ButtonをClickすると、addに渡した関数が実行される', () => {
    const btn = wrapper.findAll('button').at(1)
    btn.trigger('click')
    expect(add).toBeCalled()
  })

  describe('unit', () => {
    it('weight属性を指定した場合、"kg"が表示される', () => {
      const value = 100
      wrapper = mount(ResultField, {
        ...options,
        propsData: { value, weight: true, add, remove }
      })
      expect(wrapper.find('.input-value').text()).toBe(`${value}kg`)
    })

    it('times属性を指定した場合、"回"が表示される', () => {
      const value = 10
      wrapper = mount(ResultField, {
        ...options,
        propsData: { value: 10, times: true, add, remove }
      })
      expect(wrapper.find('.input-value').text()).toBe(`${value}回`)
    })

    it('set属性を指定した場合、"セット"が表示される', () => {
      const value = 3
      wrapper = mount(ResultField, {
        ...options,
        propsData: { value: 3, set: true, add, remove }
      })
      expect(wrapper.find('.input-value').text()).toBe(`${value}セット`)
    })
  })
})
