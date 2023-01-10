import { FC, ReactElement, ReactNode } from 'react'

export type IPrivateStruct = FC<{
  children: ReactNode
  Header: ReactElement
  Footer: ReactElement
}>

const PrivateStruct: IPrivateStruct = ({ children, Header, Footer }) => (
  <div data-testid="PrivateStruct">
    {Header}
    <div className="mb-48 sm:mb-36 lg:mb-24">
      <div className="pb-10 md:pb-28 pt-28 md:pt-32 lg:pt-36">
        {children}
      </div>
    </div>
    {Footer}
  </div >
)


export { PrivateStruct }
