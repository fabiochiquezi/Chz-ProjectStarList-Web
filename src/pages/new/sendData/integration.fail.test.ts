import { sendData } from '.'

jest.mock('./valid', () => ({
  validData: (data: any) => false
}))

describe('sendData', () => {
  const alert = { error: jest.fn(), success: jest.fn() }
  const sendDataFn = jest.fn((data: any) => data)
  const data: any = { test: 'test' }

  it('fail', async () => {
    await sendData(alert)(sendDataFn)(data)
    expect(alert.error).toBeCalledTimes(1)
  })
})
