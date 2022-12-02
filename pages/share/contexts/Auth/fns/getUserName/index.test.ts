import { getUserName } from '.'

describe('getUserName', () => {
  it('return ok', () => {
    const email = 'test@test.com'
    expect(getUserName(email)).toBe('test')
  })
})
