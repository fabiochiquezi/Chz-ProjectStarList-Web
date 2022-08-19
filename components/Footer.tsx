import Link from 'next/link'
import React from 'react'
import DiscordIcon from '../public/icons/DiscordIcon'
import GithubIcon from '../public/icons/GithubIcon'
import WhatsAppIcon from '../public/icons/WhatsAppIcon'
import Logo from '../public/Logo'
import LogoOrange from '../public/LogoOrange'
import BannerFooter from './BannerFooter'
import { useTheme } from './ThemeContext'

const Footer: React.FC = () => {
    const darkTheme = useTheme()
    const today = new Date()
    const dd = String(today.getDate()).padStart(2, '0')
    const mm = String(today.getMonth() + 1).padStart(2, '0')
    const yyyy = today.getFullYear()

    const date = mm + '/' + dd + '/' + yyyy

    return (
        <div className="bg-gray-900 py-24 lg: pb-16">
            <BannerFooter />
            <div className="container mx-auto">
                <div className="w-72 mx-auto lg:w-auto flex flex-col justify-center items-center justify-between lg:flex-row lg:items-start 2xl:w-5/6">
                    <div className="text-sm mb-16 lg:mt-2 lg:mb-0">
                        {darkTheme ? <Logo /> : <LogoOrange />}
                        <p className="mt-3 text-gray-400">
                            © All rights reserved -{' '}
                            <span className="italic">{date}</span>
                        </p>
                    </div>

                    <div className="w-52 xl:w-64 w-52 mb-16 lg:mb-0">
                        <h3 className="text-3xl font-bold mb-4 border-gray-400 border-b-2 pb-4 lg:mb-12">
                            Links
                        </h3>
                        <ul>
                            <li>
                                <Link href="/">
                                    <a className="text-lg mb-2 inline-block">
                                        - Movies
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a className="text-lg mb-2 inline-block">
                                        - Series
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a className="text-lg mb-2 inline-block">
                                        - Movies
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="w-52 xl:w-64 mb-16 lg:mb-0">
                        <h3 className="text-3xl font-bold mb-4 border-gray-400 border-b-2 pb-4 lg:mb-12">
                            GitHub
                        </h3>
                        <p className="mb-2">
                            This is an open source project, feel free to have
                            your own version or help make this project even
                            better!
                        </p>
                        <a
                            className="text-blue-400 break-all"
                            href="www.github.com/fabiochiquezi/my-personal-project"
                            target="_blank"
                        >
                            www.github.com/fabiochiquezi/my-personal-project
                        </a>
                    </div>

                    <div className="w-52 xl:w-64">
                        <h3 className="text-3xl font-bold mb-4 border-gray-400 border-b-2 pb-4 lg:mb-12">
                            Follow-me
                        </h3>
                        <ul className="flex mt-8 ml-0 md:mt-16 justify-between items-center w-3/4 left-0 md:w-3/4 mx-auto lg:mt-0 lg:w-auto lg:mx-0 ">
                            <li className="mr-4">
                                <a href="" target="_blank">
                                    <DiscordIcon />
                                </a>
                            </li>
                            <li className="mr-4">
                                <a href="" target="_blank">
                                    <GithubIcon />
                                </a>
                            </li>
                            <li>
                                <a href="" target="_blank">
                                    <WhatsAppIcon />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
