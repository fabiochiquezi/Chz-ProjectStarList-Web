import { render } from '@testing-library/react'
import { PrivateRoute } from '.'

jest.mock('next/router', () => ({
    useRouter: jest.fn(() => ({ route: '/' }))
}))

jest.mock('../../Auth/types/usetypes', () => ({
    useAuth: jest.fn(() => ({
        user: { displayName: 'test', email: 'test@example.com' }
    }))
}))

describe.skip('PrivateRoute', () => {
    it('data', () => {
        const { getByTestId } = render(
            <PrivateRoute>
                <p>test</p>
            </PrivateRoute>
        )
        const el = getByTestId('private-route')
        const load = getByTestId('load-structure')

        expect(el).toBeInTheDocument()
        expect(load).toBeInTheDocument()
    })
})
