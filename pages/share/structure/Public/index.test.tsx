import { render, screen } from '@testing-library/react'
import { PublicStruct } from '.'

describe('Struct', () => {
    const props = {
        titleSEO: 'titleSEO',
        descriptionSEO: 'descriptionSEO',
        signIn: jest.fn()
    }
    const children = <p>test</p>

    it('children', async () => {
        render(<PublicStruct {...props}>{children}</PublicStruct>)
        const p = screen.getByText('test')
        expect(p).toBeInTheDocument()
    })

    it('elements', () => {
        render(<PublicStruct {...props}>{children}</PublicStruct>)
        const Header = screen.getByTestId('HeaderPublic')
        const Footer = screen.getByTestId('Footer')
        expect(Header).toBeInTheDocument()
        expect(Footer).toBeInTheDocument()
    })
})
