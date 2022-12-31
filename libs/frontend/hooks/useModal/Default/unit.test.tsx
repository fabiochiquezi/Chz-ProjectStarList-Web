import { fireEvent, render, screen } from '@testing-library/react'
import { Modal } from './index'

describe('Modal', () => {
  const props = {
    isOpen: false,
    closeModal: jest.fn()
  }

  test('data', () => {
    render(<Modal {...props}><p>test</p></Modal>)
    const el = screen.getByTestId('Modal')
    const children = screen.getByText('test')
    expect(el).toBeInTheDocument()
    expect(children).toBeInTheDocument()
  })

  test('closeModal click', () => {
    render(<Modal {...props}><p>test</p></Modal>)
    const el = document.querySelector('.absolute')
    if (el) fireEvent.click(el)
    expect(props.closeModal).toBeCalledTimes(1)
  })

  test('closeModal keyboard', () => {
    render(<Modal {...props}><p>test</p></Modal>)
    const el = screen.getByTestId('Modal')
    fireEvent.keyDown(el, {
      key: 'Escape',
      code: 'Escape',
      keyCode: 27,
      charCode: 27
    })
    expect(props.closeModal).toBeCalledTimes(1)
  })
})
