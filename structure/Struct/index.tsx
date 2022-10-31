import Head from 'next/head'
import { Footer } from '../Footer'
import { Header } from '../Header/System'
import { FC, ReactElement, ReactNode, useEffect } from 'react'
import { LoadingStruct } from 'structure/Loadings/Default'
import { useSetUtils, useUtils } from 'structure/Utils/types'

interface props {
    children: ReactNode
    titleSEO: string
    descriptionSEO: string
}

const Struct: FC<props> = ({ children, titleSEO, descriptionSEO }) => {
    const { contentLoadState } = useUtils()
    const { setContentLoadState } = useSetUtils()

    const Load = <LoadingStruct />
    const cssMargin = 'pb-32 md:pb-28 pt-28 md:pt-32 lg:pt-36'
    const Content = <div className={cssMargin}>{children}</div>
    const Core = (): ReactElement => (contentLoadState ? Load : Content)

    useEffect(() => {
        setContentLoadState(false)
    }, [])

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
