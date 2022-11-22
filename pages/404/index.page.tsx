import Link from 'next/link'
import React, { FC } from 'react'
import { useAuth } from '../share/context'
import { routes } from 'pages/share/settings'
import { MixedStruct } from '../share/structure'

const Page404: FC = () => {
    const { user } = useAuth()
    const homeLink = user ? routes.catalog : routes.login

    return (
        <MixedStruct
            titleSEO="Star List | My List"
            descriptionSEO="See all of your memories about movies, series, animations, books and games"
        >
            <div
                className="h-[70vh] w-full bg-primary relative z-0 lg:h-[50vh]"
                data-cy="404-page"
            >
                <div className="flex flex-col items-center absolute left-[50%] top-[50%] ml-[-166px] mt-[-125px] md:mt-[-50px]">
                    <h1 className="text-4xl text-center leading-normal mb-4">
                        <span>404 - Page not found</span>
                    </h1>
                    <Link href={homeLink}>
                        <a className="text-indigo-500 text-2xl">Go back home</a>
                    </Link>
                </div>
            </div>
        </MixedStruct>
    )
}

export default Page404
