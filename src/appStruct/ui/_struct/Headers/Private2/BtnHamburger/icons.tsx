import React from 'react'

interface props {
  width?: number
  height?: number
  stroke?: number
}

const HamburgerIcon: React.FC<props> = ({
  width = 20,
  height = 15,
  stroke = 2
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        y1="13.1666"
        x2={width}
        y2="13.1666"
        stroke="white"
        strokeWidth={stroke}
      />
      <line
        y1="7.08331"
        x2={width}
        y2="7.08331"
        stroke="white"
        strokeWidth={stroke}
      />
      <line y1="1" x2={width} y2="1" stroke="white" strokeWidth={stroke} />
    </svg>
  )
}

const HamburgerIconOrange: React.FC = () => {
  return (
    <svg
      width="24"
      height="21"
      viewBox="0 0 24 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        y1="19.4066"
        x2="24"
        y2="19.4066"
        stroke="#3A5880"
        strokeWidth="2"
      />
      <line
        y1="10.4066"
        x2="24"
        y2="10.4066"
        stroke="#3A5880"
        strokeWidth="2"
      />
      <line
        y1="1.40662"
        x2="24"
        y2="1.40662"
        stroke="#3A5880"
        strokeWidth="2"
      />
    </svg>
  )
}

export { HamburgerIcon, HamburgerIconOrange }
