import * as Yup from 'yup'
import { Formik } from 'formik'
import ModalForm from '../ModalForm'
import { useRouter } from 'next/router'
import SpinIcon2 from '../../../public/icons/SpinIcon2'
import { catalogI } from '../../../general/types/catalog'
import { useAuth } from '../../../context/AuthContext/types'
import { useCatalogStore } from '../../../store/catalogStore'
import { Input } from '../../../components/Forms/Inputs/Default'
import { useSetUtils } from '../../../context/UtilsContext/types'
import React, { ReactElement, useEffect, useRef, useState } from 'react'

const validationYup = Yup.object({
    thumb: Yup.string().required('Required')
})

interface props {
    setCatalogList: (
        table: string,
        id: string,
        data: catalogI[]
    ) => Promise<void>
}

const AddItem: React.FC<props> = ({ setCatalogList }) => {
    const { modal, alert } = useSetUtils()
    const [loading, setLoading] = useState(false)
    const { user } = useAuth()
    const store = useCatalogStore()
    const { query } = useRouter()
    const state = query.type as string
    const btnRef = useRef<HTMLButtonElement>(null)

    const Spin = <SpinIcon2 className="positive -top-1" />
    const BtnSend = (): ReactElement => (!loading ? <span>Send</span> : Spin)

    useEffect(() => {
        document.addEventListener('keydown', function (event) {
            if (event.key === 'Enter' && btnRef.current != null) {
                event.preventDefault()
                btnRef.current.click()
            }
        })
    }, [])

    async function handleSubmit(data: catalogI): Promise<void> {
        try {
            if (user == null) throw new Error('User not identified')
            if (loading) return
            setLoading(true)
            const newList = [...store.data[state], { ...data }]
            await setCatalogList(state, user.uid, newList)
            store.addItem(data, state)
            alert.open('Item added successfully', 1)
            modal.close()
        } catch (e) {
            console.log(e, 'error')
            alert.open('Sorry, but something went wrong. Try again', 2)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div data-cy="form-addNewItem">
            <ModalForm>
                <Formik
                    initialValues={{ thumb: '' }}
                    validationSchema={validationYup}
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
                            <h3 className="mb-5 text-xl text-white font-bold mt-1">
                                Add new item
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
        </div>
    )
}
export { AddItem }
