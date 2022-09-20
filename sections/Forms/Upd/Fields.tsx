import React, { FC, ReactElement, RefObject } from 'react'
import { FormikProps } from 'formik'
import { Input } from 'components/Forms/Inputs/Default'

interface Props {
    formik: FormikProps<{ thumb: string }>
    loading: boolean
    btnRef: RefObject<HTMLButtonElement>
    BtnSend: ReactElement
}

const Fields: FC<Props> = ({ formik, loading, btnRef, BtnSend }) => {
    return (
        <>
            <h3 className="mb-5 text-xl text-white font-bold mt-1">
                Update Item or Delete
            </h3>

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
                className="btn-solid bg-indigo-700 py-[8px] h-[39px] w-[90px] self-end items-center relative left-6 md:top-1 text-sm"
                type="submit"
                disabled={!!loading}
                ref={btnRef}
                data-cy="btn-update"
            >
                {BtnSend}
            </button>
        </>
    )
}

export default Fields
