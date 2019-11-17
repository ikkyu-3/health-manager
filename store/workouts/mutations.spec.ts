import mutations from './mutations'

describe('store/workouts/mutations', () => {
  const {
    addWorkout,
    removeWorkout,
    clearWorkouts,
    updateWorkoutResults
  } = mutations as any

  describe('addWorkout', () => {
    it('workoutを追加する', () => {
      const state = { workouts: [] }
      const payload = { name: 'workout' }
      addWorkout(state, payload)
      expect(state.workouts).toEqual([
        {
          name: 'workout',
          results: [],
          memo: '',
          startTime: null,
          endTime: null
        }
      ])
    })
  })

  describe('removeWorkout', () => {
    it('指定したworkoutを削除する', () => {
      const state = { workouts: [{ name: 'workout1' }, { name: 'workout2' }] }
      const payload = { index: 0 }
      removeWorkout(state, payload)
      expect(state.workouts).toEqual([{ name: 'workout2' }])
    })
  })

  describe('clearWorkouts', () => {
    it('終了していないworkoutを全て削除する', () => {
      const time = new Date().toISOString()
      const workout1 = {
        name: 'workout1',
        results: [{}],
        memo: '',
        startTime: time,
        endTime: time
      }
      const workout2 = {
        name: 'workout2',
        results: [],
        memo: '',
        startTime: time,
        endTime: time
      }
      const workout3 = {
        name: 'workout3',
        results: [],
        memo: '',
        startTime: time,
        endTime: null
      }
      const workout4 = {
        name: 'workout4',
        results: [],
        memo: '',
        startTime: null,
        endTime: null
      }
      const state = { workouts: [workout1, workout2, workout3, workout4] }

      clearWorkouts(state)
      expect(state.workouts).toEqual([workout1])
    })
  })

  describe('updateWorkoutResults', () => {
    it('指定したworkoutの結果を更新する', () => {
      const time = new Date().toISOString()
      const workout1 = {
        name: 'workout1',
        results: [{}],
        memo: '',
        startTime: time,
        endTime: time
      }
      const workout2 = {
        name: 'workout2',
        results: [],
        memo: '',
        startTime: time,
        endTime: time
      }
      const workout3 = {
        name: 'workout3',
        results: [],
        memo: '',
        startTime: time,
        endTime: null
      }
      const workout4 = {
        name: 'workout4',
        results: [],
        memo: '',
        startTime: null,
        endTime: null
      }
      const state = { workouts: [workout1, workout2, workout3, workout4] }
      const payload = { index: 1, results: [{}], memo: 'hoge' }

      updateWorkoutResults(state, payload)
      expect(state.workouts).toEqual([
        workout1,
        {
          name: 'workout2',
          results: [{}],
          memo: 'hoge',
          startTime: time,
          endTime: time
        },
        workout3,
        workout4
      ])
    })
  })
})
