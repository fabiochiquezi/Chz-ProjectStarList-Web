import { fireEvent, render, screen } from '@testing-library/react'
import { Genre } from '.'

describe('Genre', () => {
  const props: any = {
    defaultValue: 'aaa',
    genreList: [
      { name: 'aaa', id: 'aaa' },
      { name: 'bbb', id: 'bbb' },
      { name: 'ccc', id: 'ccc' }
    ],
    onChange: jest.fn()
  }

  test('defaultValue', () => {
    render(<Genre {...props} />)
    const el = screen.getByTestId('SelectButton')
    const select = el.querySelector('select') as HTMLSelectElement
    const options = el.querySelectorAll('option')

    expect(el).toBeInTheDocument()
    expect(options).toHaveLength(4)
    expect(select?.value).toBe('aaa')
    fireEvent.change(select, { target: { value: 'bbb' } })
    expect(props.onChange).toHaveBeenCalledTimes(1)
  })
})
