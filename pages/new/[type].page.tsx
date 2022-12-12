import Head from 'next/head'
import { Data } from './types'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { Menu } from './components/Menu'
import { useMenu } from './hooks/useMenu'
import { useAlert } from '../share/portals'
import { useAuth } from '../share/contexts'
import { useLoad } from './hooks/useLoad/idex'
import { getServerSideProps } from './api/ssr'
import { Movie, Serie, Resp } from '../share/types'
import { ErrorDefault, Loading, Modal } from '../share/components'
import { Pagination } from './components/Pagination'
import { FC, useCallback, useState } from 'react'
import { submitModalFirebase } from './fns/submitModal/firebase'
import { LoadingHOC } from 'pages/share/components/Loadings/LoadingHOC'

const AddModal = dynamic(
  async () => await import('./components/AddModal').then(m => m.AddModal)
)
const List = dynamic(
  async () => await import('./components/List').then(m => m.List),
  { loading: () => <Loading /> }
)

interface SRRData {
  data: Resp<Data<Movie | Serie>>
}

const New: FC<SRRData> = ({ data }) => {
  const router = useRouter()
  const { ok, request } = data
  if (!ok) return <ErrorDefault />

  const alert = useAlert()
  const { user } = useAuth()
  const { setLoad, loadProcess } = useLoad()

  const { results, total_pages: totalPages } = request.workList
  const { page, type, search, genre } = router.query
  const [addModal, setAddModal] = useState({ state: false, item: '' })
  const {
    changeCatalog,
    changePage,
    genreFilter,
    resetSearch,
    searchFn
  } = useMenu(setLoad, search, type, genre)

  const closeModal = (): void => setAddModal(prev => ({ ...prev, state: false }))

  const AddModalWork = useCallback(() => {
    return addModal.state ? (
      <Modal closeModal={closeModal}>
        <AddModal
          closeModal={closeModal}
          onSubmit={async data => {
            try {
              const userName = String(user?.userName)
              const itemId = addModal.item
              await submitModalFirebase(results, itemId, userName)(data)
              alert.success('okkkk')
            } catch (e) {
              console.log(e)
              alert.error('noooooo')
            } finally {
              // closeModal(setAddModal)
            }
          }}
        />
      </Modal>
    ) : null
  }, [addModal.state])

  return (
    <div>
      <Head>
        <title>Star List | New Works</title>
        <meta
          name="description"
          content="Search for new works to add to your list"
        />
      </Head>
      <div>
        <AddModalWork />
        <Menu
          genreList={request.genreList}
          routerType={String(type)}
          routerGenre={String(genre)}
          searchFn={searchFn}
          changeCatalog={changeCatalog}
          resetSearch={resetSearch}
          genreFilter={genreFilter}
        />
        <LoadingHOC data={loadProcess}>
          <List
            list={results ?? []}
            title={type as string}
            description="add + to your list"
            onClick={(id: string | number) => {
              setAddModal({ state: true, item: String(id) })
            }}
          />
        </LoadingHOC>
        <Pagination
          page={parseInt(String(page)) || 1}
          maxPages={totalPages ?? 1}
          changePage={changePage}
        />
      </div>
    </div>
  )
}

export default New
export { getServerSideProps }
