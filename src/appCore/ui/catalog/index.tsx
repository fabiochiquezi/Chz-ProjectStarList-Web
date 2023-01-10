import { FC } from 'react'
import { Menu } from './Menu'
import { List } from './List'
import { useData } from './useData'
import { UpdateFields } from './Form/Upd'
import { DeleteFields } from './Form/Del'
import { validation } from './Form/Upd/validation'
import { useAuth } from '../../../appShare/contexts/useAuth'
import { settingsSEO } from '../../../appShare/settings/seo'
import useModalForm from 'src/libs/frontend/hooks/useModalForm'
import { FormikHOC, LoadingHOC } from '../../../libs/frontend/HOC'
import { ModalBox, SEO } from '../.././../libs/frontend/components'
import { deleteWork } from 'src/appCore/events/Catalog/deleteWork'
import { updateWork } from 'src/appCore/events/Catalog/updateWork'

export const Catalog: FC = () => {
  const { signInProcess } = useAuth()
  const { userName, catalogType, list, loadingData, titleData, setList } = useData(signInProcess)
  const updateModal = useModalForm(ModalBox, FormikHOC)
  const deleteModal = useModalForm(ModalBox, FormikHOC)
  const deleteWorkFn = deleteWork(catalogType)(userName)

  function removeFromList(uid: string): void {
    const newList: any = list?.filter((item: any) => item.uid !== uid)
    setList(newList)
  }

  return (
    <div>
      <SEO {...settingsSEO.catalog} />
      <main>
        <Menu userName={userName} catalogType={catalogType} />
        <LoadingHOC condition={loadingData || signInProcess}>
          <List
            list={list as any ?? []}
            titleData={titleData}
            openModalUpdate={(uid: string | number) => updateModal.openModal({ uid })}
            openModalDelete={(uid: string | number) => deleteModal.openModal({ uid })}
          />
        </LoadingHOC>
        <updateModal.ModalFormHOC
          Fields={UpdateFields}
          validation={validation}
          initialValues={{ catalogType }}
          onSubmit={async ({ catalogType: newCatalogType }) => {
            if (catalogType === newCatalogType) return
            await updateWork(catalogType, newCatalogType)(userName)(updateModal.modalData.uid)
            setTimeout(() => {
              removeFromList(updateModal.modalData.uid)
            }, 400)
          }}
        />
        <deleteModal.ModalFormHOC
          Fields={DeleteFields}
          initialValues={{}}
          onSubmit={async () => {
            await deleteWorkFn(deleteModal.modalData.uid)
            setTimeout(() => {
              removeFromList(deleteModal.modalData.uid)
            }, 400)
          }}
        />
      </main>
    </div>
  )
}
