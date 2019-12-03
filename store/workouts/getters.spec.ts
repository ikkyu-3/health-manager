import getters from './getters'

jest.spyOn(console, 'warn').mockImplementation(() => {})

describe('store/workouts/getters', () => {
  const {
    workoutsExists,
    workoutContexts,
    nextWorkout,
    getStatus
  } = getters as any
  const time = '2019-01-01T00:00:00.000Z'

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

  describe('nextWorkout', () => {
    it('次のworkoutを取得する', () => {
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
        startTime: null,
        endTime: null
      }
      const state = { workouts: [workout1, workout2] }

      expect(nextWorkout(state)).toEqual(workout2)
    })

    it('workoutsが空の場合、nullを取得する', () => {
      const state = { workouts: [] }

      expect(nextWorkout(state)).toBeNull()
    })

    it('workoutsが全て終了している場合、nullを取得する', () => {
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
      const state = { workouts: [workout1, workout2] }

      expect(nextWorkout(state)).toBeNull()
    })
  })

  describe('getStatus', () => {
    describe('indexで指定したworkoutがある場合', () => {
      it('終了したworkoutを指定した場合、"exited"を取得する', () => {
        const workout1 = {
          name: 'workout1',
          results: [{}],
          memo: '',
          startTime: time,
          endTime: time
        }
        const state = { workouts: [workout1] }
        expect(getStatus(state)(0, 'workout1')).toBe('exited')
      })

      it('startTimeがあるworkoutを指定した場合、"running"を取得する', () => {
        const workout1 = {
          name: 'workout1',
          results: [{}],
          memo: '',
          startTime: time,
          endTime: null
        }
        const state = { workouts: [workout1] }
        expect(getStatus(state)(0, 'workout1')).toBe('running')
      })

      it('startTimeがなく、指定したworkoutの名前とnextWorkoutNameが同じ場合、"ready"を取得する', () => {
        const workout1 = {
          name: 'workout1',
          results: [],
          memo: '',
          startTime: null,
          endTime: null
        }
        const state = { workouts: [workout1] }
        expect(getStatus(state)(0, 'workout1')).toBe('ready')
      })

      it('startTimeがなく、指定したworkoutの名前とnextWorkoutNameが同じでない場合、"pending"を取得する', () => {
        const workout1 = {
          name: 'workout1',
          results: [],
          memo: '',
          startTime: null,
          endTime: null
        }
        const state = { workouts: [workout1] }
        expect(getStatus(state)(0, 'workout2')).toBe('pending')
      })
    })

    describe('indexで指定したworkoutがない場合', () => {
      it('""を取得する', () => {
        const workout1 = {
          name: 'workout1',
          results: [],
          memo: '',
          startTime: null,
          endTime: null
        }
        const state = { workouts: [workout1] }
        expect(getStatus(state)(0, 'workout2')).toBe('pending')
      })
    })
  })
})
