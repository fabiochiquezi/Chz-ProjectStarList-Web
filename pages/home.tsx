import { FC } from 'react'
import { MainHome } from '../src/appCore/ui/home'
import { HomeStructure } from 'src/appStruct/ui/home'
import { currentTheme } from '../src/appShare/settings/themes'

const heroBgMobile = currentTheme.state === 'dark'
  ? './banners/hero-mobile.jpg'
  : 'https://my4kwallpapers.com/wp-content/uploads/2021/06/Anime-Wallpaper.jpg'

const heroBgDesktop = currentTheme.state === 'dark'
  ? './banners/hero-desktop.jpg'
  : 'https://my4kwallpapers.com/wp-content/uploads/2021/06/Anime-Wallpaper.jpg'

export const HomePage: FC = () => (
  <HomeStructure
    bgFrom="rgba(0, 0, 0, 0)"
    bgTo={currentTheme['base-primary']}
    heroBgMobile={heroBgMobile}
    heroBgDesktop={heroBgDesktop}
    heroTitle="Your own list of great works"
    heroDescription='Mount your own list of movies, cartoons, series, books and games.'
  >
    <MainHome />
  </HomeStructure>
)


export default HomePage
