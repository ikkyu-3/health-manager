import Vuetify from 'vuetify'
import { mount, createLocalVue } from '@vue/test-utils'
import WorkoutListItem from '@/components/molecules/listItem/WorkoutListItem.vue'

const options = {
  localVue: createLocalVue(),
  vuetify: new Vuetify()
}

describe('molecules/listItem/WorkoutListItem.vue', () => {
  const selected = mount(WorkoutListItem, {
    ...options,
    propsData: { name: 'Test', index: '1' }
  })

  const notSelected = mount(WorkoutListItem, {
    ...options,
    propsData: { name: 'Test', index: '' }
  })

  const disabled = mount(WorkoutListItem, {
    ...options,
    propsData: { name: 'Test', index: '1', disabled: true }
  })

  it('snapshot', () => {
    expect(selected.html()).toMatchSnapshot()
  })

  it('nameで指定した文字列が表示される', () => {
    expect(selected.find('.v-list-item__title').text()).toBe('Test')
  })

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

  it('disabledを指定した場合、disabledクラスをもつ', () => {
    expect(disabled.classes()).toContain('disabled')
  })
})
