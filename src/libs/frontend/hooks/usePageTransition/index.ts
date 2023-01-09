import { waitLoadingHOCAnim } from '../../HOC'
import { useState, useEffect } from 'react'
import { NextRouter } from 'next/router'

export type IUseLoadPage = (routes: any[]) => (router: NextRouter) =>
  { loading: boolean; loadPage: (callBack: any) => Promise<void>; }

export const usePageTransition: IUseLoadPage = routes => router => {
  const asPath = router.asPath
  const [loading, setLoading] = useState(false)

  async function loadPage(callBack: any): Promise<void> {
    setLoading(true)
    await waitLoadingHOCAnim(600)
    callBack()
  }

  function isException(url: string): boolean {
    function isRouteMultiContent(): boolean {
      const route = routes.filter(item => item.route === router.route)
      if (route && route[0].multiContent === true) return true
      return false
    }

    function isQueryChange(): boolean {
      const urlQuery = url.split('?')[0]
      const path = asPath.split('?')[0]
      const isQueryChange = urlQuery === path
      if (isQueryChange) return true
      return false
    }

    if (isRouteMultiContent() || isQueryChange()) return true
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
