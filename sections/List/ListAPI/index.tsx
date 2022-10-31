import React, { FC } from 'react'
import { catalogI } from '../../../types/catalog'
import { AddThumb } from 'components/Thumbs/Add'
import { SimpleThumb } from '../../../components/Thumbs/Simple'
import { useSetUtils } from 'structure/Utils/types'

interface props {
    catalog: catalogI[]
}

const containerClass = `container mx-auto px-4 grid
sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 xl:grid-cols-7
justify-items-center lg:justify-items-end 2xl:justify-items-center`

const ListAPI: FC<props> = ({ catalog }) => {
    const { modal } = useSetUtils()
    // const limit = 20

    return (
        <main className={containerClass} data-cy="section-list">
            <AddThumb onClick={() => modal.openAddItem()} />
            {catalog?.map(({ thumb }, index) => {
                // if (index >= limit) return null
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

export { ListAPI }
