import React, { FC } from 'react'
import { IIconProps } from '../type'

const SpinIcon: FC<IIconProps> = ({
  className = '',
  width = 16,
  height = 16,
  color = '#fff',
  stroke = 2
}) => (
  <div
    data-testid="SpinIcon"
    className={`spinnerDefault ${className}`}
    style={{ width: width + 20, height: height + 20 }}
  >
    <div
      style={{
        width,
        height,
        border: `${stroke}px solid ${color}`,
        borderColor: `${color} transparent transparent transparent`
      }}
    ></div>
    <div
      style={{
        width,
        height,
        border: `${stroke}px solid ${color}`,
        borderColor: `${color} transparent transparent transparent`
      }}
    ></div>
    <div
      style={{
        width,
        height,
        border: `${stroke}px solid ${color}`,
        borderColor: `${color} transparent transparent transparent`
      }}
    ></div>
    <div
      style={{
        width,
        height,
        border: `${stroke}px solid ${color}`,
        borderColor: `${color} transparent transparent transparent`
      }}
    ></div>
  </div>
)


export { SpinIcon }
