import { isString, isUndefined } from './index'
describe('general', () => {
  test('isString', () => {
    expect(isString('a')).toBeTruthy()
    expect(isString(1)).toBeFalsy()
  })

  test('isUndefined', () => {
    expect(isUndefined(undefined)).toBeTruthy()
    expect(isUndefined('a')).toBeFalsy()
  })
})
