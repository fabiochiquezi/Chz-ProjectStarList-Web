import { FC } from 'react'
import Link from 'next/link'

interface props {
    onChangeMenu: () => void
    userName: string
    route: string
}

const activeCSS = 'text-orange-400'
const LiCSS = 'w-3/4 lg:w-auto border-b-2 border-gray-800 lg:border-none'
const LinkCSS =
    'w-full lg:w-auto py-4 inline-block md:py-10 lg:py-0 simple-button'

const MainMenu: FC<props> = ({ onChangeMenu, userName, route }) => (
    <nav data-cy="menu-structure">
        <ul className="flex flex-col items-center text-center text-2xl lg:flex-row lg:mt-[2px]">
            <li className={LiCSS}>
                <Link href="/new/movies">
                    <a
                        className={`md:text-3xl lg:text-[14px] lg:mr-6 ${LinkCSS} ${
                            route === '/new/[type]' && activeCSS
                        }`}
                        onClick={onChangeMenu}
                    >
                        NEW
                    </a>
                </Link>
            </li>
            <li className={LiCSS}>
                <Link href={`/${userName}`}>
                    <a
                        className={`md:text-3xl lg:text-[14px] lg:mr-6 ${LinkCSS} ${
                            route === '/[user]' && activeCSS
                        }`}
                        onClick={onChangeMenu}
                    >
                        MY LIST
                    </a>
                </Link>
            </li>
        </ul>
    </nav>
)

export { MainMenu }
