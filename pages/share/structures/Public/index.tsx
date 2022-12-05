import { isRouteMixed } from 'pages/share/settings'
import { Footer } from '../components/Footer'
import React, { FC, ReactNode } from 'react'
import Header from './components/Header'
import { useRouter } from 'next/router'

interface IPublic { children: ReactNode }

const PublicStruct: FC<IPublic> = ({ children }) => {
  const router = useRouter()
  const isMixed = isRouteMixed(router.route)

  return (
    <div data-testid="StructPrivate">
      <Header />
      <div className="mb-48 sm:mb-36 lg:mb-24">
        {isMixed
          ? (<div className="pt-48 sm:pt-36 mb-52">{children}</div>)
          : children}
      </div>
      <Footer />
    </div>
  )
}

export { PublicStruct }
