import React, { FC } from 'react'
import { Title } from './Title'
import { Thumb } from './Thumb'

interface ListType {
    catalog: Array<{ title: string; thumb: string }>
    title: string
    description: string
}

const List: FC<ListType> = ({ catalog, title, description }) => (
    <main
        data-cy="section-list"
        data-testid="List"
        className="container mx-auto px-4 grid sm:grid-cols-3 lg:grid-cols-5
        xl:grid-cols-6 xl:grid-cols-7 justify-items-center
        lg:justify-items-end 2xl:justify-items-center"
    >
        <Title title={title} description={description} />

        {catalog.map(({ thumb, title }, index) => (
            <Thumb key={index} thumb={thumb} title={title} />
        ))}
    </main>
)

export { List }
