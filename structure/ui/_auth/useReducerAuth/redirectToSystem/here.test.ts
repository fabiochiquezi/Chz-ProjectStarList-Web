import { redirectToSystem } from './index'

jest.mock('../../../../../libs/helpers/front/path', () => {
  return {
    isCurrentPathPublic: jest.fn((routes: any) => 'ok')
  }
})

// jest.mock('next/router')

describe('redirectToSystem', () => {
  it('ok', () => {
    const user: any = { email: 'test@example.com' }
    redirectToSystem(user)
  })
})
