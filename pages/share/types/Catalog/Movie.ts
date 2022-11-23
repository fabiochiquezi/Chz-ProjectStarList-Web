import { DocumentFromDB } from '../_helpers/Database'

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

export type MovieDB = DocumentFromDB<Movie>