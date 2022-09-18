import Fields from './Fields'
import { Formik } from 'formik'
import ModalForm from '../ModalForm'
import { useRouter } from 'next/router'
import { validation } from './validation'
import { catalogI } from '../../../general/types/catalog'
import React, { useEffect, useRef, useState } from 'react'
import { useAuth } from '../../../context/AuthContext/types'
import { useCatalogStore } from '../../../store/catalogStore'
import { useSetUtils } from '../../../context/UtilsContext/types'
import { keyDownBtnTrigger } from 'helpers/keyDownBtnTrigger'

interface props {
    setCatalogList: (
        table: string,
        id: string,
        data: catalogI[]
    ) => Promise<void>
}

const AddItem: React.FC<props> = ({ setCatalogList }) => {
    const { modal, alert, popSave } = useSetUtils()
    const [loading, setLoading] = useState(false)
    const { user } = useAuth()
    const store = useCatalogStore()
    const { query } = useRouter()
    const state = query.type as string
    const btnRef = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        keyDownBtnTrigger(btnRef)
    }, [])

    async function handleSubmit(data: catalogI): Promise<void> {
        try {
            if (user == null) throw new Error('User not identified')
            if (loading) return
            setLoading(true)
            popSave.open()

            const newList = [...store.data[state], { ...data }]
            setCatalogList(state, user.uid, newList)
            store.addItem(data, state)

            alert.open('Item added successfully', 1)
            modal.close()
        } catch (e) {
            console.log(e, 'error')
            alert.open('Sorry, but something went wrong. Try again', 2)
        } finally {
            setLoading(false)
            popSave.close()
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
                        await handleSubmit(data)
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
