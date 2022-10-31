import { render } from '@testing-library/react'
import { Header } from './index'


describe('Header Login', () => {
    const Elem = <Header />
    render(Elem)

    it('should have all data', () => {
        const el = document.querySelector('header')
        const logo = document.querySelector('svg')
        const gitHubBtn = document.querySelector('a:first-child')
        const signInBtn = document.querySelector('a:last-child')

        expect(el).toBeInTheDocument()
        expect(logo).toBeInTheDocument()
        expect(signInBtn).toBeInTheDocument()
        expect(gitHubBtn).toBeInTheDocument()
        expect(gitHubBtn.href).toBe('https://github.com/fabiochiquezi')
    })
})
