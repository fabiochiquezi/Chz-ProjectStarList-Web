import { FC, ReactNode, useEffect, useState } from 'react'
import { LoadUseContext } from './useLoad'
import { NextRouter } from 'next/router'
import { LoadingHOC } from 'pages/share/components/Loadings/LoadingHOC'
import { Loading } from 'pages/share/components'
import { waitAnimEnd } from 'pages/share/settings/general/animation'

type ILoadContext = (router: () => NextRouter) => FC<{ children: ReactNode }>

const LoadContext: ILoadContext = useRouter =>
  function Provider({ children }: { children: ReactNode }) {
    const router = useRouter()
    const asPath = router.asPath
    const [loading, setLoading] = useState(false)

    async function load(callBack: any): Promise<void> {
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
      const handleStart = (url: string): unknown => (isException(url) ? null : setLoading(true))
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

    return (
      <LoadUseContext.Provider
        value={{ loading, load }}
        data-testid="Load"
      >
        <LoadingHOC data={loading} loading={<Loading height="h-[550px]" />}>
          {children}
        </LoadingHOC>
      </LoadUseContext.Provider>
    )
  }

export { LoadContext }
