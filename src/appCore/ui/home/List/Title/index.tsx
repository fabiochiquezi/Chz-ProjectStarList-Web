import { FC } from 'react'

export type ITitle = FC<{
  title: string,
  description: string
}>

const Title: ITitle = ({ title, description }) => (
  <h1
    className="mb-12 max-w-[300px] order-1 sm:mb-16 col-span-2 pt-8 lg:mb-0 lg:max-w-[360px] lg:oder-2 lg:col-span-2 lg:pt-6 lg:pl-7 xl:pl-4 xl:pt-3 2xl:pt-4 2xl:max-w-[400px] 2xl:pl-12"
  >
    <span className="text-[44px] lg:text-[42px] xl:text-[46px] 2xl:text-[44px] leading-tight lg:leading-normal text-skin-primary font-bold ">
      {title}
    </span>
    <br />
    <span className="text-[18px] mt-4 inline-block text-skin-font-primary ">
      {description}
    </span>
  </h1>
)

export { Title }
