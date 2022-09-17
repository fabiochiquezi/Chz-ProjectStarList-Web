import React, { useRef } from 'react'
import type { Identifier } from 'dnd-core'
import { useDrag, useDrop } from 'react-dnd'
import { useSetUtils } from '../../../context/UtilsContext/types'
import { DragItem, ItemTypes } from './dndTypes'

interface ThumbProps {
    id: any
    thumb: string
    index: number
    moveCard: (dragIndex: number, hoverIndex: number) => void
}

const DraggableThumb: React.FC<ThumbProps> = ({
    id,
    thumb,
    index,
    moveCard
}) => {
    const { modal } = useSetUtils()

    const ref = useRef<HTMLDivElement>(null)
    const [{ handlerId, isOver }, drop] = useDrop<
        DragItem,
        any,
        { handlerId: Identifier | null; isOver: boolean }
    >({
        accept: ItemTypes.CARD,
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
                isOver: monitor.isOver()
            }
        },
        drop: (item: DragItem, monitor) => {
            if (!ref.current) return
            const dragIndex = item.index
            const hoverIndex = index

            // Don't replace items with themselves
            if (dragIndex === hoverIndex) return

            moveCard(dragIndex, hoverIndex)
            item.index = hoverIndex
        }
        /*
        hover(item: DragItem, monitor) {
            if (!ref.current) return
            const dragIndex = item.index
            const hoverIndex = index

            // Don't replace items with themselves
            if (dragIndex === hoverIndex) return

            // moveCard(dragIndex, hoverIndex)
            // item.index = hoverIndex
        }
        */
    })

    const [{ isDragging }, drag] = useDrag({
        type: ItemTypes.CARD,
        item: () => {
            return { id, index }
        },
        collect: (monitor: any) => ({
            isDragging: monitor.isDragging()
        })
    })

    const opacity = isOver ? 0 : 1
    drag(drop(ref))

    /* Test
    if (isDragging) {
        return (
            <div className="border-2 border-gray-600 border-dotted  w-[170px] order-3 lg:mb-16 lg:col-span-1 xl:scale-90 2xl:scale-100"></div>
        )
    }
    */

    return (
        <div
            ref={ref}
            data-handler-id={handlerId}
            style={{ opacity }}
            key={index}
            className={`
                hover:shadow-[0_0px_10px_7px_rgba(22,163,74,0.2)]
                thumb mb-14 w-[170px] order-3 cursor-pointer simple-button
                lg:mb-16 lg:col-span-1
                xl:scale-90
                2xl:scale-100
            `}
            onClick={() => modal.openAlterItem({ index, thumb })}
            data-cy="thumb-default"
            data-testid="thumb-default"
        >
            <div className="w-[170px] h-[220px] overflow-hidden">
                <div
                    className={
                        'w-[170px] h-[220px] overflow-hidden rounded skeleton'
                    }
                >
                    <img
                        src={thumb}
                        onError={e => {
                            const item = e.target as HTMLElement
                            item.style.display = 'none'
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export { DraggableThumb }
