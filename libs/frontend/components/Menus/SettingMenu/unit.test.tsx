import { render, screen } from '@testing-library/react'
import { SettingMenu } from '.'

describe('SettingMenu', () => {
  const props = {
    BtnSignOut: <button>BtnSignOut</button>,
    userName: 'userName'
  }

  test('elements', async () => {
    render(<SettingMenu {...props} />)
    const el = screen.getByTestId('SettingMenu')
    const bgnSignOut = screen.getByText('BtnSignOut')
    const userName = screen.getByText(`${props.userName}`)
    expect(el).toBeInTheDocument()
    expect(bgnSignOut).toBeInTheDocument()
    expect(userName).toBeInTheDocument()
  })

  test('userName < 9 length', () => {
    render(<SettingMenu {...props} />)
    const userName = screen.getByText(`${props.userName}`)
    expect(userName).toBeInTheDocument()
  })

  test('userName > 9 length', () => {
    render(<SettingMenu {...props} userName={'userNameUserName'} />)
    const userName = screen.getByText('userNameU...')
    expect(userName).toBeInTheDocument()
  })
})
