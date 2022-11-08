import { FormikProps } from 'formik'
import React, { ReactElement, RefObject } from 'react'
import SpinIcon from '../../../general/assets/icons/SpinIcon'
import { Input } from '../../../components/Forms/Inputs/Default'

interface Props {
    formik: FormikProps<{ thumb: string }>
    loading: boolean
    btnRef: RefObject<HTMLButtonElement>
}

const Fields: React.FC<Props> = ({ formik, loading, btnRef }) => {
    const Spin = <SpinIcon className="positive -top-1" />
    const BtnSend = (): ReactElement => (!loading ? <span>Send</span> : Spin)

    return (
        <>
            <h3 className="mb-2 text-xl text-white font-bold mt-1">
                Add new item
            </h3>
            <p className="mb-5 text-white">
                Search for the work you want on google, select images, choose
                one, select &quot;copy link&quot; and paste here.
            </p>

            <div className="mt-3 md:grid grid-cols-2 gap-x-8">
                <Input
                    label="Cover"
                    className="mb-9"
                    placeholder="http://example.com"
                    name="thumb"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.thumb}
                    error={formik.errors.thumb}
                />
            </div>

            <button
                className="btn-solid bg-green-700 py-[8px] h-[39px] w-[90px] self-end items-center relative left-6 md:top-1 text-sm"
                type="submit"
                disabled={!!loading}
                ref={btnRef}
            >
                <BtnSend />
            </button>
        </>
    )
}

export default Fields
