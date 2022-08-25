import { catalogI } from '../../general/types/catalog'
import React, { useState } from 'react'
import ButtonLoad from '../../components/Buttons/ButtonLoad'
import StateButtons from './StateButtons'
import Title from './Title'
import Thumb from '../../components/Thumb'

interface props {
    catalog: catalogI[]
    title: string
    description: string
    menu?: boolean
}

const List: React.FC<props> = ({
    catalog,
    title,
    description,
    menu = true
}) => {
    const [limit, setLimit] = useState(15)
    const max = catalog ? catalog.length : 0

    function turnUpLimit() {
        setLimit(limit => limit + 15)
    }

    return (
        <main
            className="container mx-auto px-4 grid
            sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 xl:grid-cols-7
            justify-items-center lg:justify-items-end 2xl:justify-items-center"
        >
            {menu && menu && <StateButtons />}

            {!max ? (
                <Title
                    titleList="Your List is Empty"
                    descriptionList="Start add items in your list."
                />
            ) : (
                <Title titleList={title} descriptionList={description} />
            )}

            {catalog &&
                catalog.map(({ thumb, name }, index) => {
                    if (index > limit) return
                    return <Thumb index={index} thumb={thumb} name={name} />
                })}

            {menu && limit < max && catalog.length && (
                <ButtonLoad onClick={turnUpLimit} />
            )}
        </main>
    )
}

export default List
