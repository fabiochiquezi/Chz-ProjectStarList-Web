import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { BtnSignIn } from './index'

describe('BtnSignIn', () => {
    const props = {
        className: 'test',
        id: 'test',
        onClick: jest.fn()
    }

    it('data', () => {
        render(<BtnSignIn {...props} />)
        const el = screen.getByTestId('BtnSignIn')
        expect(el).toBeInTheDocument()
        expect(el).toHaveClass(props.className)
        expect(el.id).toBe(props.id)
    })

    it('load', () => {
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

    it('icon', () => {
        render(<BtnSignIn {...props} />)
        const btnLoad = screen.queryByTestId('BtnLoad')
        const btnIcon = screen.getByTestId('BtnIcon')
        expect(btnLoad).not.toBeInTheDocument()
        expect(btnIcon).toBeInTheDocument()
    })

    it('onClick', () => {
        render(<BtnSignIn {...props} />)
        const el = screen.getByTestId('BtnSignIn')
        fireEvent.click(el)
        expect(props.onClick).toHaveBeenCalledTimes(1)
    })
})
