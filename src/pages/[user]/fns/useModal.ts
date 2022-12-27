import { useState } from 'react'

type IModal = () => {
  modal: { type: string, state: boolean };
  closeModal: () => void;
  openModalUpdate: () => void;
  openModalDelete: () => void;
}

const useModal: IModal = () => {
  const [modal, setModal] = useState({ type: '', state: false })

  function closeModal(): void {
    setModal(prev => ({ ...prev, state: false }))
  }
  function openModalUpdate(): void {
    setModal(prev => ({ type: 'update', state: true }))
  }
  function openModalDelete(): void {
    setModal(prev => ({ type: 'delete', state: true }))
  }

  return { modal, closeModal, openModalUpdate, openModalDelete }
}

export { useModal }
