import { render } from '@testing-library/react'
import { ReactElement } from 'react'
import { PrivateRoute } from '.'

jest.mock('next/router', () => ({
    useRouter: jest.fn(() => ({ route: '/' }))
}))

jest.mock('../../../auth/types/usetypes', () => ({
    useAuth: jest.fn(() => ({
        user: undefined
    }))
}))

describe('PrivateRoute', () => {
    it('loading', () => {
        const Item = (): ReactElement => <p data-testid="Item">test</p>
        render(
            <PrivateRoute>
                <Item />
            </PrivateRoute>
        )
        const load = document.querySelector('[data-testid="Loading"]')
        const item = document.querySelector('[data-testid="Item"]')
        expect(item).not.toBeInTheDocument()
        expect(load).toBeInTheDocument()
    })
})
