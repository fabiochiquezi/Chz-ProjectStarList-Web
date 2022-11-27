import React from 'react'

interface props {
  width?: number
  height?: number
  stroke?: number
  strokeColor?: string
}

const CloseIcon: React.FC<props> = ({
  width = 22,
  height = 24,
  stroke = 2,
  strokeColor = 'white'
}) => {
  return (
    <svg
      width="20"
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="1.6862"
        y1={width}
        x2={width}
        y2="1.68632"
        stroke={strokeColor}
        strokeWidth={stroke}
      />
      <path
        d="M1.99341 1.59338C10.2777 9.87765 14.9223 14.5223 23.2066 22.8066"
        stroke={strokeColor}
        strokeWidth={stroke}
      />
    </svg>
  )
}

export { CloseIcon }
