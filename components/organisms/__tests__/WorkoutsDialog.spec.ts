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
const { workouts } = store.state as any
const dispatch = jest.spyOn(store, 'dispatch')

describe('organisms/WorkoutsDialog.vue', () => {
  describe('未選択のWorkoutをクリック', () => {
    let listItem: Wrapper<WorkoutsDialog>

    beforeAll(() => {
      listItem = mount(WorkoutsDialog, {
        ...options
      }).find('div[role="listitem"]')
      listItem.trigger('click')
    })

    afterAll(() => {
      workouts.workouts = []
      dispatch.mockClear()
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
    let listItem: Wrapper<WorkoutsDialog>

    beforeAll(() => {
      workouts.workouts = [
        {
          name: 'Leg Press',
          results: [],
          memo: '',
          startTime: null,
          endTime: null
        }
      ]

      listItem = mount(WorkoutsDialog, {
        ...options
      }).find('div[role="listitem"]')
      listItem.trigger('click')
    })

    afterAll(() => {
      workouts.workouts = []
      dispatch.mockClear()
    })

    it('"workouts/removeWorkout"アクションが呼ばれる', () => {
      expect(dispatch.mock.calls[0]).toEqual([
        'workouts/removeWorkout',
        { index: 0 }
      ])
    })

    it('非選択表示に変更される', () => {
      const icon = listItem.find('.icon')
      expect(icon.classes()).not.toContain('active')
      expect(icon.text()).toBe('')
    })
  })

  describe('終了したWorkoutをクリック', () => {
    let listItem: Wrapper<WorkoutsDialog>

    beforeAll(() => {
      const time = new Date().toUTCString()
      workouts.workouts = [
        {
          name: 'Leg Press',
          results: [{}],
          memo: '',
          startTime: time,
          endTime: time
        }
      ]

      listItem = mount(WorkoutsDialog, {
        ...options
      }).find('div[role="listitem"]')
      listItem.trigger('click')
    })

    afterAll(() => {
      workouts.workouts = []
      dispatch.mockClear()
    })

    it('アクションは呼ばれない', () => {
      expect(dispatch).not.toHaveBeenCalled()
    })
  })

  describe('CLEARボタンをクリック', () => {
    describe('全てのWorkoutsが終了していない場合', () => {
      let wrapper: any

      beforeAll(() => {
        workouts.workouts = [
          {
            name: 'Leg Press',
            results: [],
            memo: '',
            startTime: null,
            endTime: null
          },
          {
            name: 'Leg Curl',
            results: [],
            memo: '',
            startTime: null,
            endTime: null
          }
        ]

        wrapper = mount(WorkoutsDialog, { ...options })
        const clearButton = wrapper.find('.v-toolbar__items > button')
        clearButton.trigger('click')
      })

      afterAll(() => {
        workouts.workouts = []
        dispatch.mockClear()
      })

      it('"workouts/clearWorkouts"アクションが呼ばれる', () => {
        expect(dispatch.mock.calls[0]).toEqual(['workouts/clearWorkouts'])
      })

      it('Workoutが全て非選択表示される', () => {
        const items = wrapper.findAll('div[role="listitem"] .icon')
        items.wrappers.forEach((item: any) => {
          const icon = item.find('.icon')
          expect(icon.classes()).not.toContain('active')
          expect(icon.text()).toBe('')
        })
      })
    })

    describe('一部のWorkoutsが終了している場合', () => {
      let wrapper: any

      beforeAll(() => {
        const time = new Date().toUTCString()
        workouts.workouts = [
          {
            name: 'Leg Press',
            results: [{}],
            memo: '',
            startTime: time,
            endTime: time
          },
          {
            name: 'Leg Curl',
            results: [],
            memo: '',
            startTime: null,
            endTime: null
          }
        ]

        wrapper = mount(WorkoutsDialog, { ...options })
        const clearButton = wrapper.find('.v-toolbar__items > button')
        clearButton.trigger('click')
      })

      afterAll(() => {
        workouts.workouts = []
        dispatch.mockClear()
      })

      it('"workouts/clearWorkouts"アクションが呼ばれる', () => {
        expect(dispatch.mock.calls[0]).toEqual(['workouts/clearWorkouts'])
      })

      it('終了していないWorkoutが全て非選択表示される', () => {
        const items = wrapper.findAll('div[role="listitem"] .icon')
        items.wrappers.forEach((item: any, index: number) => {
          const icon = item.find('.icon')

          if (index === 0) {
            expect(icon.classes()).toContain('active')
            expect(icon.text()).toBe('1')
          } else {
            expect(icon.classes()).not.toContain('active')
            expect(icon.text()).toBe('')
          }
        })
      })
    })

    describe('全てのWorkoutsが終了している場合', () => {
      let wrapper: any

      beforeAll(() => {
        const time = new Date().toUTCString()
        workouts.workouts = [
          {
            name: 'Leg Press',
            results: [{}],
            memo: '',
            startTime: time,
            endTime: time
          },
          {
            name: 'Leg Curl',
            results: [{}],
            memo: '',
            startTime: time,
            endTime: time
          }
        ]

        wrapper = mount(WorkoutsDialog, { ...options })
        const clearButton = wrapper.find('.v-toolbar__items > button')
        clearButton.trigger('click')
      })

      afterAll(() => {
        workouts.workouts = []
        dispatch.mockClear()
      })

      it('"workouts/clearWorkouts"アクションが呼ばれる', () => {
        expect(dispatch.mock.calls[0]).toEqual(['workouts/clearWorkouts'])
      })

      it('選択表示は変更されない', () => {
        const items = wrapper.findAll('div[role="listitem"] .icon')
        items.wrappers.forEach((item: any) => {
          const icon = item.find('.icon')
          expect(icon.classes()).toContain('active')
          expect(icon.text()).toEqual(expect.any(String))
        })
      })
    })
  })
})
