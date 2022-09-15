import { Title, TitleEmpty } from './Title'
import { catalogI } from '../../general/types/catalog'
import { AddThumb } from '../../components/Thumbs/Add'
import { Thumb } from '../../components/Thumbs/Default'
import React, { FC, ReactElement, useState } from 'react'
import { LoadButton } from '../../components/Buttons/Load'
import { useSetUtils } from '../../context/UtilsContext/types'

interface props {
    catalog: catalogI[]
    title: string
    description: string
}

const containerClass = `container mx-auto px-4 grid
sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 xl:grid-cols-7
justify-items-center lg:justify-items-end 2xl:justify-items-center`

const List: React.FC<props> = ({ catalog, title, description }) => {
    const { modal } = useSetUtils()
    const [limit, setLimit] = useState(15)
    const max = catalog ? catalog.length : 0

    const TitleDefault = <Title titleH1={title} description={description} />
    const TitlePage = (): ReactElement => (!max ? TitleEmpty : TitleDefault)

    function turnUpLimit(): void {
        setLimit(limit => limit + 15)
    }

    return (
        <main className={containerClass} data-cy="section-list">
            <TitlePage />
            <AddThumb onClick={() => modal.openAddItem()} />
            {catalog?.map(({ thumb, name }, index) => {
                if (index >= limit) return null
                return (
                    <Thumb
                        key={index}
                        index={index}
                        thumb={thumb}
                        name={name}
                    />
                )
            })}
            {limit < max && catalog.length && (
                <LoadButton onClick={turnUpLimit} />
            )}
        </main>
    )
}

const SimpleList: FC<props> = ({ catalog, title, description }) => {
    const limit = 15

    return (
        <main className={containerClass} data-cy="section-list">
            <Title titleH1={title} description={description} />

            {catalog?.map(({ thumb, name }, index) => {
                if (index >= limit) return null
                return (
                    <Thumb
                        key={index}
                        index={index}
                        thumb={thumb}
                        name={name}
                    />
                )
            })}
        </main>
    )
}

export { List, SimpleList }
