import React, { useEffect, useRef, useState } from 'react'

interface props {
    children: React.ReactNode
    label: string
    className?: string
    placeholder?: string
    name: string
    onChange: any
    value: any
    error: any
    defaultValue: string
}

const SelectButton: React.FC<props> = ({
    children,
    label,
    className = '',
    placeholder = '',
    name,
    onChange,
    value,
    error,
    defaultValue = ''
}) => {
    const inputRef = useRef<HTMLSelectElement | null>(null)
    const [active, setActive] = useState(false)

    useEffect(() => {
        if (defaultValue.length) {
            setActive(true)
        }
    }, [defaultValue])

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

            <div className="w-[84px] h-10 bg-indigo-600 px-2 rounded-lg">
                <select
                    name={name}
                    onChange={onChange}
                    defaultValue={defaultValue}
                    className={`simple-button ease-in-out duration-300 w-full max-w-full absolute left-0 top-0 h-10 bg-indigo-600 w-[68px] ml-[9px] cursor-pointer  text-sm ${
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
                    {children}
                </select>
            </div>
            {error ? (
                <p className="absolute -bottom-[22px] left-0 text-[11px] text-red-500 text-right w-full">
                    * {error}
                </p>
            ) : null}
        </div>
    )
}

export { SelectButton }
