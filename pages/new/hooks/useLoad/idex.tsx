import { useRouter } from 'next/router'
import { Loading } from 'pages/_share/components'
import { useEffect, useState } from 'react'

function useLoad(): any {
  const router = useRouter()
  const [load, setLoad] = useState(false)

  useEffect(() => {
    setLoad(false)
  }, [router])

  return {
    loadProcess: load,
    load: load ? <Loading /> : null,
    setLoad: () => setLoad(true),
    unsetLoad: () => setLoad(false)
  }
}

export { useLoad }
