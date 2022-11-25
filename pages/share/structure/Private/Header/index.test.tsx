import { render } from '@testing-library/react'
import { Header } from './index'

describe('Header', () => {
    const props: any = {
        router: { route: '/', push: jest.fn((s: string) => s) },
        user: { displayName: 'tester' },
        signOut: jest.fn()
    }
    it('data', () => {
        render(<Header {...props} />)
        const logo = document.querySelector('.logo svg')
        const menuRight = document.querySelector('#menu-right')
        const name = menuRight?.querySelector('li:first-child span')
        const signOutBtn = menuRight?.querySelector('li:last-child button')
        const nav = document.querySelector('nav')

        expect(logo).toBeInTheDocument()
        expect(nav).toBeInTheDocument()
        expect(name?.textContent).toBe('tester')
        expect(signOutBtn?.textContent).toBe('Sign Out')
    })
})
