import { useRouter } from 'next/router'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

export type IUseLoadPage = () => {
  load: boolean;
  setLoad: Dispatch<SetStateAction<boolean>>
  loadPage: (url: string) => void;
  loadPageScroll: (url: string, position?: number) => void;
}

const useLoadPage: IUseLoadPage = () => {
  const router = useRouter()
  const [load, setLoad] = useState(false)

  useEffect(() => {
    setLoad(false)
  }, [router])

  return {
    load,
    setLoad,
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
