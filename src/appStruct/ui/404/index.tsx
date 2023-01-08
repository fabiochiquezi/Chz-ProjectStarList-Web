import Link from 'next/link'
import React, { FC } from 'react'
import { useAuth } from '../_auth/useAuth'
import { SEO } from '../../../libs/frontend/components'
import { settingsSEO } from '../../../appShare/settings/seo'
import { homeSystem, routes } from '../../../appShare/settings/routes'

const Page404: FC = () => {
  const { user } = useAuth()
  const homeLink = user ? homeSystem.path : routes.home.path

  return (
    <main>
      <SEO title={settingsSEO[404].title} />
      <div className="h-[70vh] w-full bg-skin-base-primary relative z-0 lg:h-[50vh]">
        <div className="flex flex-col items-center absolute left-[50%] top-[50%] ml-[-166px] mt-[-125px] md:mt-[-50px]">
          <h1 className="text-4xl text-center leading-normal mb-4">
            <span>404 - Page not found</span>
          </h1>
          <Link href={homeLink}>
            <a className="text-skin-secondary text-2xl">
              Go back home
            </a>
          </Link>
        </div>
      </div>
    </main>

  )
}

export default Page404
