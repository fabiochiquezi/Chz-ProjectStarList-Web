import React from 'react'
import Logo from '../../public/Logo'
import ButtonnSignIn1 from '../../components/Buttons/ButtonnSignIn1'

const HeaderLogin: React.FC = () => {
    return (
        <header className="absolute w-full">
            <div className="flex justify-between items-center container mx-auto px-4 py-6 bg-transparent">
                <Logo className="z-10" />
                <ButtonnSignIn1 />
            </div>
        </header>
    )
}

export default HeaderLogin
