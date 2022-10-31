import React from 'react'
import Logo from '../../../public/Logo'
import { useSetAuth } from '../../Auth/types'
import { GitHubButton } from '../../../components/Buttons/GitHub'
import { SignInButton01 } from '../../../components/Buttons/SignIn'

const Header: React.FC = () => {
    const signIn = useSetAuth()

    return (
        <header className="absolute w-full">
            <div className="flex justify-between items-center container mx-auto px-4 py-6 bg-transparent">
                <Logo className="z-10" />
                <div className="z-10 flex items-center">
                    <GitHubButton
                        href="https://github.com/fabiochiquezi/Chz-ProjectStarList-Web"
                        className="md:mr-3"
                    />
                    <SignInButton01
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
