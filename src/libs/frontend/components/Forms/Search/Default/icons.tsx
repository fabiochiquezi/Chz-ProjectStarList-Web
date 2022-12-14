import React from 'react'

const SearchIcon: React.FC = () => {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="7" cy="7" r="6" stroke="white" strokeWidth="2" />
      <path d="M13 11L16 14.5" stroke="white" strokeWidth="2" />
    </svg>
  )
}

const SearchIconOrange: React.FC = () => {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="7" cy="7.40662" r="6" stroke="#3A5880" strokeWidth="2" />
      <path d="M13 11.4066L16 14.9066" stroke="#3A5880" strokeWidth="2" />
    </svg>
  )
}

export { SearchIcon, SearchIconOrange }
