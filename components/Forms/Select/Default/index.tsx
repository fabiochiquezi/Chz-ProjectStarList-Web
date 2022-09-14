// Not using yet

/*
import React, { useRef, useState } from 'react'

interface props {
    children: React.ReactNode
    label: string
    className?: string
    placeholder?: string
    name: string
    onChange: any
    value: any
    error: any
}

const Select: React.FC<props> = ({
    children,
    label,
    className = '',
    placeholder = '',
    name,
    onChange,
    value,
    error
}) => {
    const inputRef = useRef<HTMLSelectElement | null>(null)
    const [active, setActive] = useState(false)

    return (
        <div className={`relative w-full h-8 ${className}`}>
            <label
                htmlFor={name}
                className={`ease-in-out duration-300 absolute left-0 text-sm text-[#666] ${
                    active ? 'text-[11px] -top-[16px] text-gray-300' : 'top-1'
                }`}
            >
                {label}{' '}
                {placeholder && (
                    <span className="ml-1 text-yellow-400 text-[11px]">
                        ({placeholder})
                    </span>
                )}
            </label>

            <select
                name={name}
                onChange={onChange}
                defaultValue=""
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
            >
                <option
                    className="bg-primary text-white"
                    value=""
                    disabled
                ></option>
                {children}
            </select>
            {error ? (
                <p className="absolute -bottom-[22px] left-0 text-[11px] text-red-500 text-right w-full">
                    * {error}
                </p>
            ) : null}
        </div>
    )
}

export default Select
*/
