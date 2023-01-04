import { FC } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { Resp } from '../../../libs/helpers'
import { getServerSideProps } from './api/ssr'
import { Menu, Pagination } from './components'
import { FormikHOC, LoadingHOC } from '../../../libs/frontend/HOC'
import { useLoadPage } from '../../../libs/frontend/hooks'
import { useAuth } from '../../../structure/ui/_auth/useAuth'
import { GenreWatch, GetList, Movie, Serie } from 'src/domain'
import { submitModalFirebase } from './fns/submitModal/firebase'
import useModalForm from '../../../libs/frontend/hooks/useModalForm'
import { FormAddFields, initialValues, validation } from './components/FormAdd'
import { ErrorDefault, LoadingPage, ModalBox, SEO } from '../../../libs/frontend/components'
import { settingsSEO } from '../settings'

const List = dynamic(
  async () => await import('./components/List').then(m => m.List),
  { loading: () => <LoadingPage /> }
)

export interface Data<T extends Movie | Serie> {
  workList: GetList<T>
  genreList: GenreWatch[]
}

interface SRRData { data: Resp<Data<Movie | Serie>> }

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
      <SEO {...settingsSEO.new} />
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
          condition={loadContent.load}
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
