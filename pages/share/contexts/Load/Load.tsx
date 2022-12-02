import { FC, ReactNode, useEffect, useState } from 'react'
import { Loading } from '../../components'
import { LoadUseContext } from './useLoad'
import { NextRouter } from 'next/router'
import { IUseAuth } from '../Auth/useAuth'

type ILoadContext =
  (router: () => NextRouter) =>
    (useAuth: () => IUseAuth) =>
      FC<{ children: ReactNode }>

const LoadContext: ILoadContext = useRouter => useAuth =>
  function Provider({ children }: { children: ReactNode }) {
    const { user } = useAuth()
    const router = useRouter()
    const [loading, setLoading] = useState(false)


    useEffect(() => {
      const handleStart = (url: string): void => { if (url !== router.asPath) setLoading(true) }
      const handleComplete = (url: string): void => { if (url === router.asPath) setLoading(false) }
      router.events.on('routeChangeStart', handleStart)
      router.events.on('routeChangeComplete', handleComplete)
      router.events.on('routeChangeError', handleComplete)

      return () => {
        router.events.off('routeChangeStart', handleStart)
        router.events.off('routeChangeComplete', handleComplete)
        router.events.off('routeChangeError', handleComplete)
      }
    })

    return (
      <LoadUseContext.Provider
        value={{ loading }}
        data-testid="Load"
      >
        {loading ? <Loading /> : children}
      </LoadUseContext.Provider>
    )
  }

export { LoadContext }
