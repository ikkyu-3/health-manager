import Vuetify from 'vuetify'
import { mount, createLocalVue } from '@vue/test-utils'
import WorkoutListItem from '@/components/molecules/list-items/WorkoutListItem.vue'

const options = {
  localVue: createLocalVue(),
  vuetify: new Vuetify()
}

describe('molecules/list-items/WorkoutListItem.vue', () => {
  const selected = mount(WorkoutListItem, {
    ...options,
    propsData: { name: 'Test', index: '1', disabled: false }
  })

  const notSelected = mount(WorkoutListItem, {
    ...options,
    propsData: { name: 'Test', index: '', disabled: false }
  })

  const disabled = mount(WorkoutListItem, {
    ...options,
    propsData: { name: 'Test', index: '1', disabled: true }
  })

  describe('name', () => {
    it('nameで指定した文字列が表示される', () => {
      expect(selected.find('.v-list-item__title').text()).toBe('Test')
    })
  })

  describe('index', () => {
    it('indexを指定した場合、アクティブなアイコンが表示される', () => {
      expect(selected.find('.icon').classes()).toEqual(
        expect.arrayContaining(['active'])
      )
    })

    it('indexを指定しない場合、アクティブでないアイコンが表示される', () => {
      expect(notSelected.find('.icon').classes()).not.toEqual(
        expect.arrayContaining(['active'])
      )
    })
  })

  describe('click', () => {
    it('clickすると、clickイベントが発火する', () => {
      const click = jest.fn()
      selected.vm.$on('click', click)
      selected.trigger('click')
      expect(click).toBeCalled()
    })
  })

  describe('disabledを指定', () => {
    it('disabledクラスをもつ', () => {
      expect(disabled.classes()).toContain('disabled')
    })

    it('clickイベントは発火しない', () => {
      const click = jest.fn()
      disabled.vm.$on('click', click)
      disabled.trigger('click')
      expect(click).not.toBeCalled()
    })
  })
})
