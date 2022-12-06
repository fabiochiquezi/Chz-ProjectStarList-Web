import { FC, ReactElement, ReactNode } from 'react'
import { Footer } from '../../components/Footer'
import { LoadContext } from '../../../contexts'

interface IPrivateStructProps {
  children: ReactNode
  Header: ReactElement
}

const PrivateStruct: FC<IPrivateStructProps> = ({ children, Header }) => (
  <div data-testid="StructPrivate">
    {Header}
    <div className="mb-48 sm:mb-36 lg:mb-24">
      <div className="pb-32 md:pb-28 pt-28 md:pt-32 lg:pt-36">
        <LoadContext>
          {children}
        </LoadContext>
      </div>
    </div>
    <Footer />
  </div >
)


export { PrivateStruct }
