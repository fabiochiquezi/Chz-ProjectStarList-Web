import { HomeStructure } from '../../../structure/ui/home/index.page'
import { Thumb } from '../../../libs/frontend/components'
import { Title, List } from './ui'
import catalog from './data.json'

import { FC } from 'react'

const Home: FC = () => {
  const title = <Title
    title="YOUR VIRTUAL MEMORY LIST"
    description="From watching, reading or playing..."
  />

  return (
    <HomeStructure
      heroBgDesktop="./banners/hero-desktop.jpg"
      heroBgMobile="./banners/hero-mobile.jpg"
    >
      <List
        Title={title}
        list={catalog}
        Thumb={(props) => <Thumb {...props} />}
      />
    </HomeStructure>
  )
}

export default Home
