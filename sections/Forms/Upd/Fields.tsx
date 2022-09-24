import React, { FC, ReactElement, RefObject } from 'react'
import { FormikProps } from 'formik'
import { Input } from 'components/Forms/Inputs/Default'
import { Select } from 'components/Forms/Select/Default'

interface Props {
    formik: FormikProps<{ thumb: string; state: string }>
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
                <Select
                    label="Type"
                    className="mb-9"
                    name="state"
                    onChange={formik.handleChange}
                    value={formik.values.state}
                    error={formik.errors.state}
                    defaultValue={formik.values.state}
                >
                    <option className="bg-primary text-white" value={'doing'}>
                        Doing
                    </option>
                    <option className="bg-primary text-white" value={'illdo'}>
                        I&apos;ll do
                    </option>
                    <option className="bg-primary text-white" value={'did'}>
                        Did
                    </option>
                </Select>
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
