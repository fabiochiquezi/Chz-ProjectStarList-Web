import { useEffect, useState, useRef, FC } from 'react'
import { ISelectProps } from '../type'

export type ISelectDefault = FC<ISelectProps & {
  label: string
  placeholder?: string
}>

const Select: ISelectDefault = props => {
  const ref = useRef<HTMLSelectElement | null>(null)
  const [active, setActive] = useState(false)
  const selectCSS = active && 'border-green-700'
  const labelCSS = active ? 'text-[11px] -top-[16px] text-gray-300' : 'top-1'
  const { label, name, error, children, onChange, className = '', placeholder = '', defaultValue = '' } = props

  useEffect(() => {
    if (defaultValue.length) setActive(true)
  }, [defaultValue])

  return (
    <div className={`relative w-full h-8 ${className}`} data-testid="Select">
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
      <select
        ref={ref}
        name={name}
        onChange={onChange}
        defaultValue={defaultValue}
        className={`ease-in-out duration-300 w-full max-w-full absolute left-0 top-0 h-8 bg-transparent border-b-[1px] border-gray-400 text-sm ${selectCSS}`}
        onFocus={() => {
          setActive(true)
          ref.current?.classList.add('border-green-700')
        }}
        onBlur={() => {
          ref.current?.classList.remove('border-green-700')
          const noLength = ref.current && !ref.current.value.length
          if (noLength) setActive(false)
        }}
      >
        <option className="bg-skin-base-primary text-white" value="" disabled></option>
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

export { Select }
