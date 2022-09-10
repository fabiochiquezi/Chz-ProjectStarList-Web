import ButtonGitHub from './index'
const { render, screen } = require('@testing-library/react')

describe('ButtonGitHub', () => {
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
    let el: HTMLElement | null = null

    beforeEach(() => {
        const { getByTestId } = render(Elem)
        el = getByTestId('button-github')
    })

    test('exist', () => {
        expect(el).toBeInTheDocument()
        expect(screen.getByText('GitHub')).toBeInTheDocument()
    })

    it('props', () => {
        expect(el).toHaveAttribute('href', href)
        expect(el).toHaveAttribute('target', '_blank')
        expect(el).toHaveClass(className)
    })
})
