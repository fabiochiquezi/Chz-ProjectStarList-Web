import { ErrorMessage, useField } from 'formik'
import React, { useEffect, useRef, useState } from 'react'

type props = {
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
    className,
    placeholder = '',
    name,
    type,
    onChange,
    value,
    error
}) => {
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [active, setActive] = useState(false)

    return (
        <div className={`relative w-full h-10 ${className}`}>
            <label
                htmlFor={name}
                className={`ease-in-out duration-300 absolute left-0 text-sm text-[#666] ${
                    active ? 'text-[11px] -top-3 text-gray-300' : 'top-2'
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
                className={`ease-in-out duration-300 w-full max-w-full absolute left-0 top-0 h-10 bg-transparent border-b-[1px] border-gray-400 ${
                    active && 'border-green-700'
                }`}
                ref={inputRef}
                onFocus={() => {
                    setActive(true)
                    inputRef.current?.classList.add('border-green-700')
                }}
                onBlur={() => {
                    inputRef.current?.classList.remove('border-green-700')
                    if (inputRef.current && !inputRef.current.value.length)
                        setActive(false)
                }}
            />
            {error ? <div>{error}</div> : null}
            {/*<ErrorMessage name={field.name} /> */}
        </div>
    )
}

export default Input
