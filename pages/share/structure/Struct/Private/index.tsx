import Head from 'next/head'
import { Footer } from '../../Footer'
import { useRouter } from 'next/router'
import { Loading } from '../../../components'
import { Header } from '../../Header/Private'
import { FC, ReactElement, ReactNode, useEffect } from 'react'
import { useSetUtils } from '../../../context/Utils/types/setTypes'
import { useUtils } from '../../../context/Utils/types/useTypes'

interface props {
    children: ReactNode
    titleSEO: string
    descriptionSEO: string
}

const Struct: FC<props> = ({ children, titleSEO, descriptionSEO }) => {
    const { contentLoadState } = useUtils()
    const { contentLoad } = useSetUtils()

    const Load = <Loading />
    const cssMargin = 'pb-32 md:pb-28 pt-28 md:pt-32 lg:pt-36'
    const Content = <div className={cssMargin}>{children}</div>
    const Core = (): ReactElement => (contentLoadState ? Load : Content)
    const router = useRouter()

    useEffect(() => {
        contentLoad.close(0)
    }, [router])

    return (
        <div>
            <Head>
                <title>{titleSEO}</title>
                <meta name="description" content={descriptionSEO} />
            </Head>
            <Header />
            <div className="mb-48 sm:mb-36 lg:mb-24">
                <Core />
            </div>
            <Footer />
        </div>
    )
}

export { Struct }
