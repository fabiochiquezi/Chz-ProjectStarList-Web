import { render } from '@testing-library/react'
import { SimpleThumb } from './index'

describe('Thumb', () => {
    it('should have all props', () => {
        const Elem = <SimpleThumb index={1} thumb="test" />
        const { getByTestId } = render(Elem)
        const el = getByTestId('thumb-default')
        const img = document.querySelector('img')

        expect(el).toBeInTheDocument()
        expect(img.src).toBe('http://localhost/test')
        // expect(img.alt).toBe('test')
        // expect(img.title).toBe('test')
    })
})
