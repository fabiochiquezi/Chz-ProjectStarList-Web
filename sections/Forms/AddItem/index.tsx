import Fields from './Fields'
import { Formik } from 'formik'
import { dataForm } from './types'
import ModalForm from '../ModalForm'
import { useRouter } from 'next/router'
import { validation } from './validation'
import SpinIcon2 from 'public/icons/SpinIcon2'
import { db } from 'firebase/firebaseSettings'
import { doc, setDoc } from 'firebase/firestore'
import { useAuth } from 'context/AuthContext/types'
import { useCatalogStore } from 'store/catalogStore'
import { useSetUtils } from 'context/UtilsContext/types'
import React, { useEffect, useRef, useState } from 'react'

const AddItem: React.FC = () => {
    const { closeModal, openAlert } = useSetUtils()
    const [loading, setLoading] = useState(false)
    const { user } = useAuth()
    const store = useCatalogStore()
    const { query } = useRouter()
    const state = query.type as string
    const btnRef = useRef<HTMLButtonElement>(null)
    const BtnSend = () =>
        !loading ? <span>Send</span> : <SpinIcon2 className="positive -top-1" />

    useEffect(() => {
        document.addEventListener('keydown', function (event) {
            if (event.key === 'Enter' && btnRef.current != null) {
                event.preventDefault()
                btnRef.current.click()
            }
        })
    }, [])

    async function handleSubmit(data: dataForm): Promise<void> {
        try {
            if (user == null) throw new Error('User not identified')
            if (loading) return
            setLoading(true)

            // await postFireDoc(state, user.uid, data)
            const ref = doc(db, state, user.uid)
            setDoc(
                ref,
                { list: [...store.data[state], { ...data }] },
                { merge: true }
            )

            store.addItem(data, state)
            openAlert('Item added successfully', 1)
            closeModal()
        } catch (e) {
            console.log(e, 'error')
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
                        <h3 className="mb-5 text-xl text-white font-bold mt-1">
                            Add new item
                        </h3>

                        <div className="mt-3 md:grid grid-cols-2 gap-x-8">
                            <Fields formik={formik} />
                        </div>

                        <button
                            className="btn-solid bg-green-700 py-[8px] h-[39px] w-[90px] self-end items-center relative left-6 md:top-1 text-sm"
                            type="submit"
                            disabled={!!loading}
                            ref={btnRef}
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
