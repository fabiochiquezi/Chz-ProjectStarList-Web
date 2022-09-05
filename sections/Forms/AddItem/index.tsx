import Fields from './Fields'
import { Formik } from 'formik'
import { dataForm } from './types'
import ModalForm from '../ModalForm'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { validation } from './validation'
import SpinIcon2 from 'public/icons/SpinIcon2'
import { useSetUtils } from 'context/UtilsContext'
import { useAuth } from 'context/AuthContext/types'
import { useCatalogStore } from 'store/catalogStore'
import { postFireDoc } from 'firebase/firestore/post'

const AddItem: React.FC = () => {
    const { setModal, openAlert } = useSetUtils()
    const [loading, setLoading] = useState(false)
    const { user } = useAuth()
    const store = useCatalogStore()
    const { query } = useRouter()
    const state = query.type as string
    const BtnSend = () =>
        !loading ? <span>Send</span> : <SpinIcon2 className="positive -top-1" />

    async function handleSubmit(data: dataForm) {
        if (!user) throw new Error('User not identified')
        if (loading) return
        setLoading(true)

        try {
            await postFireDoc(state, user.uid, data)
            store.addItem(data, state)
            openAlert('Item added successfully', 1)
            setModal(false)
        } catch (e) {
            openAlert('Sorry, but something went wrong. Try again', 2)
        } finally {
            setLoading(false)
        }
    }

    return (
        <ModalForm>
            <Formik
                initialValues={{ name: '', thumb: '', type: '' }}
                validationSchema={validation}
                validateOnChange={false}
                validateOnBlur={false}
                onSubmit={(data, props) => {
                    props.validateForm()
                    handleSubmit(data)
                }}
            >
                {formik => (
                    <form
                        className="flex flex-col mt-[-20px] px-10 py-5 md:py-6 bg-primary rounded-lg relative overscroll-y-auto shadow-2xl border-l-8 border-indigo-700"
                        onSubmit={formik.handleSubmit}
                    >
                        <h3 className="mb-5 text-xl font-bold mt-1">
                            Add new item
                        </h3>

                        <div className="mt-3 md:grid grid-cols-2 gap-x-8">
                            <Fields formik={formik} />
                        </div>

                        <button
                            className="btn-solid bg-green-700 py-[8px] h-[39px] w-[90px] self-end items-center relative left-6 md:top-1 text-sm"
                            type="submit"
                            disabled={loading ? true : false}
                        >
                            <BtnSend />
                        </button>
                    </form>
                )}
            </Formik>
        </ModalForm>
    )
}

export default AddItem
