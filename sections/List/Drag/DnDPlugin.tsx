import { DraggableThumb } from 'components/Thumbs/Draggable'
import React, { ReactElement, useCallback, useState } from 'react'
import { catalogI } from 'store/catalog/types'

interface ReturnDnD {
    cards: catalogI[]
    renderCard: (
        card: {
            id: number
            thumb: string
        },
        index: number
    ) => ReactElement
}

const DragAndDropPlugin = (catalog: catalogI[]): ReturnDnD => {
    const [cards, setCards] = useState(catalog)

    const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
        setCards((prevCards: catalogI[]) => {
            return prevCards.map((item, index) => {
                if (index === dragIndex) return prevCards[hoverIndex]
                if (index === hoverIndex) return prevCards[dragIndex]
                return item
            })
        })
    }, [])

    const renderCard = useCallback(
        (card: { id: number; thumb: string }, index: number) => {
            return (
                // Define Thumb here
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
    return { cards, renderCard }
}

export { DragAndDropPlugin }
