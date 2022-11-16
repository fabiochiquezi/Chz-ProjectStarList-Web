import { FC } from 'react'
import Link from 'next/link'
import { useAuth } from '../..'
import { Logo } from '../../../assets'
import { BtnGitHub } from './components/BtnGitHub'
import { BtnSignIn } from './components/BtnSignIn'
import { useSetAuth } from '../../Auth/types/setTypes'

const Header: FC = () => {
    const { signIn } = useSetAuth()
    const { loading } = useAuth()

    return (
        <header className="absolute w-full">
            <div
                className="flex justify-between items-center container
                mx-auto px-4 py-6 bg-transparent"
            >
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
                        className="z-50 hidden md:flex"
                        onClick={signIn}
                        loading={loading}
                    />
                </div>
            </div>
        </header>
    )
}

export { Header }
