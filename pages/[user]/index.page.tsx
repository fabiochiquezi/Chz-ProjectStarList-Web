import { FC } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Movie, Serie } from '../share/types'
import { useList, useModal, validCatalogURI } from './fns'
import { Modal, SimpleForm } from '../share/components'
import { Menu, UpdateItem, DeleteItem } from './components'
import { HocList } from './components/HocList'

export type IList = Array<Movie | Serie> | null

const Catalog: FC = () => {
  const { query, asPath } = useRouter()
  const userName = typeof query.user !== 'string' ? '' : query.user
  const catalogURI = typeof query.catalog !== 'string' ? 'doing' : query.catalog
  const { list, setList } = useList(catalogURI, userName, asPath)
  const { modal, closeModal, openModalUpdate, openModalDelete } = useModal()

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
        <HocList
          list={list}
          setList={setList}
          catalogType={catalogURI}
          openModalUpdate={openModalUpdate}
          openModalDelete={openModalDelete}
        />
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
