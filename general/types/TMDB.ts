export interface TopLevel {
    movie: Movie
    serie: Serie
}

export interface Movie {
    adult: boolean
    backdrop_path: string
    genre_ids: any[]
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
    thumb: string
}

export interface Serie {
    backdrop_path: string
    first_air_date: string
    genre_ids: any[]
    id: number
    name: string
    origin_country: any[]
    original_language: string
    original_name: string
    overview: string
    popularity: number
    poster_path: string
    vote_average: number
    vote_count: number
    thumb: string
}

export interface Genre {
    id: number
    name: string
}

export interface List<T> {
    page: number
    total_pages: number
    total_results: number
    results: T[] | T[]
}

export interface Data<T> {
    list: List<T> | null
    genres: Genre[]
}
