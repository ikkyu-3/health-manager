import Vuetify from 'vuetify'
import { mount, createLocalVue } from '@vue/test-utils'
import SelectIcon from '@/components/molecules/icon/SelectIcon.vue'

const options = {
  localVue: createLocalVue(),
  vuetify: new Vuetify()
}

describe('molecules/icon/SelectIcon.vue', () => {
  it('textが空文字の場合、何も表示されないアイコンが表示される', () => {
    const wrapper = mount(SelectIcon, {
      ...options,
      propsData: { text: '' }
    })
    expect(wrapper.find('div').classes()).not.toEqual(
      expect.arrayContaining(['active'])
    )
    expect(wrapper.find('div').text()).toBe('')
  })

  it('textが文字列の場合、textの文字がアイコンに表示される', () => {
    const wrapper = mount(SelectIcon, {
      ...options,
      propsData: { text: '1' }
    })
    expect(wrapper.find('div').classes()).toEqual(
      expect.arrayContaining(['active'])
    )
    expect(wrapper.find('div').text()).toBe('1')
  })
})
