import Head from 'next/head'
import { FC, ReactNode } from 'react'
import { Footer } from 'sections/Footer'
import { Header } from 'sections/Header/System'
import { ContentWrapper } from 'structure/ContentWrapper'

interface props {
    children: ReactNode
    titleSEO: string
    descriptionSEO: string
}

const SystemWrapper: FC<props> = ({ children, titleSEO, descriptionSEO }) => {
    return (
        <div>
            <Head>
                <title>{titleSEO}</title>
                <meta name="description" content={descriptionSEO} />
            </Head>
            <Header />
            <div className="mb-48 sm:mb-36 lg:mb-24">
                <ContentWrapper>{children}</ContentWrapper>
            </div>
            <Footer />
        </div>
    )
}

export default SystemWrapper
