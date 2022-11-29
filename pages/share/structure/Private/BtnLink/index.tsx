import React from 'react'

interface IBtnLinkProps {
  onClick: () => void
  isActive: boolean
  text: string
}

const BtnLink: React.FC<IBtnLinkProps> = ({ onClick, isActive, text }) => (
  <a
    data-testid="BtnLink"
    onClick={onClick}
    className={`md:text-3xl lg:text-[14px] lg:mr-6 w-full lg:w-auto py-4 inline-block md:py-10 lg:py-0 anim-button ${
      isActive && 'text-orange-400'
    }`}
  >
    {text}
  </a>
)

export { BtnLink }
