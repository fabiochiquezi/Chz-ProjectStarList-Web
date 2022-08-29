import React from 'react'
import Head from 'next/head'
import HeaderLogin from '../sections/Header/HeaderLogin'
import { useAuth } from '../context/AuthContext'
import Header from '../sections/Header/Header'
import Link from 'next/link'

const Page404: React.FC = () => {
    const { user } = useAuth()

    return (
        <div>
            <Head>
                <title>Star List | 404</title>
            </Head>
            {user ? <Header /> : <HeaderLogin />}
            <div className="h-[100vh] w-full bg-primary relative z-0 lg:h-[70vh]">
                <div className="flex flex-col items-center absolute left-[50%] top-[50%] ml-[-166px] mt-[-125px] md:mt-[-50px]">
                    <h1 className="text-4xl text-center leading-normal mb-4">
                        <span>404 - Page not found</span>
                    </h1>
                    <Link href={user ? '/catalog/doing' : '/'}>
                        <a className="text-indigo-500 text-2xl">Go back home</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Page404
