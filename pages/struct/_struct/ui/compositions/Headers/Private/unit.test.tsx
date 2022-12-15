import { fireEvent, render, screen } from '@testing-library/react'
import { HeaderPrivate } from '.'

describe('PrivateStruct', () => {
  const props = {
    NavMenu: <nav>NavMenu</nav>,
    SettingMenu: <ul>SettingMenu</ul>
  }

  test('elements', async () => {
    render(<HeaderPrivate {...props} />)
    const PrivateStruct = screen.getByTestId('HeaderPrivate')
    const NavMenu = screen.getByText('NavMenu')
    const SettingMenu = screen.getByText('SettingMenu')
    const BtnHamburger = screen.getByTestId('BtnHamburger')
    const Logo = screen.getByTestId('Logo')
    expect(PrivateStruct).toBeInTheDocument()
    expect(NavMenu).toBeInTheDocument()
    expect(SettingMenu).toBeInTheDocument()
    expect(BtnHamburger).toBeInTheDocument()
    expect(Logo).toBeInTheDocument()
  })

  test('open menu true', () => {
    render(<HeaderPrivate {...props} />)
    const BtnHamburger = screen.getByTestId('BtnHamburger')
    fireEvent.click(BtnHamburger)
    const html = document.querySelector('html')
    const overflow = html?.style.overflow
    expect(overflow).toBe('hidden')
  })

  test('open menu false', () => {
    render(<HeaderPrivate {...props} />)
    const BtnHamburger = screen.getByTestId('BtnHamburger')
    fireEvent.click(BtnHamburger)
    fireEvent.click(BtnHamburger)
    const html = document.querySelector('html')
    const overflow = html?.style.overflow
    expect(overflow).not.toBe('hidden')
    expect(overflow).toBe('auto')
  })
})
