import React, { FC } from 'react'
import { GithubIcon } from './icon'

export interface IBtnGitHubProps {
  href: string
  target?: boolean
  className?: string
}

const BtnGitHub: FC<IBtnGitHubProps> = ({
  href = '',
  target = true,
  className = ''
}) => (
  <a
    href={href}
    rel="noreferrer"
    data-testid="BtnGitHub"
    target={target ? '_blank' : ''}
    className={`${className} uppercase text-center border-2 rounded-md anim-button inline-block boder-gray-900 px-4 py-1 flex items-center`}
  >
    <span className="mr-1 text-sm mt-[1px]">GitHub</span>
    <GithubIcon />
  </a>
)

export { BtnGitHub }
