import { Title } from './Title'
import { Thumb } from './Thumb'
import React, { FC } from 'react'
import { Serie, Movie } from 'core'

interface ListType {
  list: Array<Movie | Serie>
  title: string
  description: string
  onClick: (id: string | number) => void
}

const List: FC<ListType> = ({ list, title, description, onClick }) => {
  const limit = 20

  return (
    <main
      data-cy="section-list"
      className="container mx-auto px-4 grid
            sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 xl:grid-cols-7
            justify-items-center lg:justify-items-end 2xl:justify-items-center"
    >
      <Title title={title} description={description} />
      {list?.map((data, index) => {
        if (index >= limit) return null
        const title = 'title' in data ? data.title : data.name
        return (
          <Thumb
            id={data.id}
            key={index}
            title={title}
            thumb={data.thumb}
            onClick={onClick}
          />
        )
      })}
    </main>
  )
}

export { List }
