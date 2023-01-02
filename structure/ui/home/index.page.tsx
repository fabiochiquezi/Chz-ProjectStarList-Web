import { BtnSignIn, SEO } from '../../../libs/frontend/components'
import { settingsSEO } from 'src/pages/settings'
import { useAuth } from '../_auth/useAuth'
import { FC, ReactNode } from 'react'
import { Hero } from './Hero'

type IHomeStructure = FC<{
  children: ReactNode
  heroBgDesktop: string
  heroBgMobile: string
}>

const HomeStructure: IHomeStructure = ({ children, heroBgDesktop, heroBgMobile }) => {
  const { signIn } = useAuth()
  const btnSignIn = <BtnSignIn onClick={signIn} />

  return (
    <div>
      <SEO
        title={settingsSEO.home.title}
        description={settingsSEO.home.description}
      />
      <main>
        <Hero
          BtnSignIn={btnSignIn}
          title="Your' list of great works souvenirs"
          description="Mount your own list of movies, cartoons, series, books and games."
          backgroundDesktop={heroBgDesktop}
          backgroundMobile={heroBgMobile}
        />
        {children}
      </main>
    </div>
  )
}

export { HomeStructure }
