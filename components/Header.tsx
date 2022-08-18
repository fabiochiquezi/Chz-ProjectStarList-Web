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
        if (menu) hiddenScrollbar()
    }, [menu])

    function hiddenScrollbar() {
        const body = document.querySelector('body') as HTMLElement
        body.style.overflow = menu ? 'hidden' : 'auto'
        window.scrollTo(0, 0)
    }

    return (
        <header className="flex justify-between items-center container mx-auto px-4 pt-6 lg:pt-7 mb-8 h-[43px]">
            <Link href="/">
                <a className="logo z-50 hover:opacity-80">
                    {darkTheme ? <Logo /> : <LogoOrange />}
                </a>
            </Link>

            <MobileButton menu={menu} setMenu={setMenu} />

            <div
                className={`h-screen dark:bg-black lg:dark:bg-transparent
                bg-gray-100 w-screen left-0 top-0 pt-24 md:pt-36 ${menuOpenClass}
                lg:flex lg:w-[82%] xl:w-[85%] lg:h-auto lg:bg-transparent lg:pt-0
                lg:justify-between z-20`}
            >
                <Menu setMenu={setMenu} />

                <ul className="flex mt-16 md:mt-16 justify-between items-center w-3/4 left-0 md:w-3/4 mx-auto lg:mt-0 lg:w-auto lg:mx-0 ">
                    <li className="flex items-center">
                        <SearchButton />
                    </li>

                    <li className="dark:text-gray-500 text-gray-300 lg:ml-8 -mt-1 cursor-pointer">
                        <ButtonTheme />
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header
