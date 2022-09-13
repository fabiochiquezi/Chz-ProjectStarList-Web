import { fireEvent, render, screen, within } from '@testing-library/react'
import { BannerJob } from './index'


describe('BannerJob', () => {
    const title = 'I\'m looking for a job!'
    const description = 'If you liked this project, help me recommending me for some company'

    const Elem = <BannerJob />
    const { getByTestId, getByText } = render(Elem)

    it('should have all data', () => {
        const el = getByTestId('banner-job')
        const btnGitHub = screen.getByText('GitHub')
        const h1 = screen.getByText(title)
        const p = screen.getByText(description)

        expect(el).toBeInTheDocument()
        expect(h1).toBeInTheDocument()
        expect(p).toBeInTheDocument()
        expect(btnGitHub).toBeInTheDocument()
        expect(btnGitHub).toHaveAttribute('href', 'https://github.com/fabiochiquezi')
    })
})
