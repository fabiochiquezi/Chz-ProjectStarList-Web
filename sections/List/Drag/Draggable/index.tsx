import React, { useRef } from 'react'
import styles from './styles.module.css'
import type { Identifier } from 'dnd-core'
import { useDrag, useDrop } from 'react-dnd'
import { DragItem, ItemTypes } from './dndTypes'
import CloseIcon from 'general/assets/icons/CloseIcon'
import ArrowRight1 from 'general/assets/icons/ArrowRight1'
import { useSetUtils } from 'structure/Utils/types'

interface ThumbProps {
    id: any
    thumb: string
    index: number
    moveCard: (dragIndex: number, hoverIndex: number) => void
    max: number
}

const DraggableThumb: React.FC<ThumbProps> = ({
    id,
    thumb,
    index,
    moveCard,
    max
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
        drop: (item: DragItem, _monitor) => {
            if (!ref.current) return
            const dragIndex = item.index
            const hoverIndex = index
            // Don't replace items with themselves
            if (dragIndex === hoverIndex) return
            moveCard(dragIndex, hoverIndex)
            item.index = hoverIndex
        }
        /* hover(item: DragItem, monitor) { } */
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

    function handleLeft(): void {
        if (index !== 0) moveCard(index, index - 1)
    }

    function handleRight(): void {
        if (index !== max) moveCard(index, index + 1)
    }

    return (
        <div
            ref={ref}
            data-handler-id={handlerId}
            style={{ opacity }}
            key={index}
            className={`
                thumb mb-20 w-[170px] order-3 cursor-pointer
                lg:mb-16 lg:col-span-1
                xl:scale-90
                2xl:scale-100
                relative
                ${styles.Box}
            `}
            data-cy="thumb-default"
            data-testid="thumb-default"
        >
            <div
                className="w-[170px] h-[220px] overflow-hidden simple-button"
                onClick={() => modal.openAlterItem({ index, thumb })}
            >
                <div className="w-[170px] h-[220px] overflow-hidden rounded skeleton">
                    <img
                        src={thumb}
                        style={{
                            objectFit: 'cover',
                            width: '100%',
                            height: '100%'
                        }}
                        onLoad={e => {
                            const item = e.target as HTMLElement
                            item.style.display = 'inline-block'
                        }}
                        onError={e => {
                            const item = e.target as HTMLElement
                            item.style.display = 'none'
                        }}
                    />
                </div>
            </div>

            <div
                className={`text-center w-[170px] mx-auto mt-3 inline-block flex items-center justify-between ${styles.BarIcons}`}
            >
                <div className={styles.ArrowLeftUp} onClick={handleLeft}>
                    <ArrowRight1 color="#333" />
                </div>

                <div
                    className={styles.CloseIcon}
                    onClick={() => modal.openDeleteItem({ index, thumb })}
                    data-cy="btnOpen-delForm"
                >
                    <CloseIcon strokeColor="#ef4444" width={22} height={18} />
                </div>

                <div className={styles.ArrowRightDown} onClick={handleRight}>
                    <ArrowRight1 color="#333" />
                </div>
            </div>
        </div>
    )
}

export { DraggableThumb }

/* Test
    if (isDragging) {
        return (
            <div className="border-2 border-gray-600 border-dotted  w-[170px] order-3 lg:mb-16 lg:col-span-1 xl:scale-90 2xl:scale-100"></div>
        )
    }
*/

/*
    <p className={`absolute text-xs text-center w-full text-[#555] ${styles.DragP}`}>
        Drag And drop
    </p>

    // Class
    hover:shadow-[0_0px_10px_7px_rgba(22,163,74,0.1)]
*/
