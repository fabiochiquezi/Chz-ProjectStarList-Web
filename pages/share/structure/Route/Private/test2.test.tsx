import { render } from '@testing-library/react'
import { ReactElement } from 'react'
import { PrivateRoute } from '.'

jest.mock('next/router', () => ({
    useRouter: jest.fn(() => ({ route: '/' }))
}))

jest.mock('../../../context/Auth/types/usetypes', () => ({
    useAuth: jest.fn(() => ({
        user: { displayName: 'test', email: 'test@example.com' }
    }))
}))

describe('PrivateRoute', () => {
    it('not loading', () => {
        const Item = (): ReactElement => <p data-testid="Item">test</p>
        render(
            <PrivateRoute>
                <Item />
            </PrivateRoute>
        )
        const load = document.querySelector('[data-testid="Loading"]')
        const item = document.querySelector('[data-testid="Item"]')
        expect(item).toBeInTheDocument()
        expect(load).not.toBeInTheDocument()
    })
})
