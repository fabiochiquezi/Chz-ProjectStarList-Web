import Link from 'next/link'
import { Logo } from '../../assets'
import { NextRouter } from 'next/router'
import { IUseAuth } from '../../contexts'
import { Footer } from '../components/Footer'
import { BtnLink } from './components/BtnLink'
import { BtnSignOut } from './components/BtnSignOut'
import { BtnHamburger } from './components/BtnHamburger'
import { FC, ReactNode, useEffect, useState } from 'react'

type IPrivateStruct =
  (useRouter: () => NextRouter) =>
    (useAuth: () => IUseAuth) =>
      FC<{ children: ReactNode }>

const GetStruct: IPrivateStruct = useRouter => useAuth =>
  function Struct({ children }: { children: ReactNode }) {
    const router = useRouter()
    const { user, signOut } = useAuth()
    const { route, push } = router
    const [menu, setMenu] = useState(false)
    const menuOpenClass = menu ? 'fixed' : 'hidden'
    const displayName = user?.displayName
      ? `${user.displayName.substring(0, 9)}...`
      : ''

    useEffect(() => {
      window.addEventListener('resize', () => setMenu(false))
    }, [])

    useEffect(() => {
      const body = document.querySelector('html') as HTMLElement
      body.style.overflow = menu ? 'hidden' : 'auto'
    }, [menu])

    function onChangeMenu(newRoute: string): void {
      setMenu(false)
      push(newRoute)
    }

    return (
      <div data-testid="StructPrivate">
        <header
          data-testid="HeaderPrivate"
          data-cy="header-structure"
          className="flex justify-center lg:justify-between items-center container mx-auto px-4 py-8 lg:pt-8 mb-8 lg:mb-0 h-[43px] absolute sm:left-2/4 sm:-ml-[320px] md:-ml-[384px] lg:-ml-[512px] xl:-ml-[640px] 2xl:-ml-[768px] bg-transparent"
        >
          <Link href="/catalog/doing">
            <a className="logo z-10 hover:opacity-80">
              <Logo />
            </a>
          </Link>
          <BtnHamburger opened={menu} onClick={() => setMenu(prev => !prev)} />
          <div
            className={`h-screen dark:bg-primary lg:dark:bg-transparent bg-gray-100 w-screen left-0 top-0 md:pt-36 ${menuOpenClass} lg:block lg:w-[82%] xl:w-[86%] 2xl:w-[88%] lg:h-auto lg:bg-transparent lg:pt-0 lg:static z-20`}
          >
            <div className="fixed lg:static w-full left-0 top-[50%] -mt-[225px] md:-mt-[325px] lg:-mt-0 lg:top-0 lg:flex lg:justify-between lg:items-center">
              <nav data-cy="menu-structure" data-testid="MainMenu">
                <ul className="flex flex-col items-center text-center text-2xl lg:flex-row lg:mt-[2px]">
                  <li className="w-3/4 lg:w-auto border-b-2 border-gray-800 lg:border-none">
                    <BtnLink
                      isActive={route === '/new/[type]'}
                      onClick={() => onChangeMenu('/new/movies')}
                      text="NEW"
                    />
                  </li>
                  <li className="w-3/4 lg:w-auto border-b-2 border-gray-800 lg:border-none">
                    <BtnLink
                      isActive={route === '/[user]'}
                      onClick={() => onChangeMenu(user?.userName ?? '')}
                      text="MY LIST"
                    />
                  </li>
                </ul>
              </nav>
              <ul
                id="menu-right"
                data-testid="SecondaryMenu"
                className="flex flex-col mt-16 md:mt-16 justify-between items-center w-3/4 left-0 md:w-3/4 mx-auto lg:mt-[0px] lg:w-auto lg:mx-0 lg:flex-row text-center"
              >
                <div
                  className="flex mt-8 lg:mt-0 items-center"
                  data-cy="rightMenu-structure"
                >
                  <li className="pt-1 lg:p-0 lg:m-0 lg:ml-8 mb-2 mt-4 text-sm">
                    <span>{displayName}</span>
                  </li>
                  <li className="mx-4 hidden lg:inline-block pt-1 lg:pt-0 lg:-mt-[2px]">
                    |
                  </li>
                  <li className="text-sm ml-4 lg:m-0">
                    <BtnSignOut onClick={signOut} />
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </header>
        <div className="mb-48 sm:mb-36 lg:mb-24">
          <div className="pb-32 md:pb-28 pt-28 md:pt-32 lg:pt-36">
            {children}
          </div>
        </div>
        <Footer />
      </div>
    )
  }

export { GetStruct }
