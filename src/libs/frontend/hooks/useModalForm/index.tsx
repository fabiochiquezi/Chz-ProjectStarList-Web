import { IOpenModal, useModal, IModalBox } from '../useModal'
import { FormikHOC, IFields } from '../../HOC'
import React, { FC } from 'react'

type IModalFormHOC = FC<{
  Fields: IFields,
  validation: any,
  initialValues: Record<string, string>
  onSubmit: (data: Record<string, string>) => Promise<void>
}>

type IUseModalForm = (ModalBox: IModalBox, FormHOC: typeof FormikHOC) => {
  modalData: Record<string, string>;
  openModal: IOpenModal;
  ModalFormHOC: IModalFormHOC;
}

const useModalForm: IUseModalForm = (ModalBox, FormHOC) => {
  const { modalState, ModalHOC, openModal, closeModal } = useModal()

  const ModalFormHOC: IModalFormHOC = (props) => {
    async function handleSubmit(data: Record<string, string>): Promise<void> {
      await props.onSubmit(data)
      closeModal()
    }

    return (
      <ModalHOC ModalBox={ModalBox}>
        <FormHOC {...props} onSubmit={handleSubmit} />
      </ModalHOC>
    )
  }

  return { modalData: modalState.data, openModal, ModalFormHOC }
}

export default useModalForm
