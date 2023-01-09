import { FC } from 'react'
import { Menu } from './Menu'
import { List } from './List'
import { useData } from './useData'
import { LoadingHOC } from '../../../libs/frontend/HOC'
import { SEO } from '../.././../libs/frontend/components'
import { settingsSEO } from '../../../appShare/settings/seo'
import { useAuth } from '../../../appShare/contexts/useAuth'

export const Catalog: FC = () => {
  const { signInProcess } = useAuth()
  const { userName, catalogType, list, loadingData, titleData } = useData(signInProcess)

  return (
    <div>
      <SEO {...settingsSEO.catalog} />
      <main>
        <Menu userName={userName} catalogType={catalogType} />
        <LoadingHOC condition={loadingData || signInProcess}>
          <List
            list={list ?? []}
            titleData={titleData}
            openModalUpdate={() => console.log('update')}
            openModalDelete={() => console.log('delete')}
          />
        </LoadingHOC>
      </main>
    </div>
  )
}
