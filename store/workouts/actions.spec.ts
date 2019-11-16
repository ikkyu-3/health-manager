import actions from './actions'

describe('store/workouts/actions', () => {
  const commit = jest.fn()
  const mockContext = { commit }
  const {
    addWorkout,
    removeWorkout,
    clearWorkouts,
    updateWorkoutResults
  } = actions as any

  afterEach(() => {
    commit.mockClear()
  })

  describe('addWorkout', () => {
    it('commitが呼ばれる', () => {
      addWorkout(mockContext, { name: 'name' })

      expect(commit).toHaveBeenCalled()
      expect(commit.mock.calls[0][0]).toBe('addWorkout')
      expect(commit.mock.calls[0][1]).toEqual({ name: 'name' })
    })
  })

  describe('removeWorkout', () => {
    it('commitが呼ばれる', () => {
      removeWorkout(mockContext, { index: 0 })

      expect(commit).toHaveBeenCalled()
      expect(commit.mock.calls[0][0]).toBe('removeWorkout')
      expect(commit.mock.calls[0][1]).toEqual({ index: 0 })
    })
  })

  describe('clearWorkouts', () => {
    it('commitが呼ばれる', () => {
      clearWorkouts(mockContext)

      expect(commit).toHaveBeenCalled()
      expect(commit.mock.calls[0][0]).toBe('clearWorkouts')
    })
  })

  describe('updateWorkoutResults', () => {
    it('commitが呼ばれる', () => {
      updateWorkoutResults(mockContext, { index: 0, results: [], memo: '' })

      expect(commit).toHaveBeenCalled()
      expect(commit.mock.calls[0][0]).toBe('updateWorkoutResults')
      expect(commit.mock.calls[0][1]).toEqual({
        index: 0,
        results: [],
        memo: ''
      })
    })
  })
})
