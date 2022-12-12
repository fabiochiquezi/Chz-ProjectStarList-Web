import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { BtnSignIn } from './index'

describe('BtnSignIn', () => {
    const props = {
        className: 'test',
        id: 'test',
        onClick: jest.fn()
    }

    test('data', () => {
        render(<BtnSignIn {...props} />)
        const el = screen.getByTestId('BtnSignIn')
        expect(el).toBeInTheDocument()
        expect(el).toHaveClass(props.className)
        expect(el.id).toBe(props.id)
    })

    test('load', () => {
        render(<BtnSignIn {...props} />)
        const el = screen.getByTestId('BtnSignIn')
        fireEvent.click(el)
        waitFor(() => {
            const btnLoad = screen.queryByTestId('BtnLoad')
            const btnIcon = screen.queryByTestId('BtnIcon')
            expect(btnLoad).toBeInTheDocument()
            expect(btnIcon).not.toBeInTheDocument()
        })
    })

    test('icon', () => {
        render(<BtnSignIn {...props} />)
        const btnLoad = screen.queryByTestId('BtnLoad')
        const btnIcon = screen.getByTestId('BtnIcon')
        expect(btnLoad).not.toBeInTheDocument()
        expect(btnIcon).toBeInTheDocument()
    })

    test('onClick', () => {
        render(<BtnSignIn {...props} />)
        const el = screen.getByTestId('BtnSignIn')
        fireEvent.click(el)
        expect(props.onClick).toHaveBeenCalledTimes(1)
    })
})
