import { render } from '@testing-library/react'
import { PrivateRoute } from '.'

describe('PrivateRoute', () => {
    it('should have children', () => {
        const Elem = <PrivateRoute><p>test</p></PrivateRoute>
        const { getByTestId } = render(Elem)
        const el = getByTestId('private-route')
        const load = getByTestId('load-structure')

        expect(el).toBeInTheDocument()
        expect(load).toBeInTheDocument()
    })
})
