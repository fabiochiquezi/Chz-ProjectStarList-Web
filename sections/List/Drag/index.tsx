import { catalogI } from 'types/catalog'
import { Title, TitleEmpty } from '../Title'
import { DragAndDropPlugin } from './DnDPlugin'
import { AddThumb } from 'components/Thumbs/Add'
import { LoadButton } from 'components/Buttons/Load'
import React, { ReactElement, useCallback, useState } from 'react'
import { useSetUtils } from 'context/UtilsContext/types'
import { DraggableThumb } from 'components/Thumbs/Draggable'
import { useCatalogStore } from 'store/catalogStore'
import { useRouter } from 'next/router'

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
    const { cards, renderCard } = DragAndDropPlugin(catalog)
    const store = useCatalogStore(state => state)
    const { query } = useRouter()
    const { modal } = useSetUtils()
    const [limit, setLimit] = useState(15)
    const max = catalog ? catalog.length : 0

    const TitleDefault = <Title titleH1={title} description={description} />
    const TitlePage = (): ReactElement => (!max ? TitleEmpty : TitleDefault)

    function turnUpLimit(): void {
        setLimit(limit => limit + 15)
    }

    const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
        const newData = catalog.map((item, index) => {
            if (index === dragIndex) return catalog[hoverIndex]
            if (index === hoverIndex) return catalog[dragIndex]
            return item
        })
        const type = query.type as string
        store.setData(newData, type)
    }, [])

    /*
    const renderCard = useCallback(
        (card: { id: number; thumb: string }, index: number) => {
            return (
                <DraggableThumb
                    key={card.id}
                    index={index}
                    id={card.id}
                    thumb={card.thumb}
                    moveCard={moveCard}
                />
            )
        },
        []
    )
    */

    return (
        <main className={containerClass} data-cy="section-list">
            <TitlePage />
            <AddThumb onClick={() => modal.openAddItem()} />

            {cards.map((card, i) => {
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
