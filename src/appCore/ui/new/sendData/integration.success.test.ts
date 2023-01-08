import { sendData } from '.'

jest.mock('./valid', () => ({
  validData: (data: any) => true
}))

describe('sendData', () => {
  const alert = { error: jest.fn(), success: jest.fn() }
  const sendDataFn = jest.fn((data: any) => data)
  const data: any = { test: 'test' }

  it('success', async () => {
    await sendData(alert)(sendDataFn)(data)
    expect(sendDataFn).toBeCalledTimes(1)
    expect(sendDataFn).toBeCalledWith(data)
  })
})
