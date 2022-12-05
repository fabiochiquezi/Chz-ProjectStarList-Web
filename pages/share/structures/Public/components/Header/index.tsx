import React from 'react'
import Link from 'next/link'
import { BtnGitHub } from './BtnGitHub'
import { BtnSignIn } from './BtnSignIn'
import { Logo } from 'pages/share/assets'
import { useAuth } from 'pages/share/contexts'

const Header: React.FC = () => {
  const { signIn } = useAuth()

  return (
    <header className="absolute w-full" data-testid="HeaderPublic">
      <div className="flex justify-between items-center container mx-auto px-4 py-6 bg-transparent">
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
}

export default Header
