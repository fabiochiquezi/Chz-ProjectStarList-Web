import { FC, ReactNode, useEffect } from 'react'

export interface IModalProps {
  closeModal: () => void
  children?: ReactNode
}

const Modal: FC<IModalProps> = ({ children, closeModal }) => {
  function closeWithKey(event: KeyboardEvent): void {
    event.preventDefault()
    const esc = event.key === 'Escape'
    if (esc) closeModal()
  }

  useEffect(() => {
    const html = document.querySelector('html')
    if (html) html.style.overflow = 'hidden'
    document.addEventListener('keydown', closeWithKey)
    return () => {
      document.removeEventListener('keydown', closeWithKey)
      if (html) html.style.overflow = 'auto'
    }
  }, [])

  return (
    <div
      className="modal-anim fixed w-full h-full left-0 top-0 z-40 overflow-y-scroll overflow-x-hidden"
      data-testid="Modal"
    >
      <div
        className="absolute w-full h-full left-0 top-0 bg-black opacity-75"
        onClick={closeModal}
      ></div>
      {children}
    </div>
  )
}

export { Modal }
