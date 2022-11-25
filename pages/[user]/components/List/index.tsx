import { Thumb } from './Thumb'
import { BtnLoad } from './BtnLoad'
import { Title, TitleEmpty } from './Title'
import { Serie } from 'pages/share/types/Catalog/Serie'
import { Movie } from '../../../share/types/Catalog/Movie'
import { useAuth } from '../../../share/auth/types/usetypes'
import React, { FC, ReactElement, useCallback, useState } from 'react'

interface props {
    title: string
    description: string
    list: Array<Movie | Serie>
    setList: React.Dispatch<React.SetStateAction<Array<Movie | Serie>>>
}

const List: FC<props> = ({ title, description, list, setList }) => {
    const { user } = useAuth()

    const [limit, setLimit] = useState(15)
    const max = list.length ?? 0
    const TitleDefault = <Title title={title} description={description} />
    const TitlePage = (): ReactElement => (!max ? TitleEmpty : TitleDefault)

    const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
        if (!user) return
        try {
            // popSave.open()
            const newData = list.map((item, index) => {
                if (index === dragIndex) return list[hoverIndex]
                if (index === hoverIndex) return list[dragIndex]
                return item
            })
            setList(newData)
            // setCatalogList(type, user.uid, newData)
        } catch (e) {
            console.log(e, 'error')
            // alert.open({
            //     message: 'Sorry, but something went wrong. Try again',
            //     mode: 2
            // })
        } finally {
            // popSave.close(600)
        }
    }, [])

    const renderCard = useCallback(
        (card: { thumb: string }, index: number) => (
            <Thumb
                key={index}
                index={index}
                id={index}
                thumb={card.thumb}
                moveCard={moveCard}
                max={max - 1}
            />
        ),
        []
    )

    function turnUpLimit(): void {
        setLimit(limit => limit + 15)
    }

    return (
        <div>
            <main
                className="container mx-auto px-4 grid justify-items-center
                sm:grid-cols-3 lg:grid-cols-5
                lg:justify-items-end
                xl:grid-cols-6 xl:grid-cols-7
                2xl:justify-items-center"
                data-cy="section-list"
            >
                <TitlePage />
                {list.map((card: any, i: number) => {
                    if (i >= limit) return null
                    return renderCard(card, i)
                })}
                {limit < max && list.length && (
                    <BtnLoad onClick={turnUpLimit} />
                )}
            </main>
        </div>
    )
}

export { List }
