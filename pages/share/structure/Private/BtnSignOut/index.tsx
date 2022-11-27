import React from 'react'

interface IBtnSignOutProps {
  onClick: () => void | Promise<void>
}

const BtnSignOut: React.FC<IBtnSignOutProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="border-white lg:border-none border-2 rounded px-4 py-2 mt-2 lg:p-0 lg:mt-0 anim-button cursor-pointer"
  >
    Sign Out
  </button>
)

export { BtnSignOut }
