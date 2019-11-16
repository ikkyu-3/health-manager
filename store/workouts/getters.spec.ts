import getters from './getters'

describe('store/workouts/getters', () => {
  const { workoutsExists, workoutContexts } = getters as any

  describe('workoutsExists', () => {
    it('workoutsが空でない場合、trueを返す', () => {
      const state = {
        workouts: [
          { name: 'workout1', startTime: null, endTime: null, results: [] }
        ]
      }
      expect(workoutsExists(state)).toBeTruthy()
    })

    it('workoutsが空の場合、falseを返す', () => {
      const state = {
        workouts: []
      }
      expect(workoutsExists(state)).toBeFalsy()
    })
  })

  describe('workoutContexts', () => {
    const time = new Date().toISOString()

    it('workoutsが空でない場合、workoutのコンテキストを取得する', () => {
      const state = {
        workouts: [
          { name: 'workout1', startTime: time, endTime: time, results: [{}] },
          { name: 'workout2', startTime: time, endTime: null, results: [] },
          { name: 'workout3', startTime: null, endTime: null, results: [] }
        ]
      }
      expect(workoutContexts(state)).toEqual([
        { index: '1', name: 'workout1', isExited: true },
        { index: '2', name: 'workout2', isExited: false },
        { index: '3', name: 'workout3', isExited: false }
      ])
    })

    it('workoutsが空の場合、空の配列を取得する', () => {
      const state = { workouts: [] }
      expect(workoutContexts(state)).toEqual([])
    })

    describe('isExited', () => {
      it('startTime, endTimeがnullでなく、resultsが空でない場合、isExitedはtrueとなる', () => {
        const state = {
          workouts: [
            { name: 'workout1', startTime: time, endTime: time, results: [{}] }
          ]
        }
        expect(workoutContexts(state)[0].isExited).toBeTruthy()
      })

      it('startTimeがnullの場合、isExitedはfalseとなる', () => {
        const state = {
          workouts: [
            { name: 'workout1', startTime: null, endTime: time, results: [{}] }
          ]
        }
        expect(workoutContexts(state)[0].isExited).toBeFalsy()
      })

      it('endTimeがnullの場合、isExitedはfalseとなる', () => {
        const state = {
          workouts: [
            { name: 'workout1', startTime: time, endTime: null, results: [{}] }
          ]
        }
        expect(workoutContexts(state)[0].isExited).toBeFalsy()
      })

      it('resultsが空の場合、isExitedはfalseとなる', () => {
        const state = {
          workouts: [
            { name: 'workout1', startTime: time, endTime: time, results: [] }
          ]
        }
        expect(workoutContexts(state)[0].isExited).toBeFalsy()
      })

      it('startTime, endTimeがnullの場合、isExitedはfalseとなる', () => {
        const state = {
          workouts: [
            { name: 'workout1', startTime: null, endTime: null, results: [{}] }
          ]
        }
        expect(workoutContexts(state)[0].isExited).toBeFalsy()
      })

      it('startTimeがnull、resultsが空の場合、isExitedはfalseとなる', () => {
        const state = {
          workouts: [
            { name: 'workout1', startTime: null, endTime: time, results: [] }
          ]
        }
        expect(workoutContexts(state)[0].isExited).toBeFalsy()
      })

      it('endTimeがnull、resultsが空の場合、isExitedはfalseとなる', () => {
        const state = {
          workouts: [
            { name: 'workout1', startTime: time, endTime: null, results: [] }
          ]
        }
        expect(workoutContexts(state)[0].isExited).toBeFalsy()
      })

      it('startTime, endTimeがnull、resultsが空の場合、isExitedはfalseとなる', () => {
        const state = {
          workouts: [
            { name: 'workout1', startTime: null, endTime: null, results: [] }
          ]
        }
        expect(workoutContexts(state)[0].isExited).toBeFalsy()
      })
    })
  })
})
