import Link from 'next/link'
import Head from 'next/head'
import React, { FC } from 'react'
import { paths } from '../routes'
import { useAuth } from '../_auth/useAuth'

const Page404: FC = () => {
  const { user } = useAuth()
  const homeLink = user ? paths.newMovies : paths.login

  return (
    <div>
      <Head>
        <title>Star List | 404</title>
        <meta
          name="description"
        />
      </Head>
      <div className="h-[70vh] w-full bg-primary relative z-0 lg:h-[50vh]">
        <div className="flex flex-col items-center absolute left-[50%] top-[50%] ml-[-166px] mt-[-125px] md:mt-[-50px]">
          <h1 className="text-4xl text-center leading-normal mb-4">
            <span>404 - Page not found</span>
          </h1>
          <Link href={homeLink}>
            <a className="text-indigo-500 text-2xl">
              Go back home
            </a>
          </Link>
        </div>
      </div>
    </div>

  )
}

export default Page404
