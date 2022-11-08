import React, { FC } from 'react'
import { Movie } from 'types/TMDB'
import { Title } from './components/Title'
import { Thumb } from 'sections/List/ListAPI/components/Thumb'

interface props {
    catalog: Movie[]
    title: string
}

const ListAPI: FC<props> = ({ catalog, title }) => {
    const limit = 20

    return (
        <main
            data-cy="section-list"
            className="
                container mx-auto px-4 grid
                sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 xl:grid-cols-7
                justify-items-center lg:justify-items-end 2xl:justify-items-center
            "
        >
            <Title title={title} subtitle="add + to your list" />

            {catalog?.map(({ thumb, title }, index) => {
                if (index >= limit) return null
                return (
                    <Thumb
                        key={index}
                        index={index}
                        title={title}
                        thumb={thumb}
                    />
                )
            })}
        </main>
    )
}

export { ListAPI }
