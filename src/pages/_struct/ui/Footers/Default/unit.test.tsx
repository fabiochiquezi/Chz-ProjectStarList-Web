import { render, screen } from '@testing-library/react'
import { getTimeNow } from './getDate'
import { Footer } from '.'

describe('Footer', () => {
  test('starlist div', () => {
    render(<Footer />)
    const text = '© All rights reserved -'
    const rights = screen.getByText(text)
    expect(rights).toBeInTheDocument()
    expect(rights.textContent).toBe(`${text} ${getTimeNow()}`)
  })

  test('links div', () => {
    render(<Footer />)
    const github: HTMLAnchorElement = screen.getByText('- My GitHub')
    expect(github).toBeInTheDocument()
    expect(github.href).toBe('https://github.com/fabiochiquezi')
  })


  test('github div', () => {
    render(<Footer />)
    const textAndLink = 'https://github.com/fabiochiquezi/Chz-ProjectStarList-Web'
    const github: HTMLAnchorElement = screen.getByText(textAndLink)
    expect(github).toBeInTheDocument()
    expect(github.href).toBe(textAndLink)
  })

  test('follow-me div', () => {
    render(<Footer />)
    const discord = screen.getByText('Chiquezi#3816')
    const github: HTMLAnchorElement = screen.getByTestId('Footer-GitHubIcon')
    const whatsapp: HTMLAnchorElement = screen.getByTestId('Footer-WhatsAppIcon')
    expect(discord).toBeInTheDocument()
    expect(github.href).toBe('https://github.com/fabiochiquezi')
    expect(whatsapp.href).toBe('https://api.whatsapp.com/send?phone=5519983127035&text=Hi%20there!')
  })
})
