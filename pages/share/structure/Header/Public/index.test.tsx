import { render, screen } from '@testing-library/react'
import { Header } from './index'

describe('Header', () => {
    it('data', () => {
        render(<Header />)
        const el = document.querySelector('header')
        const logo = document.querySelector('.logo svg')
        const signInBtn = screen.getByTestId('BtnSignIn')
        const gitHubBtn: HTMLAnchorElement = screen.getByTestId('BtnGitHub')

        expect(el).toBeInTheDocument()
        expect(logo).toBeInTheDocument()
        expect(signInBtn).toBeInTheDocument()
        expect(gitHubBtn).toBeInTheDocument()
        expect(gitHubBtn.href).toBe(
            'https://github.com/fabiochiquezi/Chz-ProjectStarList-Web'
        )
    })
})
