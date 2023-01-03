import { DiscordIcon, GithubIcon, WhatsAppIcon } from './icons'
import { Logo } from '../../../../../../src/pages/Logo'
import { getTimeNow } from './getDate'
import { Banner } from './Banner'
import { FC } from 'react'

const Footer: FC = () => (
  <div
    className="bg-skin-base-secondary py-24 lg:pb-16 relative z-10"
    data-testid="Footer"
  >
    <Banner />
    <div className="container mx-auto lg:px-4">
      <div className="w-72 mx-auto lg:w-auto flex flex-col justify-center items-center justify-between lg:flex-row lg:items-start 2xl:w-5/6">
        <div className="text-sm lg:mt-1 lg:mb-0 order-4 lg:order-1 box">
          <Logo />
          <p className="mt-3 text-skin-font-secondary">
            © All rights reserved - <span className="italic">{getTimeNow()}</span>
          </p>
        </div>

        <div className="w-52 xl:w-64 w-52 mb-16 lg:mb-0 order-2 box">
          <h3 className="text-3xl font-bold mb-4 border-gray-400 border-b-2 pb-4 lg:mb-12">
            Links
          </h3>
          <ul className='text-skin-font-secondary'>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/fabiochiquezi"
                className="text-lg mb-2 inline-block anim-button"
              >
                - My GitHub
              </a>
            </li>
          </ul>
        </div>

        <div className="w-52 xl:w-64 mb-16 lg:mb-0 order-0 lg:order-2 box">
          <h3 className="text-3xl font-bold mb-4 border-gray-400 border-b-2 pb-4 lg:mb-12">
            GitHub
          </h3>
          <p className="mb-2 text-skin-font-secondary">
            This is an open source project, feel free to have your own version
            or help make this project even better!
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 break-all anim-button"
            href="https://github.com/fabiochiquezi/Chz-ProjectStarList-Web"
          >
            https://github.com/fabiochiquezi/Chz-ProjectStarList-Web
          </a>
        </div>

        <div className="w-52 mb-16 xl:w-64 order-1 lg:order-4 box">
          <h3 className="text-3xl font-bold mb-4 border-gray-400 border-b-2 pb-4 lg:mb-12">
            Follow-me
          </h3>
          <ul className="flex mt-8 ml-0 md:mt-16 justify-between items-center w-3/4 left-0 md:w-3/4 mx-auto lg:mt-0 lg:w-auto lg:mx-0 xl:justify-start">
            <li className="mr-4 xl:mr-2">
              <div className="relative">
                <DiscordIcon />
                <span className="absolute -bottom-5 -left-2 text-xs mt-2 text-skin-font-secondary">
                  Chiquezi#3816
                </span>
              </div>
            </li>
            <li className="mr-4 xl:mr-2">
              <a
                href="https://github.com/fabiochiquezi"
                className="anim-button"
                target="_blank"
                rel="noreferrer"
                data-testid="Footer-GitHubIcon"
              >
                <GithubIcon />
              </a>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=5519983127035&text=Hi%20there!"
                className="anim-button"
                target="_blank"
                rel="noreferrer"
                data-testid="Footer-WhatsAppIcon"
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


export { Footer }
