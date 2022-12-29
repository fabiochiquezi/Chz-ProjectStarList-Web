import { render, screen } from '@testing-library/react'
import { HeaderPublic } from './index'

describe('PrivateStruct', () => {
  const props = {
    BtnSignIn: <button>BtnSignIn</button>
  }

  test('elements', async () => {
    render(<HeaderPublic {...props} />)
    const headerPublic = screen.getByTestId('HeaderPublic')
    const BtnSignIn = screen.getByText('BtnSignIn')
    const BtnGitHub = screen.getByTestId('BtnGitHub')
    const Logo = screen.getByTestId('Logo')
    expect(headerPublic).toBeInTheDocument()
    expect(BtnSignIn).toBeInTheDocument()
    expect(BtnGitHub).toBeInTheDocument()
    expect(Logo).toBeInTheDocument()
  })
})
