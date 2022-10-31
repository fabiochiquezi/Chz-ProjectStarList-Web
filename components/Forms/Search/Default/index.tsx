import SearchIcon from 'public/icons/SearchIcon'
import React, { useEffect, useRef, useState } from 'react'

interface props {
    value: string
    onChange: (e: any) => void
    className?: string
    callSearch: (search: string) => Promise<void>
}

const Search: React.FC<props> = ({
    value,
    onChange,
    className = '',
    callSearch
}) => {
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [active, setActive] = useState(false)

    function searchKeyPress(event: KeyboardEvent): void {
        const isEnterPressed = event.key === 'Enter'
        const isFocus = inputRef.current === document.activeElement
        if (value.length > 0 && isEnterPressed && isFocus) callSearch(value)
    }

    useEffect(() => {
        const el = inputRef.current
        if (el) {
            el.addEventListener('keydown', searchKeyPress)

            return () => {
                el.removeEventListener('keydown', searchKeyPress)
            }
        }
    }, [value])

    return (
        <div className={`flex relative w-full h-8 ${className}`}>
            <input
                placeholder="Search ..."
                name="search"
                type="text"
                onChange={onChange}
                value={value}
                className={`ease-in-out duration-300 w-full max-w-full absolute left-0 top-0 h-8 bg-transparent border-b-[1px] border-gray-600 text-sm pb-1 ${
                    active && 'border-green-700'
                }`}
                ref={inputRef}
                onFocus={() => {
                    setActive(true)
                    inputRef.current?.classList.add('border-green-700')
                }}
                onBlur={() => {
                    inputRef.current?.classList.remove('border-green-700')
                    const isCurrent =
                        inputRef.current != null &&
                        !inputRef.current.value.length
                    if (isCurrent) setActive(false)
                    if (value.length > 0) callSearch(value)
                }}
                data-testid="input"
            />
            <div className="absolute right-0 top-1">
                <SearchIcon />
            </div>
        </div>
    )
}

export { Search }
