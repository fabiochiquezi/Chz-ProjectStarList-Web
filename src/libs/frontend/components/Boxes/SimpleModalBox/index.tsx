import { FC, ReactNode } from 'react'
import { CloseIcon } from '../../../assets'
import { IPresentComponent } from '../../types'

export type IModalBox = FC<{
  closeModal: () => void
  children?: ReactNode
} & IPresentComponent>

const ModalBox: IModalBox = ({ children, closeModal, className }) => (
  <div
    data-testid="SimpleForm"
    className={`fadeIn-comeFromLeft absolute w-[316px] mx-auto z-50 left-[50%] ml-[-158px] top-[10%] sm:max-w-[440px] sm:ml-[-220px] sm:top-[10%] sm:w-full md:max-w-[600px] md:ml-[-300px] md:top-[20%] lg:top-[25%] ${className}`}
  >
    <div
      onClick={closeModal}
      className="absolute right-4 top-0 p-8 -mr-8 -mt-8 anim-button z-10"
      data-testid="closeIcon"
    >
      <CloseIcon width={22} height={16} />
    </div>
    <div className="flex flex-col mt-[-20px] px-10 py-5 md:py-6 bg-primary rounded-lg relative overscroll-y-auto shadow-2xl border-l-8 border-indigo-700 bg-skin-base-primary">
      {children}
    </div>
  </div>
)


export { ModalBox }
