const { render, fireEvent, screen } = require('@testing-library/react')
import ButtonLoad from './index'

describe.skip('ButtonLoad', () => {
    // props
    const callBack = jest.fn()

    // elem
    const Elem = <ButtonLoad onClick={callBack} />
    let el: HTMLElement | null = null

    beforeEach(() => {
        const { getByTestId } = render(Elem)
        el = getByTestId('button-load')
    })

    it('exist', () => {
        expect(el).toBeInTheDocument()
        expect(screen.getByText('More')).toBeInTheDocument()
    })

    it('click event', () => {
        fireEvent.click(el)
        fireEvent.click(el)
        expect(callBack).toHaveBeenCalledTimes(2)
    })
})
