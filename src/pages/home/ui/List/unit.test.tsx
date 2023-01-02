import { List } from './index'
import { ReactElement } from 'react'
import { render, screen } from '@testing-library/react'


describe('List', () => {
  const catalog = [
    {
      title: 'title',
      thumb: 'thumb'
    },
    {
      title: 'title',
      thumb: 'thumb'
    },
    {
      title: 'title',
      thumb: 'thumb'
    }
  ]
  const Title = <p>Title</p>
  const Thumb = (props: { title: string, thumb: string }): ReactElement =>
    <p>{props.title} - {props.thumb}</p>


  test('elements', () => {
    render(<List list={catalog} Title={Title} Thumb={Thumb} />)
    const El = screen.getByTestId('List')
    const title = screen.getByText('Title')
    const thumbs = screen.getAllByText(`${catalog[0].title} - ${catalog[0].thumb}`)

    expect(El).toBeInTheDocument()
    expect(title).toBeInTheDocument()
    expect(thumbs).toHaveLength(3)
  })
})
