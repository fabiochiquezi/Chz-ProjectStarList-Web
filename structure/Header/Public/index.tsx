import React from 'react'
import Link from 'next/link'
import { useSetAuth } from '../../Auth/types'
import Logo from 'general/assets/logos/Default'
import { BtnGitHub } from './components/BtnGitHub'
import { BtnSignIn } from './components/BtnSignIn'

const Header: React.FC = () => {
    const signIn = useSetAuth()

    return (
        <header className="absolute w-full">
            <div className="flex justify-between items-center container mx-auto px-4 py-6 bg-transparent">
                <Link href="/">
                    <a className="logo z-10 hover:opacity-80">
                        <Logo />
                    </a>
                </Link>

                <div className="z-10 flex items-center">
                    <BtnGitHub
                        href="https://github.com/fabiochiquezi/Chz-ProjectStarList-Web"
                        className="md:mr-3"
                    />
                    <BtnSignIn
                        onClick={signIn.signIn}
                        className="z-50 hidden md:flex"
                        id="btn-signIn-1"
                    />
                </div>
            </div>
        </header>
    )
}

export { Header }
