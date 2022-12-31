import { IPrivateStruct } from '../../../design'

const PrivateStruct: IPrivateStruct = ({ children, Header, Footer }) => (
  <div data-testid="PrivateStruct">
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
