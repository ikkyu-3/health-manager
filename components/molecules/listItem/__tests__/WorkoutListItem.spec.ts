import Vuetify from 'vuetify'
import { mount, createLocalVue } from '@vue/test-utils'
import WorkoutListItem from '@/components/molecules/listItem/WorkoutListItem.vue'

const options = {
  localVue: createLocalVue(),
  vuetify: new Vuetify()
}

describe('molecules/listItem/WorkoutListItem.vue', () => {
  it('snapshot', () => {
    const wrapper = mount(WorkoutListItem, {
      ...options,
      propsData: { name: 'Test', index: '1' }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('nameで指定した文字列が表示される', () => {
    const wrapper = mount(WorkoutListItem, {
      ...options,
      propsData: { name: 'Test', index: '1' }
    })
    expect(wrapper.find('.v-list-item__title').text()).toBe('Test')
  })

  it('indexを指定した場合、アクティブなアイコンが表示される', () => {
    const wrapper = mount(WorkoutListItem, {
      ...options,
      propsData: { name: 'Test', index: '1' }
    })
    expect(wrapper.find('.icon').classes()).toEqual(
      expect.arrayContaining(['active'])
    )
  })

  it('indexを指定しない場合、アクティブでないアイコンが表示される', () => {
    const wrapper = mount(WorkoutListItem, {
      ...options,
      propsData: { name: 'Test', index: '' }
    })
    expect(wrapper.find('.icon').classes()).not.toEqual(
      expect.arrayContaining(['active'])
    )
  })
})
