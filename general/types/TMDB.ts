export interface MovieT {
    adult: boolean
    backdrop_path: string
    genre_ids: string[]
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    thumb: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}

export interface GenreTMDBT {
    id: number
    name: string
}

export interface DataTMDBT {
    list: {
        page: number
        total_pages: number
        total_results: number
        results: MovieT[]
    } | null
    genres: GenreTMDBT[]
}
