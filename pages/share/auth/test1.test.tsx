import { fireEvent, render } from '@testing-library/react'
import { useAuth } from './types/usetypes'
import { ReactElement } from 'react'
import { Auth } from '.'

jest.mock('next/router', () => ({
    useRouter: jest.fn(() => ({ route: '/' }))
}))

describe('AuthProvider', () => {
    const signIn = jest.fn()
    const authState = jest.fn()
    const signOut = jest.fn()
    const Provider = Auth(signIn, authState, signOut)
    const AuthProvider = ({ children }: any): ReactElement => (
        <Provider>{children}</Provider>
    )

    it('data', () => {
        const Item = (): ReactElement => {
            const { user, loading } = useAuth()
            return (
                <AuthProvider>
                    <p data-testid="children">Item</p>
                    <p data-testid="user">{user ? user.displayName : ''}</p>
                    <p data-testid="loading">{loading ? 'true' : 'false'}</p>
                </AuthProvider>
            )
        }
        render(<Item />)

        const children = document.querySelector('[data-testid="children"]')
        const user = document.querySelector('[data-testid="user"]')
        const loading = document.querySelector('[data-testid="loading"]')

        expect(children).toBeInTheDocument()
        expect(user).toBeInTheDocument()
        expect(loading).toBeInTheDocument()
        expect(user?.textContent).toBe('')
        expect(loading?.textContent).toBe('false')
    })

    it('signIn', () => {
        const Item = (): ReactElement => {
            const { user, loading } = useAuth()
            return (
                <AuthProvider>
                    <p data-testid="user">{user ? user.displayName : ''}</p>
                    <p data-testid="loading">{loading ? 'true' : 'false'}</p>
                    <p data-testid="children" onClick={signIn}>
                        Item
                    </p>
                </AuthProvider>
            )
        }
        render(<Item />)

        const children = document.querySelector('[data-testid="children"]')
        if (children) fireEvent.click(children)
        expect(signIn).toBeCalledTimes(1)
    })

    it('signOut', () => {
        const Item = (): ReactElement => (
            <AuthProvider>
                <p onClick={signOut} data-testid="Item">
                    Item
                </p>
            </AuthProvider>
        )
        render(<Item />)
        const children = document.querySelector('[data-testid="Item"]')
        if (children) fireEvent.click(children)
        expect(signOut).toBeCalledTimes(1)
    })
})
