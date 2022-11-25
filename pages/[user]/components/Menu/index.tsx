import { useRouter } from 'next/router'
import Link from 'next/link'
import React from 'react'

const Menu: React.FC = () => {
    const router = useRouter()

    return (
        <ul className="container mx-auto px-4 lg:px-4 xl:px-6 2xl:px-10 flex justify-center mb-4 md:mb-10 lg:mb-11 lg:justify-end items-center">
            <li>
                <Link href={`/${router.query.user}?catalog=doing`}>
                    <a
                        className={`w-[70px] h-[32px] border-2 border-white rounded-lg inline-block flex justify-center items-center mr-4 anim-button text-sm ${
                            router.query.catalog === 'doing' ||
                            !router.query.catalog
                                ? 'bg-orange-500 border-orange-500'
                                : 'bg-transparent border-white'
                        }`}
                    >
                        DO
                    </a>
                </Link>
            </li>
            <li>
                <Link href={`/${router.query.user}?catalog=did`}>
                    <a
                        className={`w-[70px] h-[32px] border-2 border-white rounded-lg inline-block flex justify-center items-center mr-4 anim-button text-sm ${
                            router.query.catalog === 'did'
                                ? 'bg-orange-500 border-orange-500'
                                : 'bg-transparent border-white'
                        }`}
                    >
                        DID
                    </a>
                </Link>
            </li>
            <li>
                <Link href={`/${router.query.user}?catalog=illdo`}>
                    <a
                        className={`w-[70px] h-[32px] border-2 border-white rounded-lg inline-block flex justify-center items-center mr-4 anim-button text-sm ${
                            router.query.catalog === 'illdo'
                                ? 'bg-orange-500 border-orange-500'
                                : 'bg-transparent border-white'
                        }`}
                    >
                        I&apos;LL DO
                    </a>
                </Link>
            </li>
        </ul>
    )
}

export { Menu }
