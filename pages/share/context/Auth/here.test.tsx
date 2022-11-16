import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { ReactElement } from 'react'
import { Auth } from '.'
import { useSetAuth } from './types/setTypes'
import { useAuth } from './types/usetypes'

jest.mock('next/router', () => ({
    useRouter: jest.fn(() => ({ route: '/', push: jest.fn() }))
}))

const mockFn = {
    signIn: jest.fn((): any => ({
        displayName: 'test',
        email: 'test@example.com'
    })),
    authState: jest.fn(),
    signOut: jest.fn()
}

const Provider = Auth(mockFn.signIn, mockFn.authState, mockFn.signOut)

const Wrap: any = ({ children }: any) => <Provider>{children}</Provider>

const Element = (): ReactElement => {
    const { user, loading } = useAuth()
    const { signIn, signOut, setUser, setLoading } = useSetAuth()
    return (
        <div>
            <p data-testid="children">Item</p>
            <p data-testid="signIn" onClick={signIn}>
                signIn
            </p>
            <p data-testid="signOut" onClick={() => signOut}>
                signOut
            </p>
            <p
                data-testid="setUser"
                onClick={(e: any) => setUser(e.target.value)}
            >
                setUser
            </p>
            <p
                data-testid="setLoading"
                onClick={() => setLoading(prev => !prev)}
            >
                setLoading
            </p>
            <p data-testid="user">{user ? user.displayName : ''}</p>
            <p data-testid="loading">{loading ? 'true' : 'false'}</p>
        </div>
    )
}

describe('AuthProvider', () => {
    beforeEach(() => {
        render(
            <Wrap>
                <Element />
            </Wrap>
        )
    })

    it('data', () => {
        const children = document.querySelector('[data-testid="children"]')
        const user = document.querySelector('[data-testid="user"]')
        const loading = document.querySelector('[data-testid="loading"]')
        expect(children).toBeInTheDocument()
        expect(user).toBeInTheDocument()
        expect(loading).toBeInTheDocument()
        expect(user?.textContent).toBe('')
        expect(loading?.textContent).toBe('false')
    })

    it('signIn', async () => {
        const signInEl = screen.getByTestId('signIn')
        await waitFor(async () => fireEvent.click(signInEl))
        expect(mockFn.signIn).toBeCalledTimes(1)
        // expect(screen.getByTestId('user').textContent).toBe('test')
    })

    it('setUser', () => {
        const signInEl = screen.getByTestId('setUser')
        if (signInEl) fireEvent.click(signInEl)
        expect(screen.getByTestId('setUser').textContent).toBe('setUser')
    })

    it('setLoadign', () => {
        const setLoadingEl = screen.getByTestId('setLoading')
        if (setLoadingEl) fireEvent.click(setLoadingEl)
        expect(screen.getByTestId('loading').textContent).toBe('true')
    })
})
