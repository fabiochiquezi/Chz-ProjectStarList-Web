import { FC, ReactElement, ReactNode, useEffect, useRef } from 'react'
import { Loading } from '../Default'

export interface ILoadingHOC {
  data: unknown
  children: ReactElement | ReactNode
  animChildren?: {
    animInClass: 'fade-in' | 'to-left-in'
    animOutClass: 'fade-out' | 'to-left-out'
  }
}

interface IAnimData {
  el: HTMLElement | null,
  animInClass: string
  animOutClass: string
}

const LoadingHOC: FC<ILoadingHOC> = ({ data, children, animChildren }) => {
  const loadingRef = useRef<HTMLDivElement>(null)
  const childrenRef = useRef<HTMLDivElement>(null)
  const options = { duration: 250 }

  async function animation(removeAnim: IAnimData, appearAnim: IAnimData): Promise<void> {
    await remove(removeAnim)
    show(appearAnim)
  }

  async function remove(removeAnim: IAnimData): Promise<void> {
    const { el, animInClass, animOutClass } = removeAnim
    el?.classList.remove(animInClass)
    el?.classList.add(animOutClass)
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        el?.classList.remove('display-block')
        el?.classList.add('display-none')
        resolve(true)
      }, options.duration)
    })
  }

  function show(appearAnim: IAnimData): void {
    const { el, animInClass, animOutClass } = appearAnim
    el?.classList.remove(animOutClass)
    el?.classList.remove('display-none')
    el?.classList.add(animInClass)
    el?.classList.add('display-block')
  }

  useEffect(() => {
    const loadingDataAnim = {
      el: loadingRef.current,
      animInClass: 'fade-in',
      animOutClass: 'fade-out'
    }
    const childrenDataAnim = {
      el: childrenRef.current,
      animInClass: animChildren?.animInClass ?? 'fade-in',
      animOutClass: animChildren?.animOutClass ?? 'fade-out'
    }
    const invalidData = data === null || data === undefined || data === true
    if (invalidData) animation(childrenDataAnim, loadingDataAnim)
    if (!invalidData) animation(loadingDataAnim, childrenDataAnim)
  }, [data])

  return (
    <div>
      <div ref={loadingRef}><Loading /></div>
      {/* <div ref={loadingRef}><Loading height="h-[550px]" /></div> */}
      <div ref={childrenRef} className="display-none fade-out">{children}</div>
    </div>
  )
}

export { LoadingHOC }
