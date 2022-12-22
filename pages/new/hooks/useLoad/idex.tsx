import { useRouter } from 'next/router'
import { LoadingPage } from 'pages/_share/components'
import { useEffect, useState } from 'react'

function useLoadPage(): any {
  const router = useRouter()
  const [load, setLoad] = useState(false)

  useEffect(() => {
    setLoad(false)
  }, [router])

  return {
    loadProcess: load,
    load: load ? <LoadingPage /> : null,
    setLoad: () => setLoad(true),
    unsetLoad: () => setLoad(false),
    loadPage: (url: string) => {
      setLoad(true)
      router.push(url)
    },
    loadPageScroll: (url: string, position?: number) => {
      window.scrollTo({ top: position ?? 0, behavior: 'smooth' })
      setLoad(true)
      router.push(url)
    }
  }
}

export { useLoadPage }
