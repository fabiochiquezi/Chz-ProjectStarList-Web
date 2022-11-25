import { render, screen } from '@testing-library/react'
import { Banner } from './index'


describe('Banner', () => {
    it('elements', () => {
        render(<Banner />)

        const title = 'I\'m looking for a job!'
        const description = 'If you liked this project, help me recommending me for some company'

        const el = document.querySelector('.container')
        const h1 = screen.getByText(title)
        const p = screen.getByText(description)
        const btnGitHub = screen.getByText('GitHub')
        const btnPortfolio = screen.getByText('Portfolio')

        expect(el).toBeInTheDocument()
        expect(h1).toBeInTheDocument()
        expect(p).toBeInTheDocument()
        expect(btnGitHub).toBeInTheDocument()
        expect(btnPortfolio).toBeInTheDocument()
        expect(btnGitHub).toHaveAttribute('href', 'https://github.com/fabiochiquezi')
    })
})
