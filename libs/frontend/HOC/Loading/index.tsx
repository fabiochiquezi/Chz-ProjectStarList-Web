import { Div } from './styles'
import { LoadingPage } from '../../components'
import { waitLoadingHOCAnim } from './animation'
import { FC, ReactElement, ReactNode, useEffect, useRef } from 'react'

export type ILoadingHOC = FC<{
  condition: boolean
  children: ReactElement | ReactNode
  loading?: ReactElement
  callBack?: any
  animChildren?: {
    animInClass: 'fade-in' | 'to-left-in'
    animOutClass: 'fade-out' | 'to-left-out'
  }
}>

interface IAnimData {
  el: HTMLElement | null,
  animInClass: string
  animOutClass: string
}

const LoadingHOC: ILoadingHOC = ({ condition, children, loading, animChildren, callBack }) => {
  const loadingRef = useRef<HTMLDivElement>(null)
  const childrenRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    controlAnimation()
  }, [condition])

  async function controlAnimation(): Promise<void> {
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
    const invalidData = !condition
    if (invalidData) await animation(childrenDataAnim, loadingDataAnim)
    if (!invalidData) await animation(loadingDataAnim, childrenDataAnim)
    if (callBack) await callBack()
  }

  async function animation(removeAnim: IAnimData, appearAnim: IAnimData): Promise<void> {
    await remove(removeAnim)
    show(appearAnim)
  }

  async function remove(removeAnim: IAnimData): Promise<void> {
    const { el, animInClass, animOutClass } = removeAnim
    el?.classList.remove(animInClass)
    el?.classList.add(animOutClass)
    await waitLoadingHOCAnim()
    el?.classList.remove('display-block')
    el?.classList.add('display-none')
  }

  function show(appearAnim: IAnimData): void {
    const { el, animInClass, animOutClass } = appearAnim
    el?.classList.remove(animOutClass)
    el?.classList.remove('display-none')
    el?.classList.add(animInClass)
    el?.classList.add('display-block')
  }

  return (
    <Div>
      <div ref={loadingRef} className="display-none fade-out">{loading ?? <LoadingPage />}</div>
      <div ref={childrenRef} className="display-none fade-out">{children}</div>
    </Div>
  )
}

export { LoadingHOC }
