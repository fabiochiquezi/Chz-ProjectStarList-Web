import SearchIcon from '../../../../general/assets/icons/SearchIcon'
import { ChangeEvent, FC, useEffect, useRef, useState } from 'react'

export interface SearchType {
    value: string
    className?: string
    callReset: () => void
    callSearch: (search: string) => Promise<void>
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Search: FC<SearchType> = ({
    value,
    onChange,
    callReset,
    callSearch,
    className = ''
}) => {
    const ref = useRef<HTMLInputElement | null>(null)
    const [active, setActive] = useState(false)
    const inputCSS = active && 'border-green-700'

    function searchKeyPress(event: KeyboardEvent): void {
        const isEnterPressed = event.key === 'Enter'
        const isFocus = ref.current === document.activeElement
        if (value.length > 0 && isEnterPressed && isFocus) callSearch(value)
        if (value.length === 0 && isEnterPressed && isFocus) callReset()
    }

    useEffect(() => {
        const el = ref.current
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
                ref={ref}
                type="text"
                name="search"
                value={value}
                onChange={onChange}
                placeholder="Search ..."
                className={`
                    ease-in-out duration-300 w-full max-w-full absolute left-0 top-0 h-8
                    bg-transparent border-b-[1px] border-gray-600 text-sm pb-1 ${inputCSS}`}
                onFocus={() => {
                    setActive(true)
                    ref.current?.classList.add('border-green-700')
                }}
                onBlur={() => {
                    ref.current?.classList.remove('border-green-700')
                    const noValue = ref.current && !ref.current.value.length
                    const hasValue = value.length > 0
                    if (noValue) setActive(false)
                    if (hasValue) callSearch(value)
                }}
                data-testid="input"
            />

            <div className="absolute right-0 top-1" data-testid="icon">
                <SearchIcon />
            </div>
        </div>
    )
}

export { Search }
