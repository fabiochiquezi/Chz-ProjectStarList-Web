import { settingsSEO } from '../../../appShare/settings/seo'
import { useAuth } from '../../../appShare/contexts/useAuth'
import { SEO } from '../../../libs/frontend/components'
import { BtnSignIn } from './BtnSignIn'
import { FC, ReactNode } from 'react'
import { Hero } from './Hero'

type IHomeStructure = FC<{
  children: ReactNode
  heroBgDesktop: string
  heroBgMobile: string
  heroTitle: string
  heroDescription: string
  bgFrom: string
  bgTo: string
}>

const HomeStructure: IHomeStructure = (props) => {
  const { signIn } = useAuth()
  const btnSignIn = <BtnSignIn onClick={signIn} />
  const {
    children,
    heroBgDesktop,
    heroBgMobile,
    heroTitle,
    heroDescription,
    bgFrom,
    bgTo
  } = props

  return (
    <div>
      <SEO
        title={settingsSEO.home.title}
        description={settingsSEO.home.description}
      />
      <main>
        <Hero
          BtnSignIn={btnSignIn}
          title={heroTitle}
          description={heroDescription}
          backgroundDesktop={heroBgDesktop}
          backgroundMobile={heroBgMobile}
          bgFrom={bgFrom}
          bgTo={bgTo}
        />
        {children}
      </main>
    </div>
  )
}

export { HomeStructure }
