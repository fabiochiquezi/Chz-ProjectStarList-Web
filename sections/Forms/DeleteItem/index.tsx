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
    dataItem: { index: number; thumb: string }
    setCatalogList: (
        table: string,
        id: string,
        data: catalogI[]
    ) => Promise<void>
}

const DeleteItem: React.FC<props> = ({ dataItem, setCatalogList }) => {
    const { modal, alert } = useSetUtils()
    const [loading, setLoading] = useState(false)
    const { user } = useAuth()
    const store = useCatalogStore()
    const { query } = useRouter()
    const state = query.type as string
    const btnRef = useRef<HTMLButtonElement>(null)
    const Spin = <SpinIcon2 className="positive -top-1" />
    const BtnSend = (): ReactElement => (!loading ? <span>Delete</span> : Spin)

    useEffect(() => {
        document.addEventListener('keydown', function (event) {
            if (event.key === 'Enter' && btnRef.current != null) {
                event.preventDefault()
                btnRef.current.click()
            }
        })
    }, [])

    function handleDelete(): void {
        if (user == null) throw new Error('User not identified')
        if (loading) return
        setLoading(true)

        store.deleteItem(dataItem.index, state)
        const newData = [...store.data[state]] as catalogI[]
        setCatalogList(state, user.uid, newData)
            .then(() => {
                alert.open('Item deleted successfully', 1)
                modal.close()
            })
            .catch(e => {
                console.log(e, 'error')
                alert.open('Sorry, but something went wrong. Try again', 2)
            })
            .finally(() => {
                setLoading(false)
            })
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
                                Delete Item
                            </h3>

                            <div className="mt-3 md:grid max-w-[300px] gap-x-8">
                                <p className="text-white mb-6">
                                    Are you sure you want to delete this item?
                                    This action cannot be reversed
                                </p>
                            </div>

                            <button
                                className="btn-solid bg-red-600 py-[8px] h-[39px] w-[90px]
                                         relative left-6 md:top-1 text-sm self-end"
                                disabled={!!loading}
                                onClick={handleDelete}
                                data-cy="btn-delete"
                            >
                                <BtnSend text="Delete" />
                            </button>
                        </form>
                    )}
                </Formik>
            </ModalForm>
        </div>
    )
}
export { DeleteItem }
