import React, {
    ChangeEvent,
    ReactNode,
    useEffect,
    useState,
    useRef
} from 'react'

interface props {
    name: string
    label: string
    value: string
    className?: string
    children: ReactNode
    placeholder?: string
    defaultValue: string
    error: string | undefined
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void
}

const SelectButton: React.FC<props> = ({
    name,
    label,
    error,
    children,
    onChange,
    className = '',
    placeholder = '',
    defaultValue = ''
}) => {
    const ref = useRef<HTMLSelectElement | null>(null)
    const [active, setActive] = useState(false)
    const selectCSS = active && 'border-green-700'
    const labelCSS = active ? 'text-[11px] -top-[16px] text-gray-300' : 'top-1'

    useEffect(() => {
        if (defaultValue.length) setActive(true)
    }, [defaultValue])

    return (
        <div className={`relative w-full h-8 ${className}`}>
            <label
                htmlFor={name}
                className={`ease-in-out duration-300 absolute left-0 text-sm text-[#666] ${labelCSS}`}
            >
                {`${label} `}

                {placeholder && (
                    <span className="ml-1 text-yellow-400 text-[11px]">
                        ({placeholder})
                    </span>
                )}
            </label>

            <div className="w-[84px] h-10 bg-indigo-600 px-2 rounded-lg">
                <select
                    name={name}
                    ref={ref}
                    onChange={onChange}
                    defaultValue={defaultValue}
                    className={`
                        simple-button ease-in-out duration-300 w-full max-w-full absolute left-0 top-0
                        h-10 bg-indigo-600 w-[68px] ml-[9px] cursor-pointer text-sm ${selectCSS}`}
                    onFocus={() => {
                        setActive(true)
                        ref.current?.classList.add('border-green-700')
                    }}
                    onBlur={() => {
                        ref.current?.classList.remove('border-green-700')
                        const noLengt = ref.current && !ref.current.value.length
                        if (noLengt) setActive(false)
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
