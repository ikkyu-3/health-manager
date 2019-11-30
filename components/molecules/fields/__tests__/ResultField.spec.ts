import Vuetify from 'vuetify'
import { mount, createLocalVue, Wrapper } from '@vue/test-utils'
import ResultField from '@/components/molecules/inputs/ResultField.vue'

const options = {
  localVue: createLocalVue(),
  vuetify: new Vuetify()
}

describe('molecules/fields/ResultField.vue', () => {
  let wrapper: Wrapper<ResultField>
  const reduce = jest.fn()
  const add = jest.fn()

  beforeAll(() => {
    wrapper = mount(ResultField, {
      ...options,
      propsData: { value: 100, reduce, add }
    })
  })

  it('valueに渡した値が表示される', () => {
    expect(wrapper.find('.input-value').text()).toBe('100')
  })

  it('ReduceButtonをClickすると、reduceに渡した関数が実行される', () => {
    const btn = wrapper.findAll('button').at(0)
    btn.trigger('click')
    expect(reduce).toBeCalled()
  })

  it('AddButtonをClickすると、addに渡した関数が実行される', () => {
    const btn = wrapper.findAll('button').at(1)
    btn.trigger('click')
    expect(add).toBeCalled()
  })

  describe('unit', () => {
    it('weight属性を指定した場合、"kg"が表示される', () => {
      wrapper = mount(ResultField, {
        ...options,
        propsData: { value: 100, weight: true, reduce, add }
      })
      expect(wrapper.find('.input-value').text()).toBe('100kg')
    })

    it('times属性を指定した場合、"回"が表示される', () => {
      wrapper = mount(ResultField, {
        ...options,
        propsData: { value: 10, times: true, reduce, add }
      })
      expect(wrapper.find('.input-value').text()).toBe('10回')
    })

    it('set属性を指定した場合、"セット"が表示される', () => {
      wrapper = mount(ResultField, {
        ...options,
        propsData: { value: 3, set: true, reduce, add }
      })
      expect(wrapper.find('.input-value').text()).toBe('3セット')
    })
  })
})
