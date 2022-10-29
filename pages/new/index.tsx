import axios from 'axios'
import { LoadingStruct } from 'components/Structure/Loadings/Default'
import {
    getTMDBCoverURI,
    moviesTopRatedTMDB,
    seriesTopRatedTMDB
} from 'general/configs/apiConfig'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { Footer } from 'sections/Footer'
import { Header } from 'sections/Header/System'
import { ListAPI } from 'sections/List/ListAPI'
import { Select } from 'components/Forms/Select/Default'
import { Input } from 'components/Forms/Inputs/Default'
import SearchIcon from 'public/icons/SearchIcon'
import { Search } from 'components/Forms/Search/Default'
import { SelectButton } from 'components/Forms/Select/Button'

const HeadData = (): React.ReactElement => (
    <Head>
        <title>Star List | Catalog</title>
        <meta
            name="description"
            content="See all of your memories about movies, series, animations, books and games"
        />
    </Head>
)

const New: React.FC = () => {
    const [loadingPage, setLoadingPage] = useState(true)
    const [loadContent, seLoadContent] = useState(true)
    const [list, setList] = useState<any[]>([])
    const [typeSearch, setTypeSearch] = useState('movies')
    const [search, setSearch] = useState('')

    async function getTMDB(uri: string): Promise<any[]> {
        const getLastMovies = await axios.get(uri)
        const getResults = getLastMovies.data.results
        const newArr: any[] = getResults.map(item => {
            const path = item.poster_path
            return { thumb: getTMDBCoverURI(path) }
        })
        return newArr
    }

    async function getData(): Promise<any> {
        seLoadContent(true)
        let newArr = []
        switch (typeSearch) {
            case 'movies':
                newArr = await getTMDB(moviesTopRatedTMDB)
                break
            case 'series':
                newArr = await getTMDB(seriesTopRatedTMDB)
                break
            default:
                newArr = await getTMDB(moviesTopRatedTMDB)
                break
        }
        setList(newArr)
        setTimeout(() => {
            seLoadContent(false)
        }, 1000)
    }

    useEffect(() => {
        getData()
        setLoadingPage(false)
    }, [typeSearch])

    if (loadingPage) return <LoadingStruct />
    return (
        <div>
            <HeadData />
            <Header />
            <div className="mb-48 sm:mb-36 lg:mb-24">
                {loadContent ? (
                    <LoadingStruct />
                ) : (
                    <div className="pb-32 md:pb-28 pt-28 md:pt-32 lg:pt-36">
                        <div className="container mx-auto px-4 lg:px-4 xl:px-6 2xl:px-10 flex justify-center mb-4 md:mb-10 lg:mb-11 lg:justify-end">
                            <div className="w-[200px] lg:w-[260px] mr-6 lg:mr-8 mt-1">
                                <Search
                                    value={search}
                                    onChange={e => setSearch(e.target.value)}
                                />
                            </div>

                            <div>
                                <SelectButton
                                    label=""
                                    name="typeSearch"
                                    onChange={(e: any) =>
                                        setTypeSearch(e.target.value)
                                    }
                                    value={typeSearch}
                                    error=""
                                    defaultValue="movies"
                                >
                                    <option
                                        className="bg-primary text-white h-10"
                                        value={'movies'}
                                    >
                                        Movies
                                    </option>
                                    <option
                                        className="bg-primary text-white h-10"
                                        value={'series'}
                                    >
                                        Series
                                    </option>
                                    <option
                                        className="bg-primary text-white"
                                        value={'books'}
                                    >
                                        Books
                                    </option>
                                    <option
                                        className="bg-primary text-white"
                                        value={'games'}
                                    >
                                        Games
                                    </option>
                                </SelectButton>
                            </div>
                        </div>

                        <ListAPI
                            catalog={list}
                            title="MOVIES FROM STEAM TMDB"
                            description="Add new games to your list!"
                        />
                    </div>
                )}
            </div>
            <Footer />
        </div>
    )
}

export default New
