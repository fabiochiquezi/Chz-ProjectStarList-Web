import { FormikHandlers } from 'formik'
import { FC, useEffect, useRef, useState } from 'react'

export interface IInputProps {
  label: string
  name: string
  type?: string
  value?: string
  className?: string
  placeholder?: string
  error: string | undefined
  onChange: FormikHandlers['handleChange']
}

const Input: FC<IInputProps> = ({
  name,
  label,
  error,
  onChange,
  value = '',
  type = 'text',
  className = '',
  placeholder = ''
}) => {
  const ref = useRef<HTMLInputElement | null>(null)
  const [active, setActive] = useState(false)
  const labelCSS = active ? 'text-[11px] -top-[16px]' : 'top-1'
  const inputCSS = active && 'border-green-700'

  useEffect(() => {
    if (value.length) setActive(true)
  }, [value])

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

      <input
        ref={ref}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className={`
                    ease-in-out duration-300 w-full max-w-full absolute left-0 top-0 h-8
                    bg-transparent border-b-[1px] border-gray-400 text-sm ${inputCSS}`}
        onFocus={() => {
          setActive(true)
          ref.current?.classList.add('border-green-700')
        }}
        onBlur={() => {
          ref.current?.classList.remove('border-green-700')
          const noLength = ref.current && !ref.current.value.length
          if (noLength) setActive(false)
        }}
      />

      {error ? (
        <p className="absolute -bottom-[22px] left-0 text-[11px] text-red-500 text-right w-full error">
          * {error}
        </p>
      ) : null}
    </div>
  )
}

export { Input }
