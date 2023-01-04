import { FC, ReactNode, useEffect } from 'react'
import { Div } from './styles'

export type IModal = FC<{
  children: ReactNode,
  closeModal: () => void
}>

const Modal: IModal = ({ children, closeModal }) => {
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
    <Div
      className="fixed w-full h-full left-0 top-0 z-40 overflow-y-scroll overflow-x-hidden"
      data-testid="Modal"
    >
      <div
        className="absolute w-full h-full left-0 top-0 bg-black opacity-75"
        onClick={closeModal}
      ></div>
      {children}
    </Div>
  )
}

export { Modal }
