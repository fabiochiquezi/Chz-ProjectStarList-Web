import Fields from './Fields'
import { Formik } from 'formik'
import { useRouter } from 'next/router'
import { validation } from './validation'
import { AddProps, dataSubmit } from './types'
import React, { useEffect, useRef, useState } from 'react'

import { useAuth } from '../../../structure/Auth/types'

import { keyDownBtnTrigger } from '../../../general/helpers/keyDownBtnTrigger'
import { useSetUtils } from 'structure/Utils/types'
import { ModalForm } from 'structure/Utils/Modal/Form/ModalWrap'

const AddItem: React.FC<AddProps> = ({ setCatalogList }) => {
    const { modal, alert, popSave } = useSetUtils()
    const [loading, setLoading] = useState(false)
    const { user } = useAuth()
    // const store = useCatalogStore()
    const { query } = useRouter()
    const state = query.type as string
    const btnRef = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        keyDownBtnTrigger(btnRef)
    }, [])

    function handleSubmit(data: dataSubmit): void {
        try {
            if (user === null) throw new Error('User not identified')
            if (loading) return

            setLoading(true)
            // const newList = [...store.data[state], { ...data }]
            // setCatalogList(state, user.uid, newList)
            // store.addItem(data, state)
            modal.close()
            popSave.open()
        } catch (e) {
            console.log(e, 'error')
            alert.open('Sorry, but something went wrong. Try again', 2)
        } finally {
            setLoading(false)
            popSave.close(2000)
        }
    }

    return (
        <div data-cy="form-addNewItem">
            <ModalForm>
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
            </ModalForm>
        </div>
    )
}
export { AddItem }
