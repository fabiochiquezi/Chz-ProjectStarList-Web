import { render } from '@testing-library/react'
import { Loading } from './index'

describe('Loading', () => {
    it('data', () => {
        const { getByTestId } = render(<Loading />)
        const el = getByTestId('load-structure')
        expect(el).toHaveClass('h-screen')
        expect(el).toBeInTheDocument()
    })

    it('alternative data', () => {
        const { getByTestId } = render(<Loading height="h-[100px]" />)
        const el = getByTestId('load-structure')
        expect(el).not.toHaveClass('h-screen')
        expect(el).toHaveClass('h-[100px]')
        expect(el).toBeInTheDocument()
    })
})
