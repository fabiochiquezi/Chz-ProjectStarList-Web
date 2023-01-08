import { Thumb } from '../../../libs/frontend/components'
import { Title } from './List/Title'
import catalog from './data.json'
import { List } from './List'
import { FC } from 'react'

export const MainHome: FC = () => {
  const title = <Title
    title="YOUR VIRTUAL MEMORY LIST"
    description="From watching, reading or playing..."
  />

  return (
    <List
      Title={title}
      list={catalog}
      Thumb={(props) => <Thumb {...props} />}
    />
  )
}

