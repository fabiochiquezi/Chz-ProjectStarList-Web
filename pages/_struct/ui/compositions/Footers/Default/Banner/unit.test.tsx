import { render, screen } from '@testing-library/react'
import { Banner } from './index'


describe('Banner', () => {
  test('elements', () => {
    render(<Banner />)
    const title = 'I\'m looking for a job!'
    const description = 'If you liked this project, help me recommending me for some company'
    const el = screen.getByTestId('Banner')
    const h1 = screen.getByText(title)
    const p = screen.getByText(description)
    const btnGitHub = screen.getByText('GitHub')
    expect(h1).toBeInTheDocument()
    expect(el).toBeInTheDocument()
    expect(p).toBeInTheDocument()
    expect(btnGitHub).toBeInTheDocument()
    expect(btnGitHub).toHaveAttribute('href', 'https://github.com/fabiochiquezi')
    // const btnPortfolio = screen.getByText('Portfolio')
    // expect(btnPortfolio).toBeInTheDocument()
    // expect(btnPortfolio).toHaveAttribute('href', 'https://www.chiquezi.com/home')
  })
})
