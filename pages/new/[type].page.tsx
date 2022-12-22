import { FC } from 'react'
import Head from 'next/head'
import { Data } from './types'
import dynamic from 'next/dynamic'
import { Resp } from 'pages/types'
import { Movie, Serie } from 'core'
import { useRouter } from 'next/router'
import { useAuth } from '../_share/contexts'
import { FormikHOC } from 'pages/_share/HOC'
import { getServerSideProps } from './api/ssr'
import { Menu, Pagination } from './components'
import { useLoadPage } from '../_share/hooks'
import { LoadingHOC } from 'pages/_share/components'
import useModalForm from 'pages/_share/hooks/useModalForm'
import { submitModalFirebase } from './fns/submitModal/firebase'
import { ErrorDefault, LoadingPage, ModalBox } from '../_share/components'
import { FormAddFields, initialValues, validation } from './components/FormAdd'

const List = dynamic(
  async () => await import('./components/List').then(m => m.List),
  { loading: () => <LoadingPage /> }
)

interface SRRData {
  data: Resp<Data<Movie | Serie>>
}

const New: FC<SRRData> = ({ data }) => {
  const { ok, request } = data
  if (!ok) return <ErrorDefault />

  const router = useRouter()
  const { user } = useAuth()
  const loadContent = useLoadPage()
  const addModal = useModalForm(ModalBox, FormikHOC)
  const { workList, genreList } = request

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
          onSubmit={submitModalFirebase(
            workList.results,
            addModal.modalData,
            String(user?.userName)
          )}
        />
        <Menu
          query={router.query}
          genreList={genreList}
          loadPage={loadContent.loadPage}
        />
        <LoadingHOC
          data={loadContent.load}
          animChildren={{ animInClass: 'to-left-in', animOutClass: 'to-left-out' }}
        >
          <List
            list={workList.results ?? []}
            description="add + to your list"
            title={router.query.type as string}
            onClick={(id: string | number) => addModal.openModal({ id })}
          />
        </LoadingHOC>
        <Pagination
          query={router.query}
          push={router.push}
          maxPages={workList.total_pages ?? 1}
          load={() => loadContent.setLoad(true)}
        />
      </div>
    </div >
  )
}

export default New
export { getServerSideProps }
