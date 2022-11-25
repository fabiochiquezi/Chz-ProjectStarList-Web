import { render, screen } from '@testing-library/react'
import { PopSave } from '.'

describe('PopSave', () => {
    it('data', () => {
        render(<PopSave />)
        const p = screen.getByText('Saving...Don‘t close!')
        expect(p).toBeInTheDocument()
    })
})
