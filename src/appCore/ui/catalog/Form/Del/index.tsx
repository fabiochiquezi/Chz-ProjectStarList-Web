import { FormikProps } from 'formik'
import React, { FC } from 'react'

type IDeleteFields = FC<{
  formik: FormikProps<Record<string, string>>
  BtnSubmit?: FC<{ title?: string }>
}>

export const DeleteFields: IDeleteFields = ({ formik, BtnSubmit }) => (
  <>
    <h3 className="mb-5 text-xl text-white font-bold mt-1">
      Delete Item
    </h3>

    <div className="mt-3 md:grid max-w-[300px] gap-x-8">
      <p className="text-white mb-6">
        Are you sure you want to delete this item? This action cannot be reversed
      </p>
    </div>

    {BtnSubmit && <BtnSubmit />}
  </>
)

