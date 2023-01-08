import { fireEvent, render, screen } from '@testing-library/react'
import { Pagination } from './index'

describe('Pagination', () => {
  test('changePage', () => {
    const props: any = { page: 1, changePage: jest.fn(), maxPages: 10 }
    render(<Pagination {...props} />)
    const li2 = screen.getByText(2)
    const li3 = screen.getByText(3)
    fireEvent.click(li2)
    fireEvent.click(li3)
    expect(props.changePage).toBeCalledTimes(2)
  })

  test('data 01', () => {
    const props: any = { page: 1, changePage: jest.fn(), maxPages: 10 }
    render(<Pagination {...props} />)
    const el = screen.getByTestId('Pagination')
    expect(el).toBeInTheDocument()
    expect(screen.getByText(1)).toBeInTheDocument()
    expect(screen.getByText(2)).toBeInTheDocument()
    expect(screen.getByText(3)).toBeInTheDocument()
  })

  test('data 02', () => {
    const props: any = { page: 4, changePage: jest.fn(), maxPages: 10 }
    render(<Pagination {...props} />)
    expect(screen.getByText(3)).toBeInTheDocument()
    expect(screen.getByText(4)).toBeInTheDocument()
    expect(screen.getByText(5)).toBeInTheDocument()
  })

  test('data 03', () => {
    const props: any = { page: 10, changePage: jest.fn(), maxPages: 10 }
    render(<Pagination {...props} />)
    expect(screen.getByText(9)).toBeInTheDocument()
    expect(screen.getByText(10)).toBeInTheDocument()
    expect(
      document.querySelector('li:nth-child(3)')
    ).not.toBeInTheDocument()
  })
})
