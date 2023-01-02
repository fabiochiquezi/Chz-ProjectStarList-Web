import { narrowString } from './index'

describe('narrowing', () => {
  it('narrowString', () => {
    const testString: string | number = 'test'
    const testNumber: string | number = 123
    expect(narrowString(testString)).toBe('test')
    expect(() => narrowString(testNumber)).toThrowError()
    expect.assertions(2)
  })
})
