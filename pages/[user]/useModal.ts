import { useState } from 'react'


const useModal = () => {
  const [modal, setModal] = useState({ type: '', state: false })

  function closeModal(): void {
    setModal(prev => ({ ...prev, state: false }))
  }
  function openUpdateModal(): void {
    setModal(prev => ({ type: 'update', state: true }))
  }
  function openDeleteModal(): void {
    setModal(prev => ({ type: 'delete', state: true }))
  }

  return { modal, closeModal, openUpdateModal, openDeleteModal }
}

export { useModal }
