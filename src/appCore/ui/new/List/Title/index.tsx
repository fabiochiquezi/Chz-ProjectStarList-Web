import React, { FC } from 'react'

interface props {
  title: string
  description: string
}

const Title: FC<props> = ({ title, description }) => (
  <h1 className="lg:col-span-1 self-center mb-[64px] text-center">
    <span className="text-[44px] lg:text-[42px] xl:text-[46px] 2xl:text-[44px] leading-tight lg:leading-normal text-skin-primary font-bold uppercase">
      {title}
    </span>
    <br />
    <span>{description}</span>
  </h1>
)


export { Title }
