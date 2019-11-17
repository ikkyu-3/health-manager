import mutations from './mutations'

describe('store/mutations', () => {
  const { changeTitle } = mutations as any

  describe('changeTitle', () => {
    it('titleを変更する', () => {
      const state = { title: '' }
      const payload = { title: 'hoge' }
      changeTitle(state, payload)
      expect(state.title).toBe('hoge')
    })
  })
})
