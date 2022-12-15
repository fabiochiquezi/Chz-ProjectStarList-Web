import React, { FC } from 'react'
import { GithubIcon2 } from '../../../../../../share/assets'

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
    data-cy="btn-github"
    data-testid="BtnGitHub"
    target={target ? '_blank' : ''}
    className={`${className} btn-transparent boder-gray-900 px-4 py-1 flex items-center`}
  >
    <span className="mr-1 text-sm mt-[1px]">GitHub</span>
    <GithubIcon2 />
  </a>
)

export { BtnGitHub }
