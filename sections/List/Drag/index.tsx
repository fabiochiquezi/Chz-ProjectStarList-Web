import { useRouter } from 'next/router'
import { catalogI } from 'store/catalog/types'
import { useCatalogStore } from 'store/catalog'
import { AddThumb } from 'components/Thumbs/Add'
import { useAuth } from 'context/AuthContext/types'
import { LoadButton } from 'components/Buttons/Load'
import { Title, TitleEmpty } from '../components/Title'
import { useSetUtils } from 'context/UtilsContext/types'
import { setCatalogList } from 'firebase/catalog/setList'
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
    const store = useCatalogStore(state => state)
    const { query } = useRouter()
    const { user } = useAuth()
    const type = query.type as string
    const { modal, popSave, alert } = useSetUtils()
    const [limit, setLimit] = useState(15)
    const max = catalog ? catalog.length : 0

    const TitleDefault = <Title titleH1={title} description={description} />
    const TitlePage = (): ReactElement => (!max ? TitleEmpty : TitleDefault)

    function turnUpLimit(): void {
        setLimit(limit => limit + 15)
    }

    const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
        if (!user) return

        try {
            popSave.open()
            const newData = store.data[type].map(
                (item: catalogI, index: number) => {
                    if (index === dragIndex) return store.data[type][hoverIndex]
                    if (index === hoverIndex) return store.data[type][dragIndex]
                    return item
                }
            )
            store.setData(newData, type)
            setCatalogList(type, user.uid, newData)
        } catch (e) {
            console.log(e, 'error')
            alert.open('Sorry, but something went wrong. Try again', 2)
        } finally {
            popSave.close(600)
        }
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

            {store.data[type].map((card: catalogI, i: number) => {
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
