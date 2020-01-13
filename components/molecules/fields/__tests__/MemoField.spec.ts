import Vuetify from 'vuetify'
import { mount, createLocalVue, Wrapper } from '@vue/test-utils'
import MemoField from '@/components/molecules/fields/MemoField.vue'

const options = {
  localVue: createLocalVue(),
  vuetify: new Vuetify()
}

describe('molecules/fields/MemoField.vue', () => {
  let wrapper: Wrapper<any>

  beforeAll(() => {
    wrapper = mount(MemoField, {
      ...options,
      propsData: { value: '' }
    })
  })

  it('textareaに文字を入力すると、state.memoの値に反映される', () => {
    const textarea = wrapper.find('textarea')
    ;(textarea.element as any).value = 'abc'
    textarea.trigger('input')
    expect(wrapper.vm.$data.state.memo).toBe('abc')
  })
})
