import actions from './actions'

describe('store/workouts/actions', () => {
  const commit = jest.fn()
  const mockContext = { commit }
  const {
    addWorkout,
    removeWorkout,
    clearWorkouts,
    updateResults,
    updateStartTime,
    updateEndTime,
    setWorkouts
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

  describe('updateResults', () => {
    it('commitが呼ばれる', () => {
      updateResults(mockContext, { index: 0, results: [], memo: '' })

      expect(commit).toHaveBeenCalled()
      expect(commit.mock.calls[0][0]).toBe('updateResults')
      expect(commit.mock.calls[0][1]).toEqual({
        index: 0,
        results: [],
        memo: ''
      })
    })
  })

  describe('updateStartTime', () => {
    it('commitが呼ばれる', () => {
      updateStartTime(mockContext, {
        index: 0,
        time: '2019-01-01T00:00:00.000Z'
      })

      expect(commit).toHaveBeenCalled()
      expect(commit.mock.calls[0][0]).toBe('updateStartTime')
      expect(commit.mock.calls[0][1]).toEqual({
        index: 0,
        time: '2019-01-01T00:00:00.000Z'
      })
    })
  })

  describe('updateEndTime', () => {
    it('commitが呼ばれる', () => {
      updateEndTime(mockContext, {
        index: 0,
        time: '2019-01-01T00:00:00.000Z'
      })

      expect(commit).toHaveBeenCalled()
      expect(commit.mock.calls[0][0]).toBe('updateEndTime')
      expect(commit.mock.calls[0][1]).toEqual({
        index: 0,
        time: '2019-01-01T00:00:00.000Z'
      })
    })
  })

  describe('setWorkouts', () => {
    it('commitが呼ばれる', () => {
      setWorkouts(mockContext, { workouts: [] })

      expect(commit).toHaveBeenCalled()
      expect(commit.mock.calls[0][0]).toBe('setWorkouts')
      expect(commit.mock.calls[0][1]).toEqual({ workouts: [] })
    })
  })
})
