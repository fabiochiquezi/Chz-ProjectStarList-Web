import Link from 'next/link'
import { useRouter } from 'next/router'
import { useAuth } from 'structure/Auth/types'
import { getUserName } from 'helpers/userName'
import { useSetUtils } from 'structure/Utils/types'
import { Dispatch, FC, SetStateAction } from 'react'

interface props {
    setMenu: Dispatch<SetStateAction<boolean>>
}

const LiClass = 'w-3/4 lg:w-auto border-b-2 border-gray-800 lg:border-none'
const AClass =
    'w-full lg:w-auto py-4 inline-block md:py-10 lg:py-0 simple-button'

const Menu: FC<props> = ({ setMenu }) => {
    const { user } = useAuth()
    const router = useRouter()
    const { setContentLoadState } = useSetUtils()
    const pathname = router.pathname
    const activeMenuItem = 'text-orange-400'

    return (
        <nav data-cy="menu-structure" data-testid="menu-structure">
            <ul className="flex flex-col items-center text-center text-2xl lg:flex-row lg:mt-[2px]">
                <li className={LiClass}>
                    <Link href="/new/movies">
                        <a
                            className={`md:text-3xl lg:text-[14px] lg:mr-6 ${AClass} ${
                                pathname === '/new/[type]' && activeMenuItem
                            }`}
                            onClick={() => {
                                setContentLoadState(true)
                                setMenu(false)
                            }}
                        >
                            NEW
                        </a>
                    </Link>
                </li>
                <li className={LiClass}>
                    <Link href={`/${getUserName(user?.email as string)}`}>
                        <a
                            className={`md:text-3xl lg:text-[14px] lg:mr-6 ${AClass} ${
                                router.route === '/[user]' && activeMenuItem
                            }`}
                            onClick={() => {
                                setContentLoadState(true)
                                setMenu(false)
                            }}
                        >
                            MY LIST
                        </a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export { Menu }