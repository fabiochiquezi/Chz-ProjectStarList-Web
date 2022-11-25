import { fireEvent, render, screen } from '@testing-library/react'
import { BtnHamburger } from '.'

describe('BtnHamburger', () => {
    const props = {
        opened: true,
        onClick: jest.fn()
    }

    it('closed', () => {
        render(<BtnHamburger {...props} />)
        const closeBtn = document.querySelector('[data-testid="btn-close"]')
        const iconBtn = document.querySelector('[data-testid="btn-icon"]')
        expect(closeBtn).toBeInTheDocument()
        expect(iconBtn).not.toBeInTheDocument()
    })

    it('opened', () => {
        render(<BtnHamburger {...props} opened={false} />)
        const closeBtn = document.querySelector('[data-testid="btn-close"]')
        const iconBtn = document.querySelector('[data-testid="btn-icon"]')
        expect(iconBtn).toBeInTheDocument()
        expect(closeBtn).not.toBeInTheDocument()
    })

    it('onClick', () => {
        render(<BtnHamburger {...props} opened={true} />)
        const el = screen.getByTestId('BtnHamburger')
        if (el) fireEvent.click(el)
        expect(props.onClick).toHaveBeenCalledTimes(1)
    })
})
