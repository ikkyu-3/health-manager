import Vuetify from 'vuetify'
import { mount, createLocalVue } from '@vue/test-utils'
import WorkoutListGroup from '@/components/organisms/WorkoutListGroup.vue'

const itemClick = jest.fn()
const options = {
  localVue: createLocalVue(),
  vuetify: new Vuetify(),
  propsData: {
    subHeader: 'Sub Header',
    items: [
      {
        disabled: false,
        index: '1',
        name: 'item'
      }
    ],
    itemClick
  }
}

describe('organisms/WorkoutListGroup.vue', () => {
  it('snapshot', () => {
    const wrapper = mount(WorkoutListGroup, { ...options })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('Listをクリックすると、引数にindexとnameが渡される', () => {
    const wrapper = mount(WorkoutListGroup, { ...options })
    const item = wrapper.find('div[role="listitem"]')
    item.trigger('click')
    expect(itemClick.mock.calls[0]).toEqual(['1', 'item'])
  })
})
