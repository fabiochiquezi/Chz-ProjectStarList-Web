import { useRouter } from 'next/router'
import { catalogI } from 'store/catalog/types'
import { useCatalogStore } from 'store/catalog'
import { AddThumb } from 'components/Thumbs/Add'
import { LoadButton } from 'components/Buttons/Load'
import { Title, TitleEmpty } from '../components/Title'
import { useSetUtils } from 'context/UtilsContext/types'
import { DraggableThumb } from 'components/Thumbs/Draggable'
import React, { ReactElement, useCallback, useState } from 'react'

interface props {
    catalog: catalogI[]
    title: string
    description: string
}

const containerClass = `
    container mx-auto px-4 grid justify-items-center
    sm:grid-cols-3 lg:grid-cols-5
    lg:justify-items-end
    xl:grid-cols-6 xl:grid-cols-7
    2xl:justify-items-center
`

const DragAndDropList: React.FC<props> = ({ catalog, title, description }) => {
    // const { cards, renderCard } = DragAndDropPlugin(catalog)
    const store = useCatalogStore(state => state)
    const { query } = useRouter()
    const type = query.type as string
    const works = store.data[type] as catalogI[]
    const { modal } = useSetUtils()
    const [limit, setLimit] = useState(15)
    const max = catalog ? catalog.length : 0

    const TitleDefault = <Title titleH1={title} description={description} />
    const TitlePage = (): ReactElement => (!max ? TitleEmpty : TitleDefault)

    function turnUpLimit(): void {
        setLimit(limit => limit + 15)
    }

    const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
        console.log(works[hoverIndex])
        const newData = works.map((item, index) => {
            if (index === dragIndex) return works[hoverIndex]
            if (index === hoverIndex) return works[dragIndex]
            return item
        })
        store.setData(newData, type)
    }, [])

    const renderCard = useCallback(
        (card: { thumb: string }, index: number) => (
            <DraggableThumb
                key={index}
                index={index}
                id={index}
                thumb={card.thumb}
                moveCard={moveCard}
            />
        ),
        []
    )

    return (
        <main className={containerClass} data-cy="section-list">
            <TitlePage />
            <AddThumb onClick={() => modal.openAddItem()} />

            {works.map((card, i) => {
                if (i >= limit) return null
                return renderCard(card, i)
            })}

            {limit < max && catalog.length && (
                <LoadButton onClick={turnUpLimit} />
            )}
        </main>
    )
}

export { DragAndDropList }
