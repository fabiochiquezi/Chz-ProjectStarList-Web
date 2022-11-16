import { render, fireEvent, screen } from '@testing-library/react'
import { AddThumb } from './index'

describe('AddThumb', () => {
    it('data', () => {
        render(<AddThumb onClick={jest.fn()} />)
        const el = document.querySelector('div')
        expect(el).toBeInTheDocument()
    })

    it('onClick', () => {
        const callBack = jest.fn()
        render(<AddThumb onClick={callBack} />)
        const el = screen.getByTestId('add-thumb')
        if (el) fireEvent.click(el)
        expect(callBack).toHaveBeenCalledTimes(1)
    })
})
