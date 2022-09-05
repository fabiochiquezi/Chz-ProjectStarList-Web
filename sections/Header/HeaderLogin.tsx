import React from 'react'
import Logo from 'public/Logo'
import { useSetAuth } from 'context/AuthContext/types'
import ButtonGitHub from 'components/Buttons/ButtonGitHub'
import ButtonnSignIn1 from 'components/Buttons/ButtonnSignIn1'

const HeaderLogin: React.FC = () => {
    const signIn = useSetAuth()

    return (
        <header className="absolute w-full">
            <div className="flex justify-between items-center container mx-auto px-4 py-6 bg-transparent">
                <Logo className="z-10" />
                <div className="z-10 flex items-center">
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
