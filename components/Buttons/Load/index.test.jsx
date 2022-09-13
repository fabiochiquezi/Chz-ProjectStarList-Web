import { render, fireEvent, screen } from '@testing-library/react'
import LoadButton from './index'

describe('ButtonLoad', () => {
    const callBack = jest.fn()
    const Elem = <LoadButton onClick={callBack} />
    let el

    beforeEach(() => {
        const { getByTestId } = render(Elem)
        el = getByTestId('button-load')
    })

    it('should exist', () => {
        expect(el).toBeInTheDocument()
        expect(screen.getByText('More')).toBeInTheDocument()
    })

    it('should call click event', () => {
        fireEvent.click(el)
        fireEvent.click(el)
        expect(callBack).toHaveBeenCalledTimes(2)
    })
})
