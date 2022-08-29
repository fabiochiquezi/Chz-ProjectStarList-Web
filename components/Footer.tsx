import React from 'react'
import DiscordIcon from '../public/icons/DiscordIcon'
import GithubIcon from '../public/icons/GithubIcon'
import WhatsAppIcon from '../public/icons/WhatsAppIcon'
import Logo from '../public/Logo'
import BannerJob from './BannerJob'

const Footer: React.FC = () => {
    const today = new Date()
    const dd = String(today.getDate()).padStart(2, '0')
    const mm = String(today.getMonth() + 1).padStart(2, '0')
    const yyyy = today.getFullYear()

    const date = mm + '/' + dd + '/' + yyyy

    return (
        <div className="bg-[#111] py-24 lg:pb-16 relative z-10">
            <BannerJob />
            <div className="container mx-auto">
                <div className="w-72 mx-auto lg:w-auto flex flex-col justify-center items-center justify-between lg:flex-row lg:items-start 2xl:w-5/6">
                    <div className="text-sm lg:mt-1 lg:mb-0 order-4 lg:order-1">
                        <Logo />
                        <p className="mt-3 text-gray-400">
                            © All rights reserved -{' '}
                            <span className="italic">{date}</span>
                        </p>
                    </div>

                    <div className="w-52 xl:w-64 w-52 mb-16 lg:mb-0 order-2">
                        <h3 className="text-3xl font-bold mb-4 border-gray-400 border-b-2 pb-4 lg:mb-12">
                            Links
                        </h3>
                        <ul>
                            <li>
                                <a
                                    href="https://github.com/fabiochiquezi"
                                    target="_blank"
                                    className="text-lg mb-2 inline-block simple-button"
                                >
                                    - My GitHub
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="w-52 xl:w-64 mb-16 lg:mb-0 order-0 lg:order-2">
                        <h3 className="text-3xl font-bold mb-4 border-gray-400 border-b-2 pb-4 lg:mb-12">
                            GitHub
                        </h3>
                        <p className="mb-2">
                            This is an open source project, feel free to have
                            your own version or help make this project even
                            better!
                        </p>
                        <a
                            className="text-blue-400 break-all simple-button"
                            href="https://github.com/fabiochiquezi/projectOpen-frontEnd-myStarList"
                            target="_blank"
                        >
                            https://github.com/fabiochiquezi/projectOpen-frontEnd-myStarList
                        </a>
                    </div>

                    <div className="w-52 mb-16 xl:w-64 order-1 lg:order-4">
                        <h3 className="text-3xl font-bold mb-4 border-gray-400 border-b-2 pb-4 lg:mb-12">
                            Follow-me
                        </h3>
                        <ul className="flex mt-8 ml-0 md:mt-16 justify-between items-center w-3/4 left-0 md:w-3/4 mx-auto lg:mt-0 lg:w-auto lg:mx-0 xl:justify-start">
                            <li className="mr-4 xl:mr-2">
                                <div className="relative">
                                    <DiscordIcon />
                                    <span className="absolute -bottom-5 -left-2 text-xs mt-2">
                                        Chiquezi#3816
                                    </span>
                                </div>
                            </li>
                            <li className="mr-4 xl:mr-2">
                                <a
                                    href="https://github.com/fabiochiquezi"
                                    className="simple-button"
                                    target="_blank"
                                >
                                    <GithubIcon />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://api.whatsapp.com/send?phone=5519983127035&text=Hi%20there!"
                                    className="simple-button"
                                    target="_blank"
                                >
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
