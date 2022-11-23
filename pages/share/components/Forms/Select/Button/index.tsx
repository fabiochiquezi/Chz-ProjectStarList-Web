import { useEffect, useState, useRef, FC, ReactNode, ChangeEvent } from 'react'

export interface SelectType {
    name: string
    className?: string
    children: ReactNode
    colorClass?: string
    defaultValue: string
    error?: string | undefined
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void
}

const SelectButton: FC<SelectType> = ({
    name,
    error,
    children,
    onChange,
    colorClass,
    className = '',
    defaultValue = ''
}) => {
    const ref = useRef<HTMLSelectElement | null>(null)
    const [active, setActive] = useState(false)
    const selectCSS = active && 'border-green-700'

    useEffect(() => {
        if (defaultValue.length) setActive(true)
    }, [defaultValue])

    return (
        <div className={`relative w-full h-8 ${className}`}>
            <div
                className={`w-[84px] h-10  px-2 rounded-lg ${
                    colorClass ?? 'bg-indigo-600'
                }`}
            >
                <select
                    name={name}
                    ref={ref}
                    onChange={onChange}
                    defaultValue={defaultValue}
                    className={`
                        simple-button ease-in-out duration-300 w-full max-w-full absolute left-0 top-0
                        h-10  w-[68px] ml-[9px] cursor-pointer text-sm ${selectCSS} ${
                        colorClass ?? 'bg-indigo-600'
                    }`}
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
