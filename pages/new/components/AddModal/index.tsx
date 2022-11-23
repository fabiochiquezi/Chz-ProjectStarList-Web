import Fields from './Fields'
import { Formik } from 'formik'
import { validation } from './validation'
import { CloseIcon } from 'pages/share/assets'
import React, { FC, useRef, useState } from 'react'

interface AddModalType {
    closeModal: () => void
    onSubmit: (data: { thumb: string }) => Promise<void>
}

const AddModal: FC<AddModalType> = ({ closeModal, onSubmit }) => {
    const [loading, setLoading] = useState(false)
    const btnRef = useRef<HTMLButtonElement>(null)

    async function handleSubmit(data: { thumb: string }): Promise<void> {
        setLoading(true)
        await onSubmit(data)
        setLoading(false)
    }

    return (
        <div
            className="absolute w-[90%] w-[316px] mx-auto z-50 left-[50%] ml-[-158px] top-[10%]
            sm:max-w-[440px] sm:ml-[-220px] sm:top-[10%] sm:w-full
            md:max-w-[600px] md:ml-[-300px] md:top-[20%]
            lg:top-[25%] form-add-anim"
        >
            <div
                onClick={closeModal}
                className="absolute right-4 top-0 p-8 -mr-8 -mt-8 simple-button z-10"
            >
                <CloseIcon width={22} height={16} />
            </div>

            <div data-cy="form-addNewItem">
                <Formik
                    initialValues={{ thumb: '' }}
                    validationSchema={validation}
                    validateOnChange={false}
                    validateOnBlur={false}
                    onSubmit={async (data, { validateForm }) => {
                        await validateForm()
                        handleSubmit(data)
                    }}
                >
                    {formik => (
                        <form
                            className="flex flex-col mt-[-20px] px-10 py-5 md:py-6 bg-primary rounded-lg relative overscroll-y-auto shadow-2xl border-l-8 border-indigo-700"
                            onSubmit={formik.handleSubmit}
                        >
                            <Fields
                                formik={formik}
                                loading={loading}
                                btnRef={btnRef}
                            />
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}
export { AddModal }
