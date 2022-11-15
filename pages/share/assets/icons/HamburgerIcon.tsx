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
            <line
                y1="1"
                x2={width}
                y2="1"
                stroke="white"
                strokeWidth={stroke}
            />
        </svg>
    )
}

export { HamburgerIcon }
