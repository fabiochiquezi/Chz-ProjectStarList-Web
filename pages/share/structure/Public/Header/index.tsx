import { FC } from 'react'
import Link from 'next/link'
import { Logo } from '../../../assets'
import { BtnGitHub } from './BtnGitHub'
import { BtnSignIn } from './BtnSignIn'

interface HeaderType {
    signIn: () => Promise<void> | void
}

const Header: FC<HeaderType> = ({ signIn }) => (
    <header className="absolute w-full" data-testid="HeaderPublic">
        <div
            className="flex justify-between items-center container
                mx-auto px-4 py-6 bg-transparent"
        >
            <Link href="/">
                <a className="logo z-10 hover:opacity-80" data-testid="Logo">
                    <Logo />
                </a>
            </Link>

            <div className="z-10 flex items-center">
                <BtnGitHub
                    href="https://github.com/fabiochiquezi/Chz-ProjectStarList-Web"
                    className="md:mr-3"
                />
                <BtnSignIn onClick={signIn} />
            </div>
        </div>
    </header>
)

export { Header }
