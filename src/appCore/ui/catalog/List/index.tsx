import { Title, TitleEmpty } from './Title'
import { Thumb } from './Thumb'
import React, { FC, useState } from 'react'
import { Serie, Movie } from '../../../domain'
import { BtnLoad } from './BtnLoad'

interface ListType {
  titleData: { title: string, description: string }
  list: Array<Movie | Serie>
  openModalUpdate: () => void
  openModalDelete: () => void
}

const List: FC<ListType> = ({ list, titleData, openModalUpdate, openModalDelete }) => {
  const [limit, setLimit] = useState(15)
  const max = list ? list.length : 0
  const shouldShowBtnLoad = limit < max && list.length

  return (
    <div className='container mx-auto px-4 flex flex-col items-center'>
      <main className="grid grid-cols-2 gap-x-8 sm:gap-x-0 gap-y-8 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 justify-items-center lg:justify-items-end 2xl:justify-items-center sm:w-full mb-20 lg:mb-6 xl:mb-0">
        {!max
          ? <TitleEmpty />
          : <Title
            title={titleData.title}
            description={titleData.description}
            className="hidden lg:block"
          />
        }
        {list?.map((data, index) => (index >= limit ? null
          : (
            <Thumb
              id={data.id}
              key={index}
              title={'title' in data ? data.title : data.name}
              thumb={data.thumb}
              openModalUpdate={openModalUpdate}
              openModalDelete={openModalDelete}
            />
          ))
        )}
      </main>
      {shouldShowBtnLoad && <BtnLoad onClick={() => setLimit(limit => limit + 15)} />}
    </div>
  )
}


export { List }
