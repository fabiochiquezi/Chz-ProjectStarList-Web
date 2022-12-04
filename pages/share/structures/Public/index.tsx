import Link from 'next/link'
import { Logo } from 'pages/share/assets'
import React, { FC, ReactNode } from 'react'
import { Footer } from '../components/Footer'
import { BtnGitHub } from './components/BtnGitHub'
import { BtnSignIn } from './components/BtnSignIn'
import { isRouteMixed } from 'pages/share/settings'
import { IUseAuth } from '../../contexts'
import { useRouter } from 'next/router'

type IPublic = (useAuth: () => IUseAuth) => FC<{ children: ReactNode }>

const Public: IPublic = useAuth =>
  function Provider({ children }: { children: ReactNode }) {
    const router = useRouter()
    const { signIn } = useAuth()
    const isMixed = isRouteMixed(router.route)

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
        <div className="mb-48 sm:mb-36 lg:mb-24">
          {isMixed
            ? (<div className="pt-48 sm:pt-36 mb-52">{children}</div>)
            : children}
        </div>
        <Footer />
      </div>
    )
  }

export { Public }
