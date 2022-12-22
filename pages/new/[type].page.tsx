import Head from 'next/head'
import { Data } from './types'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { Menu } from './components/Menu'
import { useMenu } from './hooks/useMenu'
import { useAuth } from '../_share/contexts'
import { useLoad } from './hooks/useLoad/idex'
import { getServerSideProps } from './api/ssr'
import { Movie, Serie } from 'core'
import { ErrorDefault, LoadingPage, ModalBox } from '../_share/components'
import { Pagination } from './components/Pagination'
import { FC } from 'react'
import { submitModalFirebase } from './fns/submitModal/firebase'
import { LoadingHOC } from 'pages/_share/components/Loadings/LoadingHOC'
import { Resp } from 'pages/types'
import { FormAddFields, initialValues, validation } from './components/FormAdd'
import useModalForm from 'pages/_share/hooks/useModalForm'
import { FormikHOC } from 'pages/_share/HOC'


const List = dynamic(
  async () => await import('./components/List').then(m => m.List),
  { loading: () => <LoadingPage /> }
)

interface SRRData {
  data: Resp<Data<Movie | Serie>>
}

const New: FC<SRRData> = ({ data }) => {
  const router = useRouter()
  const { ok, request } = data
  if (!ok) return <ErrorDefault />

  const { user } = useAuth()
  const { setLoad, loadProcess } = useLoad()
  const addModal = useModalForm(ModalBox, FormikHOC)

  const { results, total_pages: totalPages } = request.workList
  const { page, type, search, genre } = router.query
  const { changeCatalog, changePage, genreFilter, resetSearch, searchFn } = useMenu(setLoad, search, type, genre)


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
        <addModal.ModalFormHOC
          Fields={FormAddFields}
          validation={validation}
          initialValues={initialValues}
          onSubmit={submitModalFirebase(results, addModal.modalData, String(user?.userName))}
        />
        <Menu
          genreList={request.genreList}
          routerType={String(type)}
          routerGenre={String(genre)}
          searchFn={searchFn}
          changeCatalog={changeCatalog}
          resetSearch={resetSearch}
          genreFilter={genreFilter}
        />
        <LoadingHOC
          data={loadProcess}
          animChildren={{
            animInClass: 'to-left-in',
            animOutClass: 'to-left-out'
          }}
        >
          <List
            list={results ?? []}
            title={type as string}
            description="add + to your list"
            onClick={(id: string | number) => addModal.openModal({ id })}
          />
        </LoadingHOC>
        <Pagination
          page={parseInt(String(page)) || 1}
          maxPages={totalPages ?? 1}
          changePage={changePage}
        />
      </div>
    </div >
  )
}

export default New
export { getServerSideProps }
