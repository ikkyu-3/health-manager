import getPeriod from './getPeriod'

jest.spyOn(console, 'warn').mockImplementation(() => {})

describe('modules/getPeriod', () => {
  it('期間を取得する', () => {
    expect(
      getPeriod('2019-01-01T01:11:11.000Z', '2019-01-01T02:22:22.000Z')
    ).toBe('01:11:11')
  })

  it('引数で渡す値がISO形式の文字列でない場合、"--:--:--" を返す', () => {
    expect(getPeriod('01:11:11', '01:11:25')).toBe('--:--:--')
  })
})
