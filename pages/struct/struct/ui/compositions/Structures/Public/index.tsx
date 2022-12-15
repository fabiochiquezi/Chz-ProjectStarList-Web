import React, { FC, ReactElement, ReactNode } from 'react'

interface IPublicProps {
  children: ReactNode
  Header: ReactElement
  Footer: ReactElement
  isRouteMixed: boolean
}

const PublicStruct: FC<IPublicProps> = ({ children, Header, Footer, isRouteMixed }) => (
  <div data-testid="PublicStruct">
    {Header}
    <div className="mb-48 sm:mb-36 lg:mb-24">
      {isRouteMixed
        ? (<div className="pt-48 sm:pt-36 mb-52">{children}</div>)
        : children}
    </div>
    {Footer}
  </div>
)


export { PublicStruct }
