import { FC, ReactElement, ReactNode } from 'react'

interface IPrivateStructProps {
  children: ReactNode
  Header: ReactElement
  Footer: ReactElement
}

const PrivateStruct: FC<IPrivateStructProps> = ({ children, Header, Footer }) => (
  <div data-testid="StructPrivate">
    {Header}
    <div className="mb-48 sm:mb-36 lg:mb-24">
      <div className="pb-32 md:pb-28 pt-28 md:pt-32 lg:pt-36">
        {children}
      </div>
    </div>
    {Footer}
  </div >
)


export { PrivateStruct }
