import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import { isDesktop } from 'helpers/device'
import SearchIcon from 'public/icons/SearchIcon'

const SearchBar: React.FC = () => {
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

    async function handleClick(): Promise<void> {
        if (isDesktop(window)) return toggleInput()
        return await doSearch()
    }

    function hiddenInput(): void {
        if (!isDesktop(window)) setInputHidden(false)
    }

    function toggleInput(): void {
        setInputHidden(prev => !prev)
    }

    async function doSearch(): Promise<void> {
        await router.push(`/search?=${searchInput}`)
    }

    return (
        <>
            <input
                type="text"
                placeholder="Search..."
                className={`w-full mr-3 h-8 bg-transparent border-b-2 border-indigo-500 rounded-none py-4 px-2 inline-block focus-visible:border-transparent ${
                    inputHidden ? 'hidden' : ''
                } `}
                ref={inputRef}
                onKeyDown={async e => {
                    if (e.key === 'Enter') doSearch()
                }}
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}
                onFocus={e => console.log('e')}
            />
            <div
                className="simple-button"
                onClick={() => {
                    handleClick()
                }}
            >
                <SearchIcon />
            </div>
        </>
    )
}

export default SearchBar
