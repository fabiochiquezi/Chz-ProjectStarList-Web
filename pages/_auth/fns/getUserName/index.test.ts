import { getUserName } from '.'

describe('getUserName', () => {
  test('return ok', () => {
    const email = 'test@test.com'
    expect(getUserName(email)).toBe('test')
  })
})
