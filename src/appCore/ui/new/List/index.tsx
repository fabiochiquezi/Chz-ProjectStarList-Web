import { Title } from './Title'
import { Thumb } from './Thumb'
import React, { FC } from 'react'
import { Serie, Movie } from '../../../domain'

interface ListType {
  list: Array<Movie | Serie>
  title: string
  description: string
  onClick: (id: string | number) => void
  limit?: number
}

const List: FC<ListType> = ({ list, title, description, onClick, limit = 20 }) => (
  <div className='container mx-auto px-4'>
    <main className="mx-auto max-w-[340px] sm:max-w-[640px] lg:max-w-full grid grid-cols-2 gap-x-8 sm:gap-x-0 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 justify-items-center lg:justify-items-end 2xl:justify-items-center">
      <div className='hidden lg:flex'>
        <Title title={title} description={description} />
      </div>

      {list?.map((data, index) => (index >= limit ? null
        : (
          <Thumb
            id={data.id}
            key={index}
            title={'title' in data ? data.title : data.name}
            thumb={data.thumb}
            onClick={onClick}
          />
        ))
      )}
    </main>
  </div>
)


export { List }
