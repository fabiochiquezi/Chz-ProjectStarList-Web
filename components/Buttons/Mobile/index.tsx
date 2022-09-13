import CloseIcon from '../../../public/icons/CloseIcon'
import HamburgerIcon from '../../../public/icons/HamburgerIcon'
import React from 'react'

interface MobileButtonProps {
    menu: boolean
    setMenu: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileButton: React.FC<MobileButtonProps> = ({ menu, setMenu }) => {
    const CloseBtn = (
        <div className="mr-0" data-testid="mobile-button-close">
            <CloseIcon />
        </div>
    )

    const HambBtn = (
        <div data-testid="mobile-button-hamb">
            <HamburgerIcon width={24} height={18} />
        </div>
    )

    const Button = (): React.ReactElement => (menu ? CloseBtn : HambBtn)

    return (
        <div
            className="
                relaive z-30 cursor-pointer fixed bottom-4 right-8 bg-gray-800 rounded-full w-12 h-12 -mr-4 mt-1 simple-button
                flex justify-center items-center
                md:bottom-5 md:right-7 md:w-16 md:h-16
                lg:hidden
            "
            onClick={() => setMenu(prev => !prev)}
            data-cy="btn-mobile"
            data-testid="mobile-button"
        >
            <div className="scale-90 md:scale-100">
                <Button />
            </div>
        </div>
    )
}
export { MobileButton }
