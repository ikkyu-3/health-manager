import actions from './actions'

describe('store/actions', () => {
  const commit = jest.fn()
  const mockContext = { commit }
  const { changeTitle } = actions as any

  afterEach(() => {
    commit.mockClear()
  })

  describe('changeTitle', () => {
    it('commitが呼ばれる', () => {
      changeTitle(mockContext, { title: 'hoge' })

      expect(commit).toHaveBeenCalled()
      expect(commit.mock.calls[0][0]).toBe('changeTitle')
      expect(commit.mock.calls[0][1]).toEqual({ title: 'hoge' })
    })
  })
})
