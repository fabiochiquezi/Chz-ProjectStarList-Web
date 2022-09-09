import React from 'react'
import GithubIcon2 from '../../../public/icons/GithubIcon2'

type props = {
    href: string
    target?: boolean
    className?: string
    id?: string
}

const ButtonGitHub: React.FC<props> = ({
    href = '',
    target = true,
    className,
    id = ''
}) => {
    return (
        <a
            href={href}
            target={target ? '_blank' : ''}
            className={`${className} btn-transparent boder-gray-900 px-4 py-1 flex items-center`}
            id={id}
            data-testid="button-github"
        >
            <span className="mr-1 text-sm mt-[1px]">GitHub</span>
            <GithubIcon2 />
        </a>
    )
}

export default ButtonGitHub
