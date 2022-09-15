import * as Yup from 'yup'
import { Formik } from 'formik'
import ModalForm from '../ModalForm'
import { useRouter } from 'next/router'
import React, { FC, useRef, useState } from 'react'
import SpinIcon2 from '../../../public/icons/SpinIcon2'
import { catalogI } from '../../../general/types/catalog'
import { useAuth } from '../../../context/AuthContext/types'
import { useCatalogStore } from '../../../store/catalogStore'
import { Input } from '../../../components/Forms/Inputs/Default'
import { useSetUtils } from '../../../context/UtilsContext/types'

interface Btn {
    text: string
}
interface props {
    dataItem: { index: number; thumb: string }
    setCatalogList: (
        table: string,
        id: string,
        data: catalogI[]
    ) => Promise<void>
}

const validation = Yup.object({
    thumb: Yup.string().required('Required')
})

const AlterItem: FC<props> = ({ dataItem, setCatalogList }) => {
    const { modal, alert } = useSetUtils()
    const [loading, setLoading] = useState(false)
    const { user } = useAuth()
    const store = useCatalogStore()
    const { query } = useRouter()
    const state = query.type as string
    const btnRef = useRef<HTMLButtonElement>(null)

    const Spin = <SpinIcon2 className="positive -top-1" />
    // prettier-ignore
    const BtnSend: FC<Btn> = ({ text }) => (!loading ? <span>{text}</span> : Spin)

    async function handleUpdate(data: catalogI): Promise<void> {
        try {
            if (user == null) throw new Error('User not identified')
            if (loading) return
            setLoading(true)

            store.updateItem(dataItem.index, data, state)
            const newData = [...store.data[state]]
            await setCatalogList(state, user.uid, newData)

            alert.open('Item Updated successfully', 1)
            modal.close()
        } catch (e) {
            console.log(e, 'error')
            alert.open('Sorry, but something went wrong. Try again', 2)
        } finally {
            setLoading(false)
        }
    }

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
        <div data-cy="form-alterItem">
            <ModalForm>
                <Formik
                    initialValues={{
                        name: '',
                        thumb: dataItem.thumb,
                        type: ''
                    }}
                    validationSchema={validation}
                    validateOnChange={false}
                    validateOnBlur={false}
                    onSubmit={async (data, { validateForm }) => {
                        await validateForm()
                        await handleUpdate(data)
                    }}
                >
                    {formik => (
                        <form
                            className="flex flex-col mt-[-20px] px-10 py-5 md:py-6 bg-primary rounded-lg relative overscroll-y-auto shadow-2xl border-l-8 border-indigo-700"
                            onSubmit={formik.handleSubmit}
                        >
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

                            <div className="flex justify-between">
                                <button
                                    className="btn-solid bg-indigo-700 py-[8px] h-[39px] w-[90px] self-end items-center relative left-0 md:top-1 text-sm"
                                    type="submit"
                                    disabled={!!loading}
                                    ref={btnRef}
                                    data-cy="btn-update"
                                >
                                    <BtnSend text="Update" />
                                </button>
                                <button
                                    className="btn-solid bg-red-600 py-[8px] h-[39px] w-[90px]
                                        self-start items-center relative left-6 md:top-1 text-sm"
                                    disabled={!!loading}
                                    onClick={handleDelete}
                                    data-cy="btn-delete"
                                >
                                    <BtnSend text="Delete" />
                                </button>
                            </div>
                        </form>
                    )}
                </Formik>
            </ModalForm>
        </div>
    )
}

export { AlterItem }
