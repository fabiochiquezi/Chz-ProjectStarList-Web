import Link from 'next/link'
import React, { FC } from 'react'

interface IBtnOutline {
  href: string
  isActive: boolean
  text: string
}

const BtnOutline: FC<IBtnOutline> = ({ href, isActive, text }) => (
  <Link href={href}>
    <a
      className={`w-[70px] h-[32px] border-2 border-white rounded-lg inline-block flex justify-center items-center mr-4 anim-button text-sm ${isActive ? 'bg-skin-primary-v2 border-skin-primary-v2' : 'bg-transparent border-white'}`}
    >
      {text}
    </a>
  </Link>
)


export { BtnOutline }
