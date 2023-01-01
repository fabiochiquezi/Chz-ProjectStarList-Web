import Link from 'next/link'
import React, { FC } from 'react'
import { useAuth } from '../_auth/useAuth'
import { SEO } from 'libs/frontend/components'
import { settingsSEO } from 'src/pages/settings'
import { homeSystem, routes } from 'src/pages/routes'

const Page404: FC = () => {
  const { user } = useAuth()
  const homeLink = user ? homeSystem.path : routes.home.path

  return (
    <div>
      <SEO title={settingsSEO[404].title} />
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
