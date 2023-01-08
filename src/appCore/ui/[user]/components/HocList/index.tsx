import { List } from '../List'
import { DndProvider } from 'react-dnd'
import { IList } from 'pages/[user]/index.page'
import { HTML5Backend } from 'react-dnd-html5-backend'
import React, { Dispatch, FC, SetStateAction } from 'react'
import { LoadingPage } from '../../../../../libs/frontend/components'

interface props {
  catalogType: string
  list: IList
  setList: Dispatch<SetStateAction<IList>>
  openModalUpdate: () => void
  openModalDelete: () => void
}

const HocList: FC<props> = ({ list, setList, catalogType, openModalUpdate, openModalDelete }) => {
  if (list === null) return <LoadingPage height="h-[550px]" />

  return (
    <DndProvider backend={HTML5Backend}>
      <List
        list={list}
        setList={setList}
        catalogType={catalogType}
        openModalUpdate={openModalUpdate}
        openModalDelete={openModalDelete}
      />
    </DndProvider>
  )
}

export { HocList }
