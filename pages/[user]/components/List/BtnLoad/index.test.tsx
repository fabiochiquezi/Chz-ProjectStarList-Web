import { fireEvent, render, screen } from '@testing-library/react'
import { BtnLoad } from './index'

describe('ButtonLoad', () => {
    it('data', () => {
        const onClick = jest.fn()
        render(<BtnLoad onClick={onClick} />)
        const btn = screen.getByTestId('BtnLoad')
        const span = screen.getByText('More')
        expect(btn).toBeInTheDocument()
        expect(span).toBeInTheDocument()
        fireEvent.click(btn)
        expect(onClick).toBeCalledTimes(1)
    })
})
