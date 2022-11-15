import { render, fireEvent, screen } from '@testing-library/react'
import { AddThumb } from './index'

describe('AddThumb', () => {
    const callBack = jest.fn()
    const Elem = <AddThumb onClick={callBack} />
    let el

    beforeEach(() => {
        const { getByTestId } = render(Elem)
        el = getByTestId('add-thumb')
    })

    it('should exist', () => {
        expect(el).toBeInTheDocument()
        expect(screen.getByText('Add +')).toBeInTheDocument()
    })

    it('should call click event', () => {
        fireEvent.click(el)
        fireEvent.click(el)
        expect(callBack).toHaveBeenCalledTimes(2)
    })
})
