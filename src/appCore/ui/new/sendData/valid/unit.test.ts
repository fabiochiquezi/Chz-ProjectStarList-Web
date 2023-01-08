import { isPermitedType, validData } from '.'

describe('valid', () => {
  test('isPermitedType', () => {
    expect(isPermitedType('doing')).toBeTruthy()
    expect(isPermitedType('illdo')).toBeTruthy()
    expect(isPermitedType('did')).toBeTruthy()
    expect(isPermitedType('error')).toBeFalsy()
  })

  describe('validData', () => {
    const list: any = [{ id: 'aaa' }, { id: 'bbb' }, { id: 'ccc' }]

    test('success', () => {
      const data1: any = { list, IDSelected: 'aaa', catalogType: 'doing' }
      expect(validData(data1)).toBeTruthy()

      const data2: any = { list, IDSelected: 'bbb', catalogType: 'did' }
      expect(validData(data2)).toBeTruthy()

      const data3: any = { list, IDSelected: 'ccc', catalogType: 'illdo' }
      expect(validData(data3)).toBeTruthy()
    })
    test('error', () => {
      const data1: any = { list, IDSelected: 'error', catalogType: 'doing' }
      expect(validData(data1)).toBeFalsy()

      const data2: any = { list, IDSelected: 'bbb', catalogType: 'error' }
      expect(validData(data2)).toBeFalsy()
    })
  })
})
