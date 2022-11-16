import Link from 'next/link'
import { Logo } from '../../../assets'
import { useRouter } from 'next/router'
import { getUserName } from '../../../helpers'
import { FC, useEffect, useState } from 'react'
import { useSetUtils } from '../../Utils/types'
import { MainMenu } from './components/MainMenu'
import { useAuth, useSetAuth } from '../../index'
import { BtnHamburger } from './components/BtnHamburger'
import { SecondaryMenu } from './components/SecondaryMenu'

const Header: FC = () => {
    const router = useRouter()
    const pathname = router.route
    const { user } = useAuth()
    const { signOut } = useSetAuth()
    const [menu, setMenu] = useState(false)
    const menuOpenClass = menu ? 'fixed' : 'hidden'
    const { setContentLoadState } = useSetUtils()
    const userName = user?.displayName.substring(0, 9)

    useEffect(() => {
        window.addEventListener('resize', () => setMenu(false))
    }, [])

    useEffect(() => {
        const body = document.querySelector('html') as HTMLElement
        body.style.overflow = menu ? 'hidden' : 'auto'
    }, [menu])

    function onChangeMenu(): void {
        setContentLoadState(true)
        setMenu(false)
    }

    return (
        <header
            data-cy="header-structure"
            className="
                flex justify-center lg:justify-between items-center
                container mx-auto px-4 py-8 lg:pt-8 mb-8 lg:mb-0 h-[43px]
                absolute sm:left-2/4 sm:-ml-[320px] md:-ml-[384px] lg:-ml-[512px]
                xl:-ml-[640px] 2xl:-ml-[768px] bg-transparent"
        >
            <Link href="/catalog/doing">
                <a className="logo z-10 hover:opacity-80">
                    <Logo />
                </a>
            </Link>

            <BtnHamburger
                opened={menu}
                onClick={() => setMenu(prev => !prev)}
            />

            <div
                className={`h-screen dark:bg-primary lg:dark:bg-transparent
                bg-gray-100 w-screen left-0 top-0 md:pt-36 ${menuOpenClass}
                lg:block lg:w-[82%] xl:w-[86%] 2xl:w-[88%] lg:h-auto
                lg:bg-transparent lg:pt-0 lg:static
                 z-20`}
            >
                <div
                    className="fixed lg:static w-full left-0 top-[50%]
                    -mt-[225px] md:-mt-[325px] lg:-mt-0 lg:top-0 lg:flex
                    lg:justify-between lg:items-center"
                >
                    <MainMenu
                        userName={getUserName(user?.email)}
                        onChangeMenu={onChangeMenu}
                        route={pathname}
                    />
                    <SecondaryMenu
                        signOut={signOut}
                        userName={
                            userName.length > 9 ? `${userName}...` : userName
                        }
                    />
                </div>
            </div>
        </header>
    )
}

export { Header }
