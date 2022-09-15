import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { Footer } from 'sections/Footer'
import { Header, Header as HeaderLogin } from 'sections/Header/System'
import { useAuth } from 'context/AuthContext/types'

const HeadData = (): React.ReactElement => (
    <Head>
        <title>Star List | 404</title>
    </Head>
)

const Page404: React.FC = () => {
    const { user } = useAuth()
    const homeLink = user != null ? '/catalog/doing' : '/'
    const HeaderPage = (): React.ReactElement => {
        return user != null ? <Header /> : <HeaderLogin />
    }

    return (
        <div data-cy="404-page">
            <HeadData />
            <HeaderPage />
            <div className="h-[100vh] w-full bg-primary relative z-0 lg:h-[70vh]">
                <div className="flex flex-col items-center absolute left-[50%] top-[50%] ml-[-166px] mt-[-125px] md:mt-[-50px]">
                    <h1 className="text-4xl text-center leading-normal mb-4">
                        <span>404 - Page not found</span>
                    </h1>
                    <Link href={homeLink}>
                        <a className="text-indigo-500 text-2xl">Go back home</a>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Page404
