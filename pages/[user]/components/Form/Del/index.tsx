import React, { FC, useState } from 'react'
import { SpinIcon } from 'pages/_share/assets'

const DeleteItem: FC = () => {
  const [loading, setLoading] = useState(false)

  function handleDelete(): void {
    try {
      if (loading) return
      setLoading(true)
    } catch (e) {
      console.log(e, 'error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <h3 className="mb-5 text-xl text-white font-bold mt-1">
        Delete Item
      </h3>

      <div className="mt-3 md:grid max-w-[300px] gap-x-8">
        <p className="text-white mb-6">
          Are you sure you want to delete this item? This action cannot be reversed
        </p>
      </div>

      <button
        className="btn-solid bg-red-600 py-[8px] h-[39px] w-[90px] relative left-6 md:top-1 text-sm self-end"
        disabled={!!loading}
        onClick={handleDelete}
        data-cy="btn-delete"
      >
        {!loading ? <span>Delete</span> : <SpinIcon className="positive -top-1" />}
      </button>
    </>
  )
}
export { DeleteItem }
