import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import { isDesktop } from '../helpers/device'
import SearchIcon from '../public/icons/SearchIcon'
import SearchIconOrange from '../public/icons/SearchIconOrange'
import { useTheme } from './ThemeContext'

const SearchButton: React.FC = () => {
    const darkTheme = useTheme()
    const [inputHidden, setInputHidden] = useState(true)
    const inputRef = useRef<HTMLInputElement>(null)
    const [searchInput, setSearchInput] = useState<string>('')
    const router = useRouter()

    useEffect(() => {
        if (!inputHidden) inputRef.current?.focus()
    }, [inputHidden])

    useEffect(() => {
        hiddenInput()
        window.addEventListener('resize', () => hiddenInput())
    }, [])

    function handleClick() {
        if (isDesktop(window)) return toggleInput()
        return doSearch()
    }

    function hiddenInput() {
        if (!isDesktop(window)) setInputHidden(false)
    }

    function toggleInput() {
        setInputHidden(prev => !prev)
    }

    function doSearch() {
        router.push(`/search?=${searchInput}`)
    }

    return (
        <>
            <input
                type="text"
                placeholder="Search..."
                className={`w-32 mr-3 h-8 md:w-48 sm:w-48 bg-transparent border-b-2 border-indigo-500 rounded-none py-4 px-2 inline-block focus-visible:border-transparent ${
                    inputHidden ? 'hidden' : ''
                } `}
                ref={inputRef}
                onKeyDown={e => {
                    if (e.key === 'Enter') doSearch()
                }}
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}
                onFocus={e => console.log('e')}
            />
            <div
                className="cursor-pointer"
                onClick={() => {
                    handleClick()
                }}
            >
                {darkTheme ? <SearchIcon /> : <SearchIconOrange />}
            </div>
        </>
    )
}

export default SearchButton
