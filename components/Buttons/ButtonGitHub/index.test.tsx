const { render, fireEvent } = require('@testing-library/react')
import ButtonGitHub from './index'

describe.only('ButtonGitHub', () => {
    // props
    const href = 'https://github.com/'
    const id = 'my-button'
    const className = 'mr-3'
    const target = true

    // elem
    const Elem = (
        <ButtonGitHub
            href={href}
            id={id}
            className={className}
            target={target}
        />
    )
    const { getByTestId, getByText } = render(Elem)
    const el = getByTestId('button-github')

    test('if exist', () => {
        expect(el).toBeInTheDocument()
        expect(getByText('GitHub')).toBeInTheDocument()
    })

    it('should have all props', () => {
        expect(el).toHaveAttribute('href', href)
        expect(el).toHaveAttribute('target', '_blank')
        expect(el).toHaveClass(className)
    })
})
