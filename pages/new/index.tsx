import axios from 'axios'
import { LoadingStruct } from 'components/Structure/Loadings/Default'
import { getTMDBCoverURI, TMDBupComing } from 'general/configs/apiConfig'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { Footer } from 'sections/Footer'
import { Header } from 'sections/Header/System'
import { SimpleList } from 'sections/List/Simple'

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
    const [loadingPage, setLoadingPage] = useState(false)
    const [loadContent, seLoadContent] = useState(false)
    const [list, setList] = useState<any[]>([])

    async function getData(): Promise<any> {
        const getLastMovies = await axios.get(TMDBupComing)
        const getResults = getLastMovies.data.results
        const newArr: any[] = getResults.map(item => {
            const path = item.poster_path
            return { thumb: getTMDBCoverURI(path) }
        })
        setList(newArr)
        console.log(newArr)
    }

    useEffect(() => {
        getData()
    }, [])

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
                        <SimpleList
                            catalog={list}
                            title="YOUR VIRTUAL MEMORY LIST"
                            description="From watching, reading or playing..."
                        />
                    </div>
                )}
            </div>
            <Footer />
        </div>
    )
}

export default New
