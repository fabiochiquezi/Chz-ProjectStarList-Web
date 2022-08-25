import React from 'react'
import Logo from '../../public/Logo'
import ButtonnSignIn1 from '../../components/Buttons/ButtonnSignIn1'
import ButtonGitHub from '../../components/Buttons/ButtonGitHub'
import { useSetAuth } from '../../context/AuthContext'

const HeaderLogin: React.FC = () => {
    const signIn = useSetAuth()

    return (
        <header className="absolute w-full">
            <div className="flex justify-between items-center container mx-auto px-4 py-6 bg-transparent">
                <Logo className="z-10" />
                <div className="z-10 flex items-center">
                    {/*
                    <Link href="/about">
                        <a className="text-sm mr-8 border-indigo-500 border-b-2 text-indigo-500 pb-[1px]">
                            ABOUT
                        </a>
                    </Link>
                    */}
                    <ButtonGitHub />
                    <ButtonnSignIn1
                        onClick={signIn.signIn}
                        className="z-50 hidden md:flex"
                    />
                </div>
            </div>
        </header>
    )
}

export default HeaderLogin
