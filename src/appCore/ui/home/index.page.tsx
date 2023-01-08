import { HomeStructure } from '../../../appStruct/ui/home/index.page'
import { currentTheme } from '../../../appShare/settings/themes'
import { Thumb } from '../../../libs/frontend/components'
import { Title } from './List/Title'
import catalog from './data.json'
import { List } from './List'
import { FC } from 'react'

export const Home: FC = () => {
  const title = <Title
    title="YOUR VIRTUAL MEMORY LIST"
    description="From watching, reading or playing..."
  />

  const heroBgMobile = currentTheme.state === 'dark'
    ? './banners/hero-mobile.jpg'
    : 'https://my4kwallpapers.com/wp-content/uploads/2021/06/Anime-Wallpaper.jpg'

  const heroBgDesktop = currentTheme.state === 'dark'
    ? './banners/hero-desktop.jpg'
    : 'https://my4kwallpapers.com/wp-content/uploads/2021/06/Anime-Wallpaper.jpg'

  return (
    <HomeStructure
      bgFrom="rgba(0, 0, 0, 0)"
      bgTo={currentTheme['base-primary']}
      heroBgMobile={heroBgMobile}
      heroBgDesktop={heroBgDesktop}
      heroTitle="Your' list of great works souvenirs"
      heroDescription='Mount your own list of movies, cartoons, series, books and games.'
    >
      <List
        Title={title}
        list={catalog}
        Thumb={(props) => <Thumb {...props} />}
      />
    </HomeStructure>
  )
}

