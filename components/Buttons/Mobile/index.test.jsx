import { render, fireEvent } from '@testing-library/react'
import { MobileButton } from './index'

describe.only('ButtonLoad', () => {
    const callBack = jest.fn(() => true)

    describe('Context - Button Hamburger', () => {
        it('should exist', () => {
            const Elem = <MobileButton meny={true} setMenu={callBack} />
            const { getByTestId } = render(Elem)

            const el = getByTestId('mobile-button')
            const closeBtn = getByTestId('mobile-button-hamb')

            expect(el).toBeInTheDocument()
            expect(closeBtn).toBeInTheDocument()
        })

        it('should call click event', () => {
            const Elem = <MobileButton meny={true} setMenu={callBack} />
            const { getByTestId } = render(Elem)
            const el = getByTestId('mobile-button')

            fireEvent.click(el)
            expect(callBack).toHaveBeenCalledTimes(1)
        })
    })

    describe('Context - Button Close', () => {
        it('should exist', () => {
            const Elem = <MobileButton meny={false} setMenu={callBack} />
            const { getByTestId } = render(Elem)

            const el = getByTestId('mobile-button')
            const closeBtn = getByTestId('mobile-button-hamb')

            expect(el).toBeInTheDocument()
            expect(closeBtn).toBeInTheDocument()
        })

        it('should call click event', () => {
            const Elem = <MobileButton meny={true} setMenu={callBack} />
            const { getByTestId } = render(Elem)
            const el = getByTestId('mobile-button')

            fireEvent.click(el)
            expect(callBack).toHaveBeenCalledTimes(1)
        })
    })
})
