import { getDataByID } from '.'

describe('getDataByID', () => {
  const list: any = [{ id: 'aaa' }, { id: 'bbb' }, { id: 'ccc' }]

  it('success', () => {
    expect(getDataByID(list)('aaa')).toEqual({ id: 'aaa' })
    expect(getDataByID(list)('bbb')).toEqual({ id: 'bbb' })
    expect(getDataByID(list)('ccc')).toEqual({ id: 'ccc' })
  })
  it('fail', () => {
    expect(getDataByID(list)('ddd')).toBeUndefined()
  })
})
