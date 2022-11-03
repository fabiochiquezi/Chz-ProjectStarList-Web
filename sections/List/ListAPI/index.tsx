import React, { FC } from 'react'
import { Thumb } from 'components/Thumbs/Api'
import { MovieT } from 'types/TMDB'

interface props {
    catalog: MovieT[]
    title: string
}

const containerClass = `container mx-auto px-4 grid
sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 xl:grid-cols-7
justify-items-center lg:justify-items-end 2xl:justify-items-center`

const ListAPI: FC<props> = ({ catalog, title }) => {
    // const { modal } = useSetUtils()
    const limit = 20

    return (
        <main className={containerClass} data-cy="section-list">
            {/* <AddThumb onClick={() => modal.openAddItem()} /> */}
            <h1 className="lg:col-span-1 self-center mb-[64px] text-center">
                <span className="text-[44px] lg:text-[42px] xl:text-[46px] 2xl:text-[44px] leading-tight lg:leading-normal dark:text-orange-600 font-bold uppercase">
                    {title}
                </span>
                <br />
                <span>+ to your list</span>
            </h1>
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
