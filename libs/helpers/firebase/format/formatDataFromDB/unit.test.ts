import { formatDataFromDB } from '.'

describe('firebase/_helpers/format', () => {
  test('generalFormat', () => {
    const data = (): { test: string } => ({ test: 'test' })
    const req = { id: 'testID', data }
    const formated = formatDataFromDB(req)
    const resultExpected = { test: 'test', uid: 'testID' }
    expect(formated).toEqual(resultExpected)
  })
})
