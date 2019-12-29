import Vuex from 'vuex'
import Vuetify from 'vuetify'
import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import BottomNavigation from '@/components/organisms/global/TheBottomNavigation.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

const options = {
  localVue,
  vuetify: new Vuetify(),
  stubs: {
    NuxtLink: RouterLinkStub
  }
}

const actions = { changeTitle: jest.fn() }
jest.mock('@/store', () => ({
  userStore: () => new Vuex.Store({ state: {}, actions })
}))

describe('organisms/BottomNavigation.vue', () => {
  beforeEach(() => {
    actions.changeTitle.mockClear()
  })

  it('"Workouts"をクリックすると、"changeTitle"アクションが呼ばれる', () => {
    const wrapper = mount(BottomNavigation, { ...options })
    const button = wrapper.find('a[value="workouts"]')
    button.trigger('click')
    expect(actions.changeTitle.mock.calls[0][1]).toEqual({
      title: 'Workouts'
    })
  })

  it('"Schedule"をクリックすると、"changeTitle"アクションが呼ばれる', () => {
    const wrapper = mount(BottomNavigation, { ...options })
    const button = wrapper.find('a[value="schedule"]')
    button.trigger('click')
    expect(actions.changeTitle.mock.calls[0][1]).toEqual({
      title: 'Schedule'
    })
  })

  it('"Workouts Data"をクリックすると、"changeTitle"アクションが呼ばれる', () => {
    const wrapper = mount(BottomNavigation, { ...options })
    const button = wrapper.find('a[value="workouts-data"]')
    button.trigger('click')
    expect(actions.changeTitle.mock.calls[0][1]).toEqual({
      title: 'Workouts Data'
    })
  })

  it('"Health Planet"をクリックすると、"changeTitle"アクションが呼ばれる', () => {
    const wrapper = mount(BottomNavigation, { ...options })
    const button = wrapper.find('a[value="health-planet"]')
    button.trigger('click')
    expect(actions.changeTitle.mock.calls[0][1]).toEqual({
      title: 'Health Planet'
    })
  })
})
