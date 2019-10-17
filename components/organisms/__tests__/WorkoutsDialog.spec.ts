import Vuex from 'vuex'
import Vuetify from 'vuetify'
import { mount, createLocalVue, Wrapper } from '@vue/test-utils'
import WorkoutsDialog from '@/components/organisms/WorkoutsDialog.vue'
import { userStore } from '@/store'

const localVue = createLocalVue()
localVue.use(Vuex)

document.body.setAttribute('data-app', 'true')

const back = jest.fn()

const options = {
  localVue,
  vuetify: new Vuetify(),
  propsData: {
    dialog: true,
    back
  }
}

const store = userStore()
const dispatch = jest.spyOn(store, 'dispatch')

describe('organisms/WOrkoutsDialog.vue', () => {
  describe('未選択のWorkoutをクリック', () => {
    let listItem: Wrapper<WorkoutsDialog>

    beforeAll(() => {
      listItem = mount(WorkoutsDialog, {
        ...options
      }).find('div[role="listitem"]')
      listItem.trigger('click')
    })

    it('"workouts/addWorkout"アクションが呼ばれる', () => {
      expect(dispatch.mock.calls[0]).toEqual([
        'workouts/addWorkout',
        { name: 'Leg Press' }
      ])
    })

    it('選択表示に変更される', () => {
      const icon = listItem.find('.icon')
      expect(icon.classes()).toContain('active')
      expect(icon.text()).toBe('1')
    })
  })

  describe('選択されたWorkoutをクリック', () => {
    it('"workouts/removeWorkout"アクションが呼ばれる', () => {})
    it('非選択表示に変更される', () => {})
  })

  describe('終了したWorkoutをクリック', () => {
    it('アクションは呼ばれない', () => {})
  })

  describe('CLEARボタンをクリック', () => {
    it('"workouts/clearWorkouts"アクションが呼ばれる', () => {})
    it('終了していないWorkoutが全て非選択表示される', () => {})
  })
})
