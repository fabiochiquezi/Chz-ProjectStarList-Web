import { FC, ReactElement, useEffect, useRef } from 'react'
import { Loading } from '../Default'

export interface ILoadingHOC {
  data: unknown
  children: ReactElement
}

const LoadingHOC: FC<ILoadingHOC> = ({ data, children }) => {
  const invalidData = data === null || data === undefined || data === true

  return (
    <div className="relative">
      <div className={`${invalidData ? 'fade-in' : 'fade-out'} absolute`}>
        <Loading height="h-[550px]" />
      </div>
      <div className={`${invalidData ? 'fade-out' : 'fade-in'} absolute`}>
        {children}
      </div>
    </div>
  )
}

export { LoadingHOC }

// className='opacity-0'
