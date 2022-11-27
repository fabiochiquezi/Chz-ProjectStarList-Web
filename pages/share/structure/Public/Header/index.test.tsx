import { render, screen } from '@testing-library/react'
import { Header } from './index'

describe('Header', () => {
  const props = {
    signIn: jest.fn()
  }
  it('elements', () => {
    render(<Header {...props} />)
    const el = screen.getByTestId('HeaderPublic')
    const logo = screen.getByTestId('Logo')
    const gitHubBtn: HTMLAnchorElement = screen.getByTestId('BtnGitHub')

    expect(el).toBeInTheDocument()
    expect(logo).toBeInTheDocument()
    expect(gitHubBtn).toBeInTheDocument()
    expect(gitHubBtn.href).toBe(
      'https://github.com/fabiochiquezi/Chz-ProjectStarList-Web'
    )
  })
})
