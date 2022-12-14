import { waitAnimEnd } from './../../share/settings/general/animation'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export type IUseLoadPage = () => { loading: boolean; loadPage: (callBack: any) => Promise<void>; }

const useLoadPage: IUseLoadPage = () => {
  const router = useRouter()
  const asPath = router.asPath
  const [loading, setLoading] = useState(false)

  async function loadPage(callBack: any): Promise<void> {
    setLoading(true)
    await waitAnimEnd(600)
    callBack()
  }

  function isException(url: string): boolean {
    // Disable for the route "new"
    function isRouteNew(): boolean {
      const isPathNew = router.asPath.includes('/new')
      const isUrlNew = url.includes('/new')
      if (isPathNew && isUrlNew) return true
      return false
    }

    function isQueryChange(): boolean {
      const urlQuery = url.split('?')[0]
      const path = asPath.split('?')[0]
      const isQueryChange = urlQuery === path
      if (isQueryChange) return true
      return false
    }

    if (isRouteNew() || isQueryChange()) return true
    return false
  }

  useEffect(() => {
    const handleStart = (url: string): unknown => (isException(url) && !loading ? null : setLoading(true))
    const handleComplete = (): void => setLoading(false)
    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  }, [])

  return { loading, loadPage }
}

export { useLoadPage }
