import { submitFail, submitSuccess } from '.'

describe('submit', () => {
  const alert = {
    error: jest.fn(),
    success: jest.fn()
  }

  test('submitFail', () => {
    submitFail(alert)
    expect(alert.error).toBeCalledTimes(1)
  })

  test('submitSuccess', () => {
    const fnMock = jest.fn()
    submitSuccess(alert)(fnMock)
    expect(fnMock).toBeCalledTimes(1)
  })
})
