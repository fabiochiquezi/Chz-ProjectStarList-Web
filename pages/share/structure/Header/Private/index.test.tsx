import { render } from '@testing-library/react'
import { Header } from '.'

jest.mock('next/router', () => ({
    useRouter: jest.fn(() => ({ route: '/' }))
}))

jest.mock('../../index', () => ({
    useAuth: jest.fn(() => ({
        user: { displayName: 'test', email: 'test@example.com' }
    })),
    useSetAuth: jest.fn(() => ({ signOut: jest.fn() }))
}))

describe.skip('HeaderPrivate', () => {
    it('should have all data', () => {
        render(<Header />)
        const logo = document.querySelector('.logo svg')
        const menuRight = document.querySelector('#menu-right')
        const name = menuRight?.querySelector('li:first-child span')
        const signOutBtn = menuRight?.querySelector('li:last-child button')
        const nav = document.querySelector('nav')

        expect(logo).toBeInTheDocument()
        expect(nav).toBeInTheDocument()
        expect(name?.textContent).toBe('test')
        expect(signOutBtn?.textContent).toBe('Sign Out')
    })
})
