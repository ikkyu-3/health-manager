import Vuetify from 'vuetify'
import { mount, createLocalVue } from '@vue/test-utils'
import SelectButton from '@/components/molecules/button/SelectButton.vue'

const options = {
  localVue: createLocalVue(),
  vuetify: new Vuetify()
}

describe('molecules/button/SelectButtton.vue', () => {
  it('snapshot', () => {
    const wrapper = mount(SelectButton, {
      ...options,
      propsData: {
        color: 'red lighten-3',
        isActive: true,
        number: '1'
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  describe('color', () => {
    describe('isActiveがtrueの場合', () => {
      it('isActiveがtrueでcolorを指定しない場合、デフォルトのクラスが指定される', () => {
        const wrapper = mount(SelectButton, {
          ...options,
          propsData: {
            isActive: true
          }
        })
        expect(wrapper.find('button').classes()).toEqual(
          expect.arrayContaining(['red', 'lighten-3'])
        )
      })

      it('isActiveがtrueでcolorを指定した場合、指定したクラスが指定される', () => {
        const wrapper = mount(SelectButton, {
          ...options,
          propsData: {
            color: 'red',
            isActive: true
          }
        })
        expect(wrapper.find('button').classes()).toContain('red')
      })
    })

    describe('isActiveがfalseの場合', () => {
      it('colorを指定しても、"grey" "lighten-1"のclassが指定される', () => {
        const wrapper = mount(SelectButton, {
          ...options,
          propsData: {
            color: 'red',
            isActive: false
          }
        })
        expect(wrapper.find('button').classes()).toEqual(
          expect.arrayContaining(['grey', 'lighten-1'])
        )
      })
    })
  })

  describe('text', () => {
    it('isActiveがtureの場合、指定した文字が表示される', () => {
      const wrapper = mount(SelectButton, {
        ...options,
        propsData: { isActive: true, text: '1' }
      })
      expect(wrapper.find('.v-btn__content').text()).toBe('1')
    })

    it('isActiveがfalseの場合、指定した文字が表示されない', () => {
      const wrapper = mount(SelectButton, {
        ...options,
        propsData: { isActive: false, text: '1' }
      })
      expect(wrapper.find('.v-btn__content').text()).toBe('')
    })
  })

  it('clickした場合、@clickで登録した関数が実行される', () => {
    const click = jest.fn()
    const wrapper = mount(SelectButton, { ...options })

    wrapper.vm.$on('click', click)
    wrapper.trigger('click')

    expect(click.mock.calls).toHaveLength(1)
  })
})
