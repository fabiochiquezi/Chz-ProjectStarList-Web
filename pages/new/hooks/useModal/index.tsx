import { AddModal } from 'pages/new/components/FormAddFields'
import { Modal } from 'pages/_share/components'
import { useAlert } from 'pages/_share/portals'
import React, { useCallback, useState } from 'react'

// import { Container } from './styles';

const useModal: any = () => {
  const alert = useAlert()
  const [addModal, setAddModal] = useState({ state: false, item: '' })

  const closeModal = (): void => setAddModal(prev => ({ ...prev, state: false }))
  const openModal = (id: string | number): void => setAddModal({ state: true, item: String(id) })

  const AddModalWork = useCallback(() => {
    return addModal.state ? (
      <Modal closeModal={closeModal}>
        <AddModal
          closeModal={closeModal}
          onSubmit={async data => {
            try {
              const userName = String(user?.userName)
              const itemId = addModal.item
              await submitModalFirebase(results, itemId, userName)(data)
              alert.success('okkkk')
            } catch (e) {
              console.log(e)
              alert.error('noooooo')
            } finally {
              // closeModal(setAddModal)
            }
          }}
        />
      </Modal>
    ) : null
  }, [addModal.state])

  return { closeModal, openModal, AddModalWork }
}

export default useModal
