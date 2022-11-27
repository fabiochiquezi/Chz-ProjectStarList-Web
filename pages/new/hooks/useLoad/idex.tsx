import { useRouter } from 'next/router'
import { Loading } from 'pages/share/components'
import { useEffect, useState } from 'react'

function useLoad(): any {
    const router = useRouter()
    const [load, setLoad] = useState(false)

    useEffect(() => {
        setLoad(false)
    }, [router])

    return {
        load: load ? <Loading /> : null,
        setLoad: () => setLoad(true),
        unsetLoad: () => setLoad(false)
    }
}

export { useLoad }
