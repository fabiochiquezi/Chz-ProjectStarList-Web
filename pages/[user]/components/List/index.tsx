import { Thumb } from './Thumb'
import { BtnLoad } from './BtnLoad'
import { Title, TitleEmpty } from './Title'
import { useAuth } from 'structure/Auth/types'
import { Movie } from 'pages/share/types/Catalog/Movie'
import { Serie } from 'pages/share/types/Catalog/Serie'
import { useSetUtils } from 'structure/Utils/types'
import {
    Dispatch,
    FC,
    ReactElement,
    SetStateAction,
    useCallback,
    useState
} from 'react'

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

const List: FC<props> = ({ title, description, list, setList }) => {
    const { user } = useAuth()
    const { popSave, alert } = useSetUtils()
    const [limit, setLimit] = useState(15)
    const max = list.length ?? 0

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

    return (
        <div>
            <main className={containerClass} data-cy="section-list">
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
