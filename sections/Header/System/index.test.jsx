import { render } from '@testing-library/react'
import { Header } from '.'

jest.mock('next/router', () => ({
    useRouter() {
        return {
            route: '/',
            pathname: '',
            query: {
                type: 'doing'
            },
            asPath: ''
        }
    }
}))

describe('Header System', () => {
    const Elem = <Header />
    render(Elem)

    it('should have all data', () => {
        const logo = document.querySelector('svg')
        const menuRight = document.querySelector('#menu-right')
        const name = menuRight.querySelector('li:first-child span')
        const signOutBtn = menuRight.querySelector('li:last-child button')
        const nav = document.querySelector('nav')

        expect(logo).toBeInTheDocument()
        expect(nav).toBeInTheDocument()
        expect(name.textContent).toBe('...')
        expect(signOutBtn.textContent).toBe('Sign Out')
    })
})
