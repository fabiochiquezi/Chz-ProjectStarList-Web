import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Logo from '../public/Logo'
import LogoOrange from '../public/LogoOrange'
import { useTheme } from './ThemeContext'

const HeaderLogin: React.FC = () => {
    const darkTheme = useTheme()
    const [menu, setMenu] = useState(false)

    useEffect(() => {
        window.addEventListener('resize', () => setMenu(false))
    }, [])

    useEffect(() => {
        const body = document.querySelector('body') as HTMLElement
        body.style.overflow = menu ? 'hidden' : 'auto'
    }, [menu])

    return (
        <header
            className="
                flex justify-between items-center
                container mx-auto px-4 py-6 bg-transparent
                absolute sm:left-2/4 sm:-ml-[320px] md:-ml-[384px] lg:-ml-[512px] xl:-ml-[640px] 2xl:-ml-[768px]"
        >
            <Link href="/">
                <a className="logo z-10 hover:opacity-80 mt-1">
                    {darkTheme ? <Logo /> : <LogoOrange />}
                </a>
            </Link>

            <div className="z-50">
                <Link href="/">
                    <a className="btn-solid bg-blue-600 py-[8px] px-5">Enter</a>
                </Link>
            </div>
        </header>
    )
}

export default HeaderLogin
