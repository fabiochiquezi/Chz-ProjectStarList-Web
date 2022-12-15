import { render, screen } from '@testing-library/react'
import { NavMenu } from '.'

describe('SettingMenu', () => {
  const props = {
    route: 'route',
    userName: 'userName'
  }

  test('elements', async () => {
    render(<NavMenu {...props} />)
    const el = screen.getByTestId('NavMenu')
    const item01 = screen.getByText('NEW')
    const item02 = screen.getByText('MY LIST')
    expect(el).toBeInTheDocument()
    expect(item01).toBeInTheDocument()
    expect(item02).toBeInTheDocument()
  })

  test('links', async () => {
    render(<NavMenu {...props} />)
    const item01 = screen.getByText('NEW').getAttribute('href')
    const item02 = screen.getByText('MY LIST').getAttribute('href')
    expect(item01).toBe('/new/movies')
    expect(item02).toBe(`/${props.userName}`)
  })

  describe('activeLink', () => {
    test('01', async () => {
      render(<NavMenu {...props} route="/new/[type]" />)
      const item01 = screen.getByText('NEW')
      expect(item01).toHaveClass('text-orange-400')
    })
    test('02', async () => {
      render(<NavMenu {...props} route="/[user]" />)
      const item02 = screen.getByText('MY LIST')
      expect(item02).toHaveClass('text-orange-400')
    })
  })
})
