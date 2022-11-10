import { List, Movie, Serie } from 'types/TMDB'

type Format = <T extends Movie | Serie>(data: List<T>) => List<T>
type AddThumb = <T extends Movie | Serie>(item: T) => T

const format: Format = data => {
    const addThumb: AddThumb = item => {
        const images = 'https://image.tmdb.org/t/p/w500'
        const getThumb = (c: string): string => `${images}/${c}`
        const thumb = getThumb(item.poster_path)
        return { ...item, thumb }
    }
    const formatedResults = data.results.map(addThumb)
    const newData = { ...data, results: formatedResults }
    return newData
}

export { format }
