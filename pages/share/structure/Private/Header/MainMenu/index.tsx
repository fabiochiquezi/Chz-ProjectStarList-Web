import { FC } from 'react'

interface props {
    onChangeMenu: (newRoute: string) => void
    userName: string
    route: string
}

const activeCSS = 'text-orange-400'
const LiCSS = 'w-3/4 lg:w-auto border-b-2 border-gray-800 lg:border-none'
const LinkCSS =
    'w-full lg:w-auto py-4 inline-block md:py-10 lg:py-0 anim-button'

const MainMenu: FC<props> = ({ onChangeMenu, userName, route }) => (
    <nav data-cy="menu-structure" data-testid="MainMenu">
        <ul className="flex flex-col items-center text-center text-2xl lg:flex-row lg:mt-[2px]">
            <li className={LiCSS}>
                <a
                    onClick={() => onChangeMenu('/new/movies')}
                    className={`md:text-3xl lg:text-[14px] lg:mr-6 ${LinkCSS} ${
                        route === '/new/[type]' && activeCSS
                    }`}
                >
                    NEW
                </a>
            </li>
            <li className={LiCSS}>
                <a
                    onClick={() => onChangeMenu(`/${userName}`)}
                    className={`md:text-3xl lg:text-[14px] lg:mr-6 ${LinkCSS} ${
                        route === '/[user]' && activeCSS
                    }`}
                >
                    MY LIST
                </a>
            </li>
        </ul>
    </nav>
)

export { MainMenu }
