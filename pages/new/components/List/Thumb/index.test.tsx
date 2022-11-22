import { fireEvent, render, screen } from '@testing-library/react'
import { Thumb } from './index'

describe('Thumb', () => {
    const props = {
        thumb: 'thumb',
        title: 'title',
        onClick: jest.fn()
    }

    it('data', () => {
        render(<Thumb {...props} />)
        const el = screen.getByTestId('Thumb')
        const img = screen.getByRole<HTMLImageElement>('img')
        const hoverDiv = screen.getByText('+')
        expect(el).toBeInTheDocument()
        expect(hoverDiv).toBeInTheDocument()
        expect(img.src).toBe(`http://localhost/${props.thumb}`)
        expect(img.alt).toBe(props.title)
        expect(img.title).toBe(props.title)
    })

    it('onClick', () => {
        render(<Thumb {...props} />)
        const el = screen.getByTestId('Thumb')
        fireEvent.click(el)
        expect(props.onClick).toHaveBeenCalledTimes(1)
    })
})
