import React, { FC } from 'react'
import { IFields, useForm } from '../useForm/Formik'
import { IOpenModal, useModal, IModalBox } from '../useModal'

type IModalFormHOC = FC<{
  ModalBox: IModalBox,
  Fields: IFields,
  onSubmit: (data: Record<string, string>) => Promise<void>
}>

type IUseModalForm = (
  validation: any,
  initialValues: Record<string, string>
) => {
  modalData: Record<string, string>;
  openModal: IOpenModal;
  ModalFormHOC: IModalFormHOC;
}

const useModalForm: IUseModalForm = (validation: any, initialValues: any) => {
  const { modalState, ModalHOC, openModal, closeModal } = useModal()
  const { FormHOC } = useForm({ validation, initialValues })

  const ModalFormHOC: IModalFormHOC = ({ ModalBox, Fields, onSubmit }) => {
    async function handleSubmit(data: Record<string, string>): Promise<void> {
      await onSubmit(data)
      closeModal()
    }
    return (
      <ModalHOC ModalBox={ModalBox}>
        <FormHOC onSubmit={handleSubmit} Fields={Fields} />
      </ModalHOC>
    )
  }

  return { modalData: modalState.data, openModal, ModalFormHOC }
}

export default useModalForm
