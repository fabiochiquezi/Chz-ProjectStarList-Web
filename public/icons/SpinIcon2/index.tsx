import React from 'react'
import styles from './SpineIcon.module.css'

interface props {
    className?: string
    width?: number
    height?: number
    color?: string
    stroke?: number
}

const SpinIcon2: React.FC<props> = ({
    className,
    width = 16,
    height = 16,
    color = '#fff',
    stroke = 2
}) => {
    return (
        <div
            className={styles.ldsRing}
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
}

export default SpinIcon2
