import { FC } from 'react'
import Head from 'next/head'
import { useList } from './useList'
import { useModal } from './useModal'
import { useRouter } from 'next/router'
import { DndProvider } from 'react-dnd'
import { Menu } from './components/Menu'
import { List } from './components/List'
import { UpdateItem } from './components/Form/Upd'
import { DeleteItem } from './components/Form/Del'
import { Loading, Modal } from '../share/components'
import { Movie } from '../share/types/Catalog/Movie'
import { Serie } from '../share/types/Catalog/Serie'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { validCatalogURI } from './fns/validCatalogURI'
import { SimpleForm } from 'pages/share/components/Modals/Boxes/SimpleForm'

export type IList = Array<Movie | Serie> | null

const Catalog: FC = () => {
  const { query, asPath } = useRouter()
  const userName = typeof query.user !== 'string' ? '' : query.user
  const catalogURI = typeof query.catalog !== 'string' ? 'doing' : query.catalog
  const { list, setList } = useList(catalogURI, userName, asPath)
  const { modal, closeModal, openUpdateModal, openDeleteModal } = useModal()

  validCatalogURI(catalogURI)
  return (
    <div>
      <Head>
        <title>Star List | My List</title>
        <meta
          name="description"
          content="See all of your memories about movies, series, animations, books and games"
        />
      </Head>
      <main>
        <Menu userName={userName} catalogType={catalogURI} />
        {list === null && <Loading height="h-[550px]" />}
        {list !== null && (
          <DndProvider backend={HTML5Backend}>
            <List
              list={list}
              setList={setList}
              catalogType={catalogURI}
            />
          </DndProvider>
        )}
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

export default Catalog
