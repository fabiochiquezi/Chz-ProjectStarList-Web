import React, { FC } from 'react'
import { SimpleThumb } from '../../../components/Thumbs/Simple'
import { catalogI } from '../../../types/catalog'
import { Title } from '../components/Title'

interface props {
    catalog: catalogI[]
    title: string
    description: string
}

const containerClass = `container mx-auto px-4 grid
sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 xl:grid-cols-7
justify-items-center lg:justify-items-end 2xl:justify-items-center`

const SimpleList: FC<props> = ({ catalog, title, description }) => {
    const limit = 15

    return (
        <main className={containerClass} data-cy="section-list">
            <Title titleH1={title} description={description} />

            {catalog?.map(({ thumb }, index) => {
                if (index >= limit) return null
                return (
                    <SimpleThumb
                        key={index}
                        index={index}
                        thumb={thumb}
                        // name={name}
                    />
                )
            })}
        </main>
    )
}

export { SimpleList }
