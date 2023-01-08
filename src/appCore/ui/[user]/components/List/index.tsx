import { Thumb } from './Thumb'
import { BtnLoad } from './BtnLoad'
import { getTitle } from './getTitle'
import { IList } from '../../index.page'
import { Title, TitleEmpty } from './Title'
import { Serie, Movie } from '../../../../domain'
import React, { Dispatch, FC, SetStateAction, useCallback, useState } from 'react'

interface props {
  catalogType: string
  list: Array<Movie | Serie>
  setList: Dispatch<SetStateAction<IList>>
  openModalUpdate: () => void
  openModalDelete: () => void
}

const List: FC<props> = ({ catalogType, list, setList, openModalUpdate, openModalDelete }) => {
  const [limit, setLimit] = useState(15)
  const max = list ? list.length : 0
  const shouldShowBtnLoad = limit < max && list.length

  const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
    try {
      const newData = list.map((item, index) => {
        if (index === dragIndex) return list[hoverIndex]
        if (index === hoverIndex) return list[dragIndex]
        return item
      })
      setList(newData)
    } catch (e) {
      console.log(e, 'error')
    }
  }, [])

  const renderCard = useCallback(
    (card: { thumb: string }, index: number) => (
      <Thumb
        id={index}
        key={index}
        index={index}
        max={max - 1}
        thumb={card.thumb}
        moveCard={moveCard}
        openModalUpdate={openModalUpdate}
        openModalDelete={openModalDelete}
      />
    ), [])

  return (
    <div>
      <main
        className="container mx-auto px-4 grid justify-items-center sm:grid-cols-3 lg:grid-cols-5 lg:justify-items-end xl:grid-cols-6 xl:grid-cols-7 2xl:justify-items-center"
      >
        {!max
          ? <TitleEmpty />
          : <Title
            title={getTitle(catalogType).title}
            description={getTitle(catalogType).description}
          />
        }
        {list.map((card, i: number) => {
          const hasExcedLimit = i >= limit
          if (hasExcedLimit) return null
          return renderCard(card, i)
        })}
        {shouldShowBtnLoad && <BtnLoad onClick={() => setLimit(limit => limit + 15)} />}
      </main>
    </div>
  )
}

export { List }
