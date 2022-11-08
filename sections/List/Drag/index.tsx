import { useRouter } from 'next/router'
import { catalogI } from '../../../general/types/catalog'
import { useCatalogStore } from 'store/catalog'
import { useAuth } from 'structure/Auth/types'
import { LoadButton } from 'components/Buttons/Load'
import { Title, TitleEmpty } from '../components/Title'
// import { setCatalogList } from 'firebase/catalog/setList'
import { DraggableThumb } from 'components/Thumbs/Draggable'
import React, {
    Dispatch,
    ReactElement,
    SetStateAction,
    useCallback,
    useState
} from 'react'
import { useSetUtils } from 'structure/Utils/types'
import { Movie, Serie } from 'types/TMDB'

interface props {
    title: string
    description: string
    list: Array<Movie | Serie>
    setList: Dispatch<SetStateAction<Array<Movie | Serie>>>
}

const containerClass = `
    container mx-auto px-4 grid justify-items-center
    sm:grid-cols-3 lg:grid-cols-5
    lg:justify-items-end
    xl:grid-cols-6 xl:grid-cols-7
    2xl:justify-items-center
`

const DragAndDropList: React.FC<props> = ({
    title,
    description,
    list,
    setList
}) => {
    const { query } = useRouter()
    const { user } = useAuth()
    const type = query.type as string
    const { modal, popSave, alert } = useSetUtils()
    const [limit, setLimit] = useState(15)
    const max = list.length ?? 0
    const router = useRouter()

    const TitleDefault = <Title titleH1={title} description={description} />
    const TitlePage = (): ReactElement => (!max ? TitleEmpty : TitleDefault)

    function turnUpLimit(): void {
        setLimit(limit => limit + 15)
    }

    const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
        if (!user) return

        try {
            popSave.open()
            const newData = list.map((item, index) => {
                if (index === dragIndex) return list[hoverIndex]
                if (index === hoverIndex) return list[dragIndex]
                return item
            })
            setList(newData)
            // setCatalogList(type, user.uid, newData)
        } catch (e) {
            console.log(e, 'error')
            alert.open('Sorry, but something went wrong. Try again', 2)
        } finally {
            popSave.close(600)
        }
    }, [])

    const renderCard = useCallback(
        (card: { thumb: string }, index: number) => (
            <DraggableThumb
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

    return (
        <div>
            <main className={containerClass} data-cy="section-list">
                <TitlePage />

                {list.map((card: catalogI, i: number) => {
                    if (i >= limit) return null
                    return renderCard(card, i)
                })}

                {limit < max && list.length && (
                    <LoadButton onClick={turnUpLimit} />
                )}
            </main>
        </div>
    )
}

export { DragAndDropList }
