import { fireEvent, render, screen } from '@testing-library/react'
import { List } from '.'

describe('List', () => {
    const props: any = {
        title: 'title',
        description: 'description',
        list: [{ id: '1', name: 'name', thumb: 'thumb' }],
        onClick: jest.fn()
    }

    test('data', () => {
        render(<List {...props} />)
        const title = screen.getByText(props.title)
        const description = screen.getByText(props.description)
        const thumbs = screen.getAllByTestId('Thumb')
        expect(title).toBeInTheDocument()
        expect(description).toBeInTheDocument()
        expect(thumbs.length).toBeGreaterThan(0)
    })

    test('onClick', () => {
        render(<List {...props} />)
        const thumb = screen.getAllByTestId('Thumb')[0]
        fireEvent.click(thumb)
        expect(props.onClick).toHaveBeenCalledTimes(1)
    })

    test('limit', () => {
        render(
            <List
                {...props}
                list={[
                    { id: '1', name: 'name', thumb: 'thumb' },
                    { id: '1', name: 'name', thumb: 'thumb' },
                    { id: '1', name: 'name', thumb: 'thumb' },
                    { id: '1', name: 'name', thumb: 'thumb' },
                    { id: '1', name: 'name', thumb: 'thumb' },
                    { id: '1', name: 'name', thumb: 'thumb' },
                    { id: '1', name: 'name', thumb: 'thumb' },
                    { id: '1', name: 'name', thumb: 'thumb' },
                    { id: '1', name: 'name', thumb: 'thumb' },
                    { id: '1', name: 'name', thumb: 'thumb' },
                    { id: '1', name: 'name', thumb: 'thumb' },
                    { id: '1', name: 'name', thumb: 'thumb' },
                    { id: '1', name: 'name', thumb: 'thumb' },
                    { id: '1', name: 'name', thumb: 'thumb' },
                    { id: '1', name: 'name', thumb: 'thumb' },
                    { id: '1', name: 'name', thumb: 'thumb' },
                    { id: '1', name: 'name', thumb: 'thumb' },
                    { id: '1', name: 'name', thumb: 'thumb' },
                    { id: '1', name: 'name', thumb: 'thumb' },
                    { id: '1', name: 'name', thumb: 'thumb' },
                    { id: '1', name: 'name', thumb: 'thumb' },
                    { id: '1', name: 'name', thumb: 'thumb' }
                ]}
            />
        )
        const thumbs = screen.getAllByTestId('Thumb')
        expect(thumbs).toHaveLength(20)
    })
})
