import { fireEvent, render, screen } from '@testing-library/react'
import { NavMenu } from '.'

describe('SettingMenu', () => {
  const props: any = {
    route: 'route',
    userName: 'userName',
    onChangePage: jest.fn()
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
    const item01 = screen.getByText('NEW')
    const item02 = screen.getByText('MY LIST')
    fireEvent.click(item01)
    fireEvent.click(item02)
    expect(props.onChangePage).toBeCalledTimes(2)
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
