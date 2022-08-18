import React, { createContext, useContext, useEffect, useState } from 'react'

type props = {
    children: React.ReactNode
}

const ThemeContext = createContext(true)
const ThemeUpdateContext = createContext(() => {})

export const useTheme = () => useContext(ThemeContext)
export const useThemeUpdate = () => useContext(ThemeUpdateContext)

export function ThemeProvider({ children }: props) {
    const darkClass = 'dark'
    const [darkTheme, setDarkTheme] = useState(true)

    useEffect(() => {
        const preference = localStorage.getItem('darkTheme')
        if (preference && preference === 'light') toggleTheme()
    }, [])

    function toggleTheme() {
        const html = document.querySelector('html') as HTMLElement

        if (darkTheme) {
            setDarkTheme(false)
            html.classList.remove(darkClass)
            localStorage.setItem('darkTheme', 'light')
            return
        }
        setDarkTheme(true)
        html.classList.add(darkClass)
        localStorage.setItem('darkTheme', 'dark')
    }

    return (
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}

export default ThemeContext
