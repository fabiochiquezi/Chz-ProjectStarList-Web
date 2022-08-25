import React from 'react'
import { useTheme, useThemeUpdate } from '../../context/ThemeContext'

const ButtonTheme: React.FC = () => {
    const darkTheme = useTheme()
    const toggleTheme = useThemeUpdate()

    return (
        <button onClick={toggleTheme} className="text-md">
            Night Mode{' '}
            <span className="dark:text-white text-black">
                {darkTheme ? 'On' : 'Off'}
            </span>
        </button>
    )
}

export default ButtonTheme
