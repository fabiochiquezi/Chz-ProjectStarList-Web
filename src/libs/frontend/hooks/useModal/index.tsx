import React, { FC, ReactNode, useState } from 'react'
import { Modal } from './Default'

export type IModalHOC = React.FC<{ children: ReactNode, ModalBox: IModalBox }>
export type IModalBox = FC<{ closeModal: () => void, children?: ReactNode }>

export type ICloseModal = () => void
export type IOpenModal = (data?: any) => void
export interface IModalState { state: boolean; data: Record<string, string>; }

export type IUseModal = () => {
  modalState: IModalState;
  ModalHOC: IModalHOC
  closeModal: ICloseModal
  openModal: IOpenModal
}

const useModal: IUseModal = () => {
  const [modalState, setModalState] = useState({ state: false, data: {} })

  const closeModal: ICloseModal = () =>
    setModalState(prev => ({ ...prev, state: false }))

  const openModal: IOpenModal = (data) => (data
    ? setModalState({ state: true, data: data })
    : setModalState(prev => ({ ...prev, state: true }))
  )

  const ModalHOC: IModalHOC = ({ children, ModalBox }) => (modalState.state ? (
    <Modal closeModal={closeModal}>
      <ModalBox closeModal={closeModal}>
        {children}
      </ModalBox>
    </Modal>
  ) : null)


  return { modalState, ModalHOC, closeModal, openModal }
}

export { useModal }
