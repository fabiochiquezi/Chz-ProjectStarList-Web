import Title from './Title'
import Thumb from 'components/Thumb'
import React, { useState } from 'react'
import StateButtons from './StateButtons'
import { catalogI } from 'general/types/catalog'
import AddThumb from 'components/Thumb/AddThumb'
import { useSetUtils } from 'context/UtilsContext'
import ButtonLoad from 'components/Buttons/ButtonLoad'

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
    const { setModal } = useSetUtils()
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
                    titleList="YOUR LIST IS EMPTY"
                    descriptionList="Start adding movies, books... Right now!"
                />
            ) : (
                <Title titleList={title} descriptionList={description} />
            )}

            {menu && menu && <AddThumb onClick={() => setModal(true)} />}

            {catalog &&
                catalog.map(({ thumb, name }, index) => {
                    if (index > limit) return
                    return (
                        <Thumb
                            key={index}
                            index={index}
                            thumb={thumb}
                            name={name}
                        />
                    )
                })}

            {menu && limit < max && catalog.length && (
                <ButtonLoad onClick={turnUpLimit} />
            )}
        </main>
    )
}

export default List
