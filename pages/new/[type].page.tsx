import Head from 'next/head'
import { Data } from './types'
import ErrorPage from '../error'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { Menu } from './components/Menu'
import { closeModal } from './fns/closeModal'
import { changePage } from './fns/changePage'
import { useAlert } from '../share/portals'
import { useLoad } from './hooks/useLoad/idex'
import { getServerSideProps } from './api/ssr'
import { resetSearch } from './fns/resetSearch'
import { genreFilter } from './fns/genreFilter'
import { search as searchFn } from './fns/search'
import { Movie, Serie, Resp } from '../share/types'
import { Loading, Modal } from '../share/components'
import { Pagination } from './components/Pagination'
import { useAuth } from '../share/contexts'
import { FC, useCallback, useEffect, useState } from 'react'
import { submitModalFirebase } from './fns/submitModal/firebase'
import { useAppStore } from 'pages/share/stores/app'

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
  const { ok, request } = data
  if (!ok) return <ErrorPage />

  const alert = useAlert()
  const router = useRouter()
  const { unloadUI, loadingUI } = useAppStore()
  const { setLoad, load } = useLoad()

  const { user } = useAuth()
  const { results, total_pages: totalPages } = request.workList
  const { page, type, search, genre } = router.query
  const [addModal, setAddModal] = useState({ state: false, item: '' })

  useEffect(() => {
    unloadUI()
  }, [])

  const changeCatalog = (e: any): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setLoad()
    router.push(e.target.value)
  }

  const AddModalWork = useCallback(() => {
    return addModal.state ? (
      <Modal closeModal={() => closeModal(setAddModal)}>
        <AddModal
          closeModal={() => closeModal(setAddModal)}
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
          searchFn={searchFn(setLoad, type)}
          changeCatalog={changeCatalog}
          resetSearch={resetSearch(setLoad, type)}
          genreFilter={genreFilter(setLoad, type)}
        />
        {load ? <Loading /> : null}
        {!load ? (
          <List
            list={results ?? []}
            title={type as string}
            description="add + to your list"
            onClick={(id: string | number) => {
              setAddModal({ state: true, item: String(id) })
            }}
          />
        ) : null}
        <Pagination
          page={parseInt(String(page)) || 1}
          maxPages={totalPages ?? 1}
          changePage={changePage(setLoad, search, genre, type)}
        />
      </div>
    </div>
  )
}

export default New
export { getServerSideProps }
