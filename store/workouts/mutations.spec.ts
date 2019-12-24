import mutations from './mutations'

describe('store/workouts/mutations', () => {
  const {
    addWorkout,
    removeWorkout,
    clearWorkouts,
    updateResults,
    updateStartTime,
    updateEndTime,
    setWorkouts
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

  describe('updateResults', () => {
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

      updateResults(state, payload)
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

  describe('updateStartTime', () => {
    it('指定したworkoutのstartTimeを更新する', () => {
      const time = '2019-01-01T00:00:00.000Z'
      const workout1 = {
        name: 'workout1',
        results: [],
        memo: '',
        startTime: null,
        endTime: null
      }
      const state = { workouts: [workout1] }

      updateStartTime(state, { index: 0, time })
      expect(state.workouts[0]).toEqual({
        name: 'workout1',
        results: [],
        memo: '',
        startTime: time,
        endTime: null
      })
    })
  })

  describe('updateEndTime', () => {
    it('指定したworkoutのendTimeを更新する', () => {
      const time = '2019-01-01T00:00:00.000Z'
      const workout1 = {
        name: 'workout1',
        results: [],
        memo: '',
        startTime: null,
        endTime: null
      }
      const state = { workouts: [workout1] }

      updateEndTime(state, { index: 0, time })
      expect(state.workouts[0]).toEqual({
        name: 'workout1',
        results: [],
        memo: '',
        startTime: null,
        endTime: time
      })
    })
  })

  describe('setWorkouts', () => {
    it('workoutsをセットする', () => {
      const workout = {
        name: 'workout',
        results: [],
        memo: '',
        startTime: null,
        endTime: null
      }
      const state = { workouts: [workout] }

      setWorkouts(state, { workouts: [] })
      expect(state.workouts).toEqual([])
    })
  })
})
