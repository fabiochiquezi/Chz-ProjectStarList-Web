import GitHubButton from './index'
import { render, screen } from '@testing-library/react'

describe('ButtonGitHub', () => {
    const href = 'https://github.com/'
    const id = 'my-button'
    const className = 'mr-3'
    const target = true

    const Elem = (
        <GitHubButton
            href={href}
            id={id}
            className={className}
            target={target}
        />
    )
    const { getByTestId } = render(Elem)
    const el = getByTestId('button-github')


    it('should has all props', () => {
        expect(el).toBeInTheDocument()
        expect(screen.getByText('GitHub')).toBeInTheDocument()
        expect(el).toHaveAttribute('href', href)
        expect(el).toHaveAttribute('target', '_blank')
        expect(el).toHaveClass(className)
    })
})
