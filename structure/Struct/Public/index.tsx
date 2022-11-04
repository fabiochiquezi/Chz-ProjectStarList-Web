import Head from 'next/head'
import { Footer } from 'structure/Footer'
import React, { FC, ReactNode } from 'react'
import { Header } from '../../../structure/Header/Login'

interface props {
    children: ReactNode
    title: string
    description: string
}

const Struct: FC<props> = ({ children, title, description }) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Head>
            <Header />
            <div className="mb-48 sm:mb-36 lg:mb-24">{children}</div>
            <Footer />
        </div>
    )
}

export { Struct }
