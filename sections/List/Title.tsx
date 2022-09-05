import React from 'react'

interface props {
    titleList: string
    descriptionList: string
}

const Title: React.FC<props> = ({ titleList, descriptionList }) => (
    <h1
        className="mb-12 max-w-[300px] order-1
                sm:mb-16 sm:col-span-2 pt-8
                lg:mb-0 lg:max-w-[360px] lg:oder-2 lg:col-span-2 lg:pt-6 lg:pl-7
                xl:pl-4 xl:pt-3
                2xl:pt-4 2xl:pl-2 2xl:max-w-[400px] 2xl:pl-12"
    >
        <span
            className="text-[44px] lg:text-[42px] xl:text-[46px] 2xl:text-[44px] leading-tight
                   lg:leading-normal dark:text-orange-600 font-bold "
        >
            {titleList}
        </span>
        <br />
        <span className="text-[18px] mt-4 inline-block dark:text-white">
            {descriptionList}
        </span>
    </h1>
)

export default Title
