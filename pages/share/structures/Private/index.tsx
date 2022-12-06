import { FC, ReactNode } from 'react'
import { LoadContext } from '../../contexts'
import { Footer } from '../components/Footer'
import { Header } from './components/Header/extended'


interface IPrivateStructProps { children: ReactNode }

const PrivateStruct: FC<IPrivateStructProps> = ({ children }) => (
  <div data-testid="StructPrivate">
    <Header />
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
