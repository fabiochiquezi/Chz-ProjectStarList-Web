import React, { FC } from 'react'
import { Title } from './Title'
import { Thumb } from './Thumb'

interface ListType {
    catalog: Array<{ title: string; thumb: string }>
}

const List: FC<ListType> = ({ catalog }) => (
    <main
        data-cy="section-list"
        data-testid="List"
        className="container mx-auto px-4 grid sm:grid-cols-3 lg:grid-cols-5
        xl:grid-cols-6 xl:grid-cols-7 justify-items-center
        lg:justify-items-end 2xl:justify-items-center"
    >
        <Title
            title="YOUR VIRTUAL MEMORY LIST"
            description="From watching, reading or playing..."
        />
        {catalog.map(({ thumb, title }, index) => (
            <Thumb key={index} thumb={thumb} title={title} />
        ))}
    </main>
)

export { List }
