import { render } from '@testing-library/react'
import { LoadingStruct } from './index'

describe('LoadingStruct', () => {
    it('should have all props', () => {
        const Elem = <LoadingStruct />
        const { getByTestId } = render(Elem)
        const el = getByTestId('load-structure')
        expect(el).toBeInTheDocument()
    })
})
