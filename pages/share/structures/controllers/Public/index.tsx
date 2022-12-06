import React, { FC, ReactElement, ReactNode } from 'react'
import { isRouteMixed } from 'pages/share/settings'
import { Footer } from '../../components/Footer'

interface IPublicProps {
  children: ReactNode
  Header: ReactElement
  route: string
}

const PublicStruct: FC<IPublicProps> = ({ children, Header, route }) => {
  const isMixed = isRouteMixed(route)

  return (
    <div data-testid="StructPrivate">
      {Header}
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
