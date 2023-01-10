import { FC } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { Menu } from './Menu/composition'
import { Pagination } from './Pagination'
import { Movie, Serie } from '../../domain'
import { getServerSideProps } from './getData'
import { Resp } from '../../../libs/typescript'
import { IDataForm, sendData } from './sendData'
import { getDataByID } from './sendData/getDataByID'
import { useAlert } from '../../../libs/frontend/portals'
import { Genre, GetList } from 'src/appCore/external/TMDB'
import { useLoadPage } from '../../../libs/frontend/hooks'
import { settingsSEO } from '../../../appShare/settings/seo'
import { useAuth } from '../../../appShare/contexts/useAuth'
import { postCatalog } from '../../events/Catalog/postCatalog'
import { FormAddFields, initialValues, validation } from './Form'
import { FormikHOC, LoadingHOC } from '../../../libs/frontend/HOC'
import useModalForm from '../../../libs/frontend/hooks/useModalForm'
import { ErrorDefault, LoadingPage, ModalBox, SEO } from '../../../libs/frontend/components'
const List = dynamic(async () => await import('./List').then(m => m.List), { loading: () => <LoadingPage /> })

interface SRRData {
  data: Resp<{
    workList: GetList<Movie | Serie>
    genreList: Genre[]
  }>
}

export const New: FC<SRRData> = ({ data }) => {
  const { ok, request } = data
  if (!ok) return <ErrorDefault />

  const router = useRouter()
  const { user } = useAuth()
  const loadContent = useLoadPage()
  const { workList, genreList } = request
  const addModal = useModalForm(ModalBox, FormikHOC)

  const postData = async ({ catalogType, username, list, IDSelected }: IDataForm): Promise<void> =>
    await postCatalog(catalogType, username)(getDataByID(list)(IDSelected) as any)
  const submitToCatalog = sendData(useAlert())(postData)

  return (
    <div>
      <SEO {...settingsSEO.new} />
      <div>
        <addModal.ModalFormHOC
          Fields={FormAddFields}
          validation={validation}
          initialValues={initialValues}
          onSubmit={async ({ catalogType }) => await submitToCatalog({
            catalogType,
            list: workList.results,
            IDSelected: String(addModal.modalData.id),
            username: String(user?.userName)
          })}
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

export { getServerSideProps }
