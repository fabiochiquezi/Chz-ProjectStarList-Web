import { screen } from '@testing-library/react'
import { useAlert } from '.'

describe('usePortalAlert', () => {
  const { success, error, open, close } = useAlert()

  afterEach(() => {
    const Alert = screen.queryByTestId('Alert')
    if (Alert) close()
  })

  it('success', () => {
    success('success')
    const Alert = screen.getByTestId('Alert')
    expect(Alert.textContent?.trim()).toBe('success')
    expect(Alert).toHaveStyle('backgroundColor: #16a34a')
  })

  it('error', () => {
    error('error')
    const Alert = screen.getByTestId('Alert')
    expect(Alert.textContent?.trim()).toBe('error')
    expect(Alert).toHaveStyle('backgroundColor: #dc2626')
  })

  it('open success', () => {
    open('success', 'yes')
    const Alert = screen.getByTestId('Alert')
    expect(Alert.textContent?.trim()).toBe('yes')
    expect(Alert).toHaveStyle('backgroundColor: #16a34a')
  })

  it('open error', () => {
    open('error', 'no')
    const Alert = screen.getByTestId('Alert')
    expect(Alert.textContent?.trim()).toBe('no')
    expect(Alert).toHaveStyle('backgroundColor: #dc2626')
  })

  it('close', () => {
    open('success', 'yes')
    const Alert = screen.getByTestId('Alert')
    expect(Alert).toBeInTheDocument()
    close()
    expect(Alert).not.toBeInTheDocument()
  })

  it('classID from outside', () => {
    const alert = useAlert('test')
    alert.success('ok')
    const Alert = screen.getByTestId('Alert')
    expect(Alert).toHaveClass('test')
  })

  it('shoudnt add two times', () => {
    success('success')
    success('success')
    const Alert = screen.getAllByTestId('Alert')
    expect(Alert).toHaveLength(1)
  })
})
