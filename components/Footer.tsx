import Link from 'next/link'
import React from 'react'
import Logo from '../public/Logo'
import LogoOrange from '../public/LogoOrange'
import SearchButton from './SearchButton'
import { useTheme } from './ThemeContext'

const Footer: React.FC = () => {
    const darkTheme = useTheme()
    const today = new Date()
    const dd = String(today.getDate()).padStart(2, '0')
    const mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
    const yyyy = today.getFullYear()

    const date = mm + '/' + dd + '/' + yyyy

    return (
        <div className="bg-gray-900 py-24">
            <div className="container mx-auto w-72 flex flex-col justify-center items-center justify-between">
                <div className="text-sm mb-16">
                    {darkTheme ? <Logo /> : <LogoOrange />}
                    <p className="mt-3 text-gray-400">
                        © All rights reserved -{' '}
                        <span className="italic">{date}</span>
                    </p>
                </div>

                <div className="w-52 mb-16">
                    <h3 className="text-3xl font-bold mb-4 border-white border-b-2 pb-4">
                        Links
                    </h3>
                    <ul>
                        <li>
                            <Link href="/">
                                <a className="text-xl mb-2 inline-block">
                                    Movies
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a className="text-xl mb-2 inline-block">
                                    Series
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a className="text-xl mb-2 inline-block">
                                    Movies
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="w-52 mb-16">
                    <h3 className="text-3xl font-bold mb-4 border-white border-b-2 pb-4">
                        GitHub
                    </h3>
                    <p className="mb-2">
                        This is an open source project, feel free to have your
                        own version or help make this project even better!
                    </p>
                    <a
                        className="text-blue-400 break-all"
                        href="www.github.com/fabiochiquezi/my-personal-project"
                        target="_blank"
                    >
                        www.github.com/fabiochiquezi/my-personal-project
                    </a>
                </div>

                <div className="follow">
                    <h3 className="text-3xl font-bold mb-4 border-white border-b-2 pb-4">
                        Follow-me
                    </h3>
                    <ul className="flex mt-16 md:mt-16 justify-between items-center w-3/4 left-0 md:w-3/4 mx-auto lg:mt-0 lg:w-auto lg:mx-0 ">
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
