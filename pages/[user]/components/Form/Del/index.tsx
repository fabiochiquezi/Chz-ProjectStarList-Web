import { DelProps } from './types'
import { useRouter } from 'next/router'
import { useSetUtils } from 'structure/Utils/types'
import { useAuth } from '../../../structure/Auth/types'
import SpinIcon from '../../../pages/share/assets/icons/SpinIcon'
import React, { FC, ReactElement, useRef, useState } from 'react'
import { ModalForm } from 'structure/Utils/Modal/Form/ModalWrap'

const DeleteItem: FC<DelProps> = ({ dataItem, setCatalogList }) => {
    const { modal, alert, popSave } = useSetUtils()
    const [loading, setLoading] = useState(false)
    const { user } = useAuth()
    // const store = useCatalogStore()
    const { query } = useRouter()
    const state = query.type as string
    const btnRef = useRef<HTMLButtonElement>(null)
    const Spin = <SpinIcon className="positive -top-1" />
    const BtnSend = (): ReactElement => (!loading ? <span>Delete</span> : Spin)

    function handleDelete(): void {
        try {
            if (user == null) throw new Error('User not identified')
            if (loading) return

            setLoading(true)
            popSave.open()
            // store.deleteItem(dataItem.index, state)
            // const newData = [...store.data[state]] as catalogI[]
            // setCatalogList(state, user.uid, newData)
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
        <div data-cy="form-delItem">
            <ModalForm>
                <div className="flex flex-col mt-[-20px] px-10 py-5 md:py-6 bg-primary rounded-lg relative overscroll-y-auto shadow-2xl border-l-8 border-indigo-700">
                    <h3 className="mb-5 text-xl text-white font-bold mt-1">
                        Delete Item
                    </h3>

                    <div className="mt-3 md:grid max-w-[300px] gap-x-8">
                        <p className="text-white mb-6">
                            Are you sure you want to delete this item? This
                            action cannot be reversed
                        </p>
                    </div>

                    <button
                        className="btn-solid bg-red-600 py-[8px] h-[39px] w-[90px]
                                         relative left-6 md:top-1 text-sm self-end"
                        disabled={!!loading}
                        onClick={handleDelete}
                        data-cy="btn-delete"
                    >
                        <BtnSend />
                    </button>
                </div>
            </ModalForm>
        </div>
    )
}
export { DeleteItem }
