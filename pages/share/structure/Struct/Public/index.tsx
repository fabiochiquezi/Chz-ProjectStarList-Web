import Head from 'next/head'
import { Footer } from 'structure/Footer'
import React, { FC, ReactNode } from 'react'
import { Header } from '../../../structure/Header/Public'

interface props {
    children: ReactNode
    titleSEO: string
    descriptionSEO: string
}

const Struct: FC<props> = ({ children, titleSEO, descriptionSEO }) => {
    return (
        <div>
            <Head>
                <title>{titleSEO}</title>
                <meta name="description" content={descriptionSEO} />
            </Head>
            <Header />
            <div className="mb-48 sm:mb-36 lg:mb-24">{children}</div>
            <Footer />
        </div>
    )
}

export { Struct }
