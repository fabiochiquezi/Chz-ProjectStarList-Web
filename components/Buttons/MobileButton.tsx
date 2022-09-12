import CloseIcon from 'public/icons/CloseIcon'
import HamburgerIcon from 'public/icons/HamburgerIcon'

interface MobileButtonProps {
    menu: boolean
    setMenu: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileButton: React.FC<MobileButtonProps> = ({ menu, setMenu }) => {
    return (
        <div
            className="relaive z-30 cursor-pointer lg:hidden fixed bottom-4 md:bottom-5 right-8 md:right-7 bg-gray-800 rounded-full w-12 h-12 md:w-16 md:h-16 flex justify-center items-center -mr-4 mt-1 simple-button"
            onClick={() => setMenu(prev => !prev)}
            data-cy="btn-mobile"
        >
            <div className="scale-90 md:scale-100">
                {menu ? (
                    <div className="mr-0">
                        <CloseIcon />
                    </div>
                ) : (
                    <div>
                        <HamburgerIcon width={24} height={18} />
                    </div>
                )}
            </div>
        </div>
    )
}
export default MobileButton
