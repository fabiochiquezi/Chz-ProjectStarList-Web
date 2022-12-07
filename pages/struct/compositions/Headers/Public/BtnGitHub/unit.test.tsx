import { BtnGitHub } from './index'
import { render } from '@testing-library/react'

describe('BtnGitHub', () => {
  test('data', () => {
    const props = {
      href: 'https://github.com/',
      id: 'my-button',
      className: 'className',
      target: false
    }
    render(<BtnGitHub {...props} />)
    const el = document.querySelector('a')
    const span = document.querySelector('span')

    expect(el).toBeInTheDocument()
    expect(span?.textContent).toBe('GitHub')
    expect(el).not.toHaveAttribute('target', '_blank')
    expect(el).toHaveClass(props.className)
  })

  test('alternative data', () => {
    const props = { href: 'https://github.com/' }
    render(<BtnGitHub {...props} />)
    const el = document.querySelector('a')
    const span = document.querySelector('span')

    expect(el).toBeInTheDocument()
    expect(span?.textContent).toBe('GitHub')
    expect(el).toHaveAttribute('target', '_blank')
    expect(el?.className).toBe(
      ' btn-transparent boder-gray-900 px-4 py-1 flex items-center'
    )
  })
})
