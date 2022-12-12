import { generalFormat } from '.'

describe('firebase/_helpers/format', () => {
  test('generalFormat', () => {
    const data = (): { test: string } => ({ test: 'test' })
    const req = { id: 'testID', data }
    const formated = generalFormat(req)
    const resultExpected = { test: 'test', firebaseUID: 'testID' }
    expect(formated).toEqual(resultExpected)
  })
})
