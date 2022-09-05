import React from 'react'
import GithubIcon2 from 'public/icons/GithubIcon2'

// import { Container } from './styles';

const ButtonGitHub: React.FC = () => {
    return (
        <a
            href="https://github.com/fabiochiquezi"
            target="_blank"
            className="md:mr-3 btn-transparent boder-gray-900 px-4 py-1 flex items-center"
        >
            <span className="mr-1 text-sm mt-[1px]">GitHub</span>
            <GithubIcon2 />
        </a>
    )
}

export default ButtonGitHub
