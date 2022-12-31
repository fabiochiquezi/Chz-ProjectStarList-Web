import { render, screen } from '@testing-library/react'
import { Thumb } from './index'

describe('Thumb', () => {
  const props = {
    thumb: 'thumb',
    title: 'title'
  }

  test('data', () => {
    const Elem = <Thumb {...props} />
    render(Elem)
    const el = screen.getByTestId('Thumb')
    const img = document.querySelector('img')

    expect(el).toBeInTheDocument()
    expect(img?.src).toBe(`http://localhost/${props.thumb}`)
    expect(img?.alt).toBe(props.title)
    expect(img?.title).toBe(props.title)
  })
})
