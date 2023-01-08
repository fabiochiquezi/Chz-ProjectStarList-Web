import { FC } from 'react'
import { useRouter } from 'next/router'
import { DndProvider } from 'react-dnd'
import { Movie, Serie } from '../../domain'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { LoadingHOC } from '../../../libs/frontend/HOC'
import { useList, useModal, validCatalogURI } from './fns'
import { settingsSEO } from '../../../appShare/settings/seo'
import { Menu, UpdateItem, DeleteItem, List } from './components'
import { Modal, SimpleForm, SEO } from '../.././../libs/frontend/components'

export type IList = Array<Movie | Serie> | null

export const Catalog: FC = () => {
  const { query, asPath } = useRouter()
  const userName = typeof query.user !== 'string' ? '' : query.user
  const catalogURI = typeof query.catalog !== 'string' ? 'doing' : query.catalog
  const { list, setList } = useList(catalogURI, userName, asPath)
  const { modal, closeModal, openModalUpdate, openModalDelete } = useModal()

  validCatalogURI(catalogURI)

  return (
    <div>
      <SEO {...settingsSEO.catalog} />
      <main>
        <Menu userName={userName} catalogType={catalogURI} />
        <LoadingHOC condition={!list}>
          <DndProvider backend={HTML5Backend}>
            <List
              list={list ?? []}
              setList={setList}
              catalogType={catalogURI}
              openModalUpdate={openModalUpdate}
              openModalDelete={openModalDelete}
            />
          </DndProvider>
        </LoadingHOC>
        {modal.state &&
          <Modal closeModal={closeModal}>
            <SimpleForm closeModal={closeModal}>
              {modal.type === 'update' && <UpdateItem closeModal={closeModal} onSubmit={() => { }} />}
              {modal.type === 'delete' && <DeleteItem />}
            </SimpleForm>
          </Modal>
        }
      </main>
    </div >
  )
}
