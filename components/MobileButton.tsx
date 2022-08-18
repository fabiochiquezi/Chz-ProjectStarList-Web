import CloseIcon from '../public/icons/CloseIcon'
import CloseIconOrange from '../public/icons/CloseIconOrange'
import HamburgerIcon from '../public/icons/HamburgerIcon'
import HamburgerIconOrange from '../public/icons/HamburgerIconOrange'
import { useTheme } from './ThemeContext'

type MobileButtonProps = {
    menu: boolean
    setMenu: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileButton: React.FC<MobileButtonProps> = ({ menu, setMenu }) => {
    const darkTheme = useTheme()

    return (
        <div
            className="p-4 -m-4 z-50 cursor-pointer lg:hidden"
            onClick={() => setMenu(prev => !prev)}
        >
            {menu ? (
                <div className="mr-1">
                    {darkTheme ? <CloseIcon /> : <CloseIconOrange />}
                </div>
            ) : (
                <div>
                    {darkTheme ? (
                        <HamburgerIcon width={24} height={18} />
                    ) : (
                        <HamburgerIconOrange />
                    )}
                </div>
            )}
        </div>
    )
}
export default MobileButton
