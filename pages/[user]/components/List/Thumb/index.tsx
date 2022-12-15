import { FC, useRef } from 'react'
import { ArrowRight1 } from './icons'
import styles from './styles.module.css'
import type { Identifier } from 'dnd-core'
import { useDrag, useDrop } from 'react-dnd'
import { CloseIcon } from '../../../../_share/assets'

interface IUseDropCollect {
  handlerId: Identifier | null;
  isOver: boolean
}

export interface DragItem {
  index: number
  id: string
  type: string
}

interface ThumbProps {
  id: any
  thumb: string
  max: number
  index: number
  openModalUpdate: (id: string) => void
  openModalDelete: (id: string) => void
  moveCard: (dragIndex: number, hoverIndex: number) => void
}

const Thumb: FC<ThumbProps> = (props) => {
  const { id, thumb, index, moveCard, max, openModalUpdate, openModalDelete } = props
  const ref = useRef<HTMLDivElement>(null)
  const ItemTypes = { CARD: 'card' }

  const [{ handlerId, isOver }, drop] = useDrop<DragItem, any, IUseDropCollect>({
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
      const isTheSameItem = dragIndex === hoverIndex
      if (isTheSameItem) return
      moveCard(dragIndex, hoverIndex)
      item.index = hoverIndex
    }
    /* hover(item: DragItem, monitor) { } */
  })

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: () => ({ id, index }),
    collect: (monitor: any) => ({ isDragging: monitor.isDragging() })
  })

  drag(drop(ref))
  return (
    <div
      ref={ref}
      key={index}
      style={{ opacity: isOver ? 0 : 1 }}
      data-cy="thumb-default"
      data-handler-id={handlerId}
      data-testid="thumb-default"
      className={`thumb mb-20 w-[170px] order-3 cursor-pointer lg:mb-16 lg:col-span-1 xl:scale-90 2xl:scale-100 relative ${styles.Box}`}
    >
      <div
        className="w-[170px] h-[220px] overflow-hidden anim-button"
        onClick={() => openModalUpdate(id)}
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
      <div className={`text-center w-[170px] mx-auto mt-3 inline-block flex items-center justify-between ${styles.BarIcons}`}>
        <div
          className={styles.ArrowLeftUp}
          onClick={() => index !== 0 && moveCard(index, index - 1)}
        >
          <ArrowRight1 color="#333" />
        </div>
        <div
          data-cy="btnOpen-delForm"
          className={styles.CloseIcon}
          onClick={() => openModalDelete(id)}
        >
          <CloseIcon strokeColor="#ef4444" width={22} height={18} />
        </div>
        <div
          className={styles.ArrowRightDown}
          onClick={() => index !== max && moveCard(index, index + 1)}
        >
          <ArrowRight1 color="#333" />
        </div>
      </div>
    </div >
  )
}

export { Thumb }
