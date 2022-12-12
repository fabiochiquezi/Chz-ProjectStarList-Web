import { FC, ReactElement, useEffect, useRef } from 'react'
import { Loading } from '../Default'

export interface ILoadingHOC {
  data: unknown
  children: ReactElement
}

const LoadingHOC: FC<ILoadingHOC> = ({ data, children }) => {
  const loadingRef = useRef<HTMLDivElement>(null)
  const childrenRef = useRef<HTMLDivElement>(null)
  const invalidData = data === null || data === undefined || data === true
  const options = { duration: 600 }

  function remove(elem: HTMLDivElement | null): void {
    setTimeout(() => {
      elem?.classList.remove('block')
      elem?.classList.add('take-on')
    }, options.duration)
  }

  function appear(elem: HTMLDivElement | null): void {
    elem?.classList.remove('take-off')
    elem?.classList.add('take-on')
  }

  function showLoad(): void {
    childrenRef.current?.classList.add('fade-out')
    childrenRef.current?.classList.remove('fade-in')
    loadingRef.current?.classList.remove('fade-out')
    loadingRef.current?.classList.add('fade-in')
    remove(childrenRef.current)
    appear(loadingRef.current)
  }

  function showChildren(): void {
    childrenRef.current?.classList.remove('fade-out')
    childrenRef.current?.classList.add('fade-in')
    loadingRef.current?.classList.add('fade-out')
    loadingRef.current?.classList.remove('fade-in')
    remove(loadingRef.current)
    appear(childrenRef.current)
  }

  useEffect(() => {
    if (invalidData) showLoad()
    if (!invalidData) showChildren()
  }, [data])

  return (
    <div>
      <div ref={loadingRef}><Loading height="h-[550px]" /></div>
      <div ref={childrenRef}>{children}</div>
    </div>
  )
}

export { LoadingHOC }
