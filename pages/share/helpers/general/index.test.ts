import { isString, isUndefined } from './index'
describe('general', () => {
  it('isString', () => {
    expect(isString('a')).toBeTruthy()
    expect(isString(1)).toBeFalsy()
  })

  it('isUndefined', () => {
    expect(isUndefined(undefined)).toBeTruthy()
    expect(isUndefined('a')).toBeFalsy()
  })
})
