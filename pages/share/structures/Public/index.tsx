import Link from 'next/link'
import { Logo } from 'pages/share/assets'
import React, { FC, ReactNode } from 'react'
import { Footer } from '../components/Footer'
import { BtnGitHub } from './components/BtnGitHub'
import { BtnSignIn } from './components/BtnSignIn'
import { IUseAuth } from '../../contexts'

type IPublic = (useAuth: () => IUseAuth) => FC<{ children: ReactNode }>

const Public: IPublic = useAuth =>
  function Provider({ children }: { children: ReactNode }) {
    const { signIn } = useAuth()
    return (
      <div data-testid="StructPrivate">
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
        <div className="mb-48 sm:mb-36 lg:mb-24">{children}</div>
        <Footer />
      </div>
    )
  }

export { Public }
