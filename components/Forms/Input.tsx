import React, { useEffect, useRef, useState } from 'react'

interface props {
    label: string
    className?: string
    placeholder?: string
    name: string
    type: string
    onChange: any
    value: any
    error: any
}

const Input: React.FC<props> = ({
    label,
    className = '',
    placeholder = '',
    name,
    type,
    onChange,
    value,
    error
}) => {
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [active, setActive] = useState(false)

    useEffect(() => {
        if (value && value.length) {
            setActive(true)
        }
    }, [value])

    return (
        <div className={`relative w-full h-8 ${className}`}>
            <label
                htmlFor={name}
                className={`ease-in-out duration-300 absolute left-0 text-sm text-[#666] ${
                    active ? 'text-[11px] -top-[16px]' : 'top-1'
                }`}
            >
                {label}{' '}
                {placeholder && (
                    <span className="ml-1 text-yellow-400 text-[11px]">
                        ({placeholder})
                    </span>
                )}
            </label>

            <input
                name={name}
                type={type}
                onChange={onChange}
                value={value}
                className={`ease-in-out duration-300 w-full max-w-full absolute left-0 top-0 h-8 bg-transparent border-b-[1px] border-gray-400 text-sm ${
                    active && 'border-green-700'
                }`}
                ref={inputRef}
                onFocus={() => {
                    setActive(true)
                    inputRef.current?.classList.add('border-green-700')
                }}
                onBlur={() => {
                    inputRef.current?.classList.remove('border-green-700')
                    if (
                        inputRef.current != null &&
                        !inputRef.current.value.length
                    ) {
                        setActive(false)
                    }
                }}
            />
            {error ? (
                <p className="absolute -bottom-[22px] left-0 text-[11px] text-red-500 text-right w-full">
                    * {error}
                </p>
            ) : null}
        </div>
    )
}

export default Input
