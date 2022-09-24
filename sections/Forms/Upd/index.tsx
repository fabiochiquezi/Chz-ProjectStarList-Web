import Fields from './Fields'
import { Formik } from 'formik'
import { props } from './types'
import { useRouter } from 'next/router'
import { validation } from './validation'
import { catalogI } from 'store/catalog/types'
import React, { FC, useRef, useState } from 'react'
import SpinIcon2 from '../../../public/icons/SpinIcon2'
import { ModalForm } from 'components/Modals/Form/ModalWrap'
import { useAuth } from '../../../context/AuthContext/types'
import { useCatalogStore } from '../../../store/catalog'
import { useSetUtils } from '../../../context/UtilsContext/types'
import { updateCatalogList } from 'firebase/catalog/updateList'

const UpdateItem: FC<props> = ({ dataItem, setCatalogList }) => {
    const { modal, alert, popSave } = useSetUtils()
    const [loading, setLoading] = useState(false)
    const { user } = useAuth()
    const store = useCatalogStore()
    const { query } = useRouter()
    const state = query.type as string
    const btnRef = useRef<HTMLButtonElement>(null)

    const Spin = <SpinIcon2 className="positive -top-1" />
    const BtnSend = !loading ? <span>Update</span> : Spin

    function handleUpdate(data: { thumb: string; state: string }): void {
        try {
            if (user == null) throw new Error('User not identified')
            if (loading) return

            const newTable = data.state
            const oldTable = state
            const isTheSameTable = oldTable === newTable

            if (!isTheSameTable) {
                const oldTableData = store.data[state]
                const newTableData = store.data[data.state]
                const ifHasTheSameIndex = (_: any, index: number): boolean =>
                    index !== dataItem.index
                const changeOldTable = oldTableData.filter(ifHasTheSameIndex)
                const changeNewTable = [...newTableData, data]

                store.setData(changeOldTable, state)
                store.setData(changeNewTable, data.state)
                setCatalogList(state, user.uid, changeOldTable)
                setCatalogList(data.state, user.uid, changeNewTable)
            } else {
                store.updateItem(dataItem.index, data, state)
                const newData = [...store.data[state]]
                setCatalogList(state, user.uid, newData)
            }

            setLoading(true)
            popSave.open()
            modal.close()
        } catch (e) {
            console.log(e, 'error')
            alert.open('Sorry, but something went wrong. Try again', 2)
        } finally {
            setLoading(false)
            popSave.close(2000)
        }
    }

    return (
        <div data-cy="form-alterItem">
            <ModalForm>
                <Formik
                    initialValues={{ thumb: dataItem.thumb, state: state }}
                    validationSchema={validation}
                    validateOnChange={false}
                    validateOnBlur={false}
                    onSubmit={async (data, { validateForm }) => {
                        await validateForm()
                        handleUpdate(data)
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
                                BtnSend={BtnSend}
                            />
                        </form>
                    )}
                </Formik>
            </ModalForm>
        </div>
    )
}

export { UpdateItem }
