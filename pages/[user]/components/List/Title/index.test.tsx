import { render, screen } from '@testing-library/react'
import { Title, TitleEmpty } from '.'

describe('Titles', () => {
  test('Title', () => {
    const props = { title: 'title', description: 'description' }
    render(<Title {...props} />)
    const title = screen.getByText(props.title)
    const description = screen.getByText(props.description)
    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
  })
  test('TitleEmpty', () => {
    const props = {
      title: 'YOUR LIST IS EMPTY',
      description: 'Start adding movies, books... Go at the menu to "New" right now!'
    }
    render(<TitleEmpty />)
    const title = screen.getByText(props.title)
    const description = screen.getByText(props.description)
    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
  })
})
