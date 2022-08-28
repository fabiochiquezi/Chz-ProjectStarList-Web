import React, { useEffect, useRef, useState } from 'react'

type props = {
    label: string
    className?: string
}

const Input: React.FC<props> = ({ label, className }) => {
    const inputRef = useRef(null)
    const [active, setActive] = useState(false)
    const activeInput = 'border-green-700'
    const activeLabel = 'text-[11px] -top-3 text-gray-300'

    useEffect(() => {}, [])

    return (
        <div className={`relative w-full h-10 ${className}`}>
            <label
                htmlFor="Name"
                className={`ease-in-out duration-300 absolute left-0 top-2 text-sm text-[#666] ${
                    active && activeLabel
                }`}
            >
                {label}
            </label>
            <input
                type="text"
                className={`ease-in-out duration-300 w-full max-w-full absolute left-0 top-0 h-10 bg-transparent border-b-[1px] border-white ${
                    active && activeInput
                }`}
                ref={inputRef}
                onFocus={() => setActive(true)}
                onBlur={() => setActive(false)}
            />
        </div>
    )
}

export default Input
