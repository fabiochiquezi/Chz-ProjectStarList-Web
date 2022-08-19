import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Logo from '../public/Logo'
import LogoOrange from '../public/LogoOrange'
import ButtonTheme from './ButtonTheme'
import Menu from './Menu'
import MobileButton from './MobileButton'
import SearchButton from './SearchButton'
import { useTheme } from './ThemeContext'

const Header: React.FC = () => {
    const darkTheme = useTheme()
    const [menu, setMenu] = useState(false)
    const menuOpenClass = menu ? 'fixed' : 'hidden'

    useEffect(() => {
        window.addEventListener('resize', () => setMenu(false))
    }, [])

    useEffect(() => {
        const body = document.querySelector('body') as HTMLElement
        body.style.overflow = menu ? 'hidden' : 'auto'
    }, [menu])

    return (
        <header className="flex justify-center lg:justify-between items-center container mx-auto px-4 py-8 lg:pt-7 mb-8 lg:mb-0 h-[43px] absolute lg:left-2/4 lg:-ml-[530px]  bg-transparent">
            <Link href="/">
                <a className="logo z-10 hover:opacity-80">
                    {darkTheme ? <Logo /> : <LogoOrange />}
                </a>
            </Link>

            <MobileButton menu={menu} setMenu={setMenu} />

            <div
                className={`h-screen dark:bg-primary lg:dark:bg-transparent
                bg-gray-100 w-screen left-0 top-0 md:pt-36 ${menuOpenClass}
                lg:block lg:w-[82%] xl:w-[85%] lg:h-auto lg:bg-transparent lg:pt-0 lg:static
                 z-20`}
            >
                <div className="fixed lg:static w-full left-0 top-[50%] -mt-[225px] lg:-mt-0 lg:top-0 lg:flex lg:justify-between lg:items-center">
                    <Menu setMenu={setMenu} />

                    <ul className="flex flex-col mt-16 md:mt-16 justify-between items-center w-3/4 left-0 md:w-3/4 mx-auto lg:mt-0 lg:w-auto lg:mx-0 lg:flex-row text-center">
                        <li className="flex items-center mb-7 justify-center lg:mb-0 lg:w-auto">
                            <SearchButton />
                        </li>

                        <li className="dark:text-gray-500 text-gray-300 lg:ml-8 -mt-1 cursor-pointer">
                            <ButtonTheme />
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header
