import React from 'react'
import Logo from 'public/Logo'
import { useSetAuth } from 'context/AuthContext/types'
import GitHubButton from 'components/Buttons/GitHub'
import ButtonnSignIn1 from 'components/Buttons/SignIn'

const HeaderLogin: React.FC = () => {
    const signIn = useSetAuth()

    return (
        <header className="absolute w-full">
            <div className="flex justify-between items-center container mx-auto px-4 py-6 bg-transparent">
                <Logo className="z-10" />
                <div className="z-10 flex items-center">
                    <GitHubButton
                        href="https://github.com/fabiochiquezi"
                        className="md:mr-3"
                    />
                    <ButtonnSignIn1
                        onClick={signIn.signIn}
                        className="z-50 hidden md:flex"
                        id="btn-signIn-1"
                    />
                </div>
            </div>
        </header>
    )
}

export default HeaderLogin
