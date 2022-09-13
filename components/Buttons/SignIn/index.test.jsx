import { SignInButton01, SignInButton02 } from './index'
const { render, fireEvent } = require('@testing-library/react')

describe.only('SignIn', () => {
    const callBack = jest.fn()
    const Elem = <SignInButton01 onClick={callBack} />
    const Elem2 = <SignInButton02 onClick={callBack} />

    it('should exist and have click event - btn1', () => {
        const { getByTestId } = render(Elem)
        const el1 = getByTestId('btn-signIn01')
        expect(el1).toBeInTheDocument()
        fireEvent.click(el1)
        expect(callBack).toHaveBeenCalledTimes(1)
    })

    it('should exist and have click event - btn2', () => {
        const { getByTestId } = render(Elem2)
        const el2 = getByTestId('btn-signIn02')
        expect(el2).toBeInTheDocument()
        fireEvent.click(el2)
        expect(callBack).toHaveBeenCalledTimes(1)
    })
})
