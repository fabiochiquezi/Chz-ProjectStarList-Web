import React, { FC } from 'react'
import { IModalProps } from '../../type'
import { CloseIcon } from '../../../../assets'


const SimpleForm: FC<IModalProps> = ({ children, closeModal }) => (
  <div
    data-testid="SimpleForm"
    className="absolute w-[90%] w-[316px] mx-auto z-50 left-[50%] ml-[-158px] top-[10%] sm:max-w-[440px] sm:ml-[-220px] sm:top-[10%] sm:w-full md:max-w-[600px] md:ml-[-300px] md:top-[20%] lg:top-[25%] modal-anim-2"
  >
    <div
      onClick={closeModal}
      className="absolute right-4 top-0 p-8 -mr-8 -mt-8 anim-button z-10"
      data-testid="closeIcon"
    >
      <CloseIcon width={22} height={16} />
    </div>
    <div className="flex flex-col mt-[-20px] px-10 py-5 md:py-6 bg-primary rounded-lg relative overscroll-y-auto shadow-2xl border-l-8 border-indigo-700">
      {children}
    </div>
  </div>
)


export { SimpleForm }
