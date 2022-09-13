import { fireEvent, render, screen } from '@testing-library/react'
import Alert from './index'

describe('AlertDefault', () => {
    const message = 'Test'
    const closeAlert = jest.fn(() => true)
    const Elem = (
        <Alert message={message} closeAlert={closeAlert} />
    )

    it('should have all props', () => {
        const { getByTestId } = render(Elem)
        const el = getByTestId('alert-default')

        expect(el).toBeInTheDocument()
        expect(el).toHaveClass('bg-gray-700')
        screen.getByText(message)
    })

    it('should have state class 1', () => {
        const Elem = (
            <Alert message={message} state={1} closeAlert={closeAlert} />
        )
        const { getByTestId } = render(Elem)

        const el = getByTestId('alert-default')
        expect(el).toHaveClass('bg-green-700')
    })

    it('should have state class 2', () => {
        const Elem = (
            <Alert message={message} state={2} closeAlert={closeAlert} />
        )
        const { getByTestId } = render(Elem)

        const el = getByTestId('alert-default')
        expect(el).toHaveClass('bg-red-700')
    })

    it('click event', () => {
        const { getByTestId } = render(Elem)
        const closeBtn = getByTestId('close-button')
        fireEvent.click(closeBtn)

        expect(closeBtn).toBeInTheDocument()
        expect(closeAlert).toHaveBeenCalledTimes(1)
    })
})
