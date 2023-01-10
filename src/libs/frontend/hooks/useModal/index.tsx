import React, { FC, ReactNode, useRef, useState } from 'react'
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
  const ref = useRef<HTMLDivElement>(null)

  const closeModal: ICloseModal = () => {
    const el = ref.current?.childNodes[0] as HTMLDivElement
    const box = el.querySelector('.fadeIn-comeFromLeft')
    box?.classList.add('fadeOut-comeFromLeft')
    box?.classList.remove('fadeIn-comeFromLeft')
    el?.classList.add('fade-out-anim')
    setTimeout(() => {
      setModalState(prev => ({ ...prev, state: false }))
    }, 450)
  }

  const openModal: IOpenModal = (data) => (data
    ? setModalState({ state: true, data: data })
    : setModalState(prev => ({ ...prev, state: true }))
  )

  const ModalHOC: IModalHOC = ({ children, ModalBox }) => (modalState.state ? (
    <div ref={ref}>
      <Modal closeModal={closeModal}>
        <ModalBox closeModal={closeModal}>
          {children}
        </ModalBox>
      </Modal>
    </div>
  ) : null)


  return { modalState, ModalHOC, closeModal, openModal }
}

export { useModal }
