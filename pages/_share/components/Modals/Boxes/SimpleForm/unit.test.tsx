import { fireEvent, render, screen } from '@testing-library/react'
import { SimpleForm } from './index'

describe('Modal', () => {
  const props = {
    isOpen: false,
    closeModal: jest.fn()
  }

  test('data', () => {
    render(<SimpleForm {...props}><p>test</p></SimpleForm>)
    const el = screen.getByTestId('SimpleForm')
    const children = screen.getByText('test')
    expect(el).toBeInTheDocument()
    expect(children).toBeInTheDocument()
  })

  test('closeModal click', () => {
    render(<SimpleForm {...props}><p>test</p></SimpleForm>)
    const el = screen.getByTestId('closeIcon')
    if (el) fireEvent.click(el)
    expect(props.closeModal).toBeCalledTimes(1)
  })
})
