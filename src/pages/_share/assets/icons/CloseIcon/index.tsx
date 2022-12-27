import React, { FC } from 'react'
import { IIconProps } from '../type'

const CloseIcon: FC<IIconProps> = ({
  className = '',
  width = 22,
  height = 24,
  stroke = 2,
  color = 'white'
}) => (
  <svg
    width="20"
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    data-testid="CloseIcon"
  >
    <line
      x1="1.6862"
      y1={width}
      x2={width}
      y2="1.68632"
      stroke={color}
      strokeWidth={stroke}
    />
    <path
      d="M1.99341 1.59338C10.2777 9.87765 14.9223 14.5223 23.2066 22.8066"
      stroke={color}
      strokeWidth={stroke}
    />
  </svg>
)


const CloseIconOrange: FC<IIconProps> = ({
  className = '',
  width = 22,
  height = 24,
  stroke = 2
}) => (
  <svg
    width="20"
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <line
      x1="1.6862"
      y1={width}
      x2={width}
      y2="1.68632"
      stroke="#3A5880"
      strokeWidth={stroke}
    />
    <path
      d="M1.99341 1.59338C10.2777 9.87765 14.9223 14.5223 23.2066 22.8066"
      stroke="#3A5880"
      strokeWidth={stroke}
    />
  </svg>
)


export { CloseIcon, CloseIconOrange }
