import { SignIn01 } from './index'
const { render, fireEvent, screen } = require('@testing-library/react')

describe.only('ButtonLoad', () => {
    const callBack = jest.fn()


    const Elem = <SignIn01 onClick={callBack} />
    let el

    beforeEach(() => {
        const { getByTestId } = render(Elem)
        el = getByTestId('btn-signIn01')
    })

    it('exist', () => {
        expect(el).toBeInTheDocument()
    })

    it('click event', () => {
        fireEvent.click(el)
        fireEvent.click(el)
        expect(callBack).toHaveBeenCalledTimes(2)
    })
})
