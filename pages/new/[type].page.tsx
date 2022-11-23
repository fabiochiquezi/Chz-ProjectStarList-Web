import { Data } from './types'
import ErrorPage from 'pages/error'
import { useRouter } from 'next/router'
import { List } from './components/List'
import { Menu } from './components/Menu'
import { getServerSideProps } from './api'
import { Movie, Serie } from '../share/types'
import { Loading } from '../share/components'
import { FC, useEffect, useState } from 'react'
import { AddModal } from './components/AddModal'
import { changeCatalog } from './fns/changeCatalog'
import { Pagination } from './components/Pagination'
import { Resp } from 'pages/share/types/_helpers/Response'
import { Struct } from '../share/structure/Struct/Private'
import { Modal } from 'pages/share/components/Modals/Default'
import { genreFilter, search as searchFn, changePage, resetSearch } from './fns'

interface SRRData {
    data: Resp<Data<Movie | Serie>>
}

const New: FC<SRRData> = ({ data }) => {
    const { ok, data: req } = data
    if (!ok) return <ErrorPage />

    const router = useRouter()
    const { genres, list: listReq } = req
    const { results, total_pages: totalPages } = listReq
    const { page, type, search, genre } = router.query
    const currentPage = parseInt(String(page)) || 1
    const [load, setLoad] = useState(false)
    const [addModal, setAddModal] = useState(false)
    const [list, setList] = useState<Array<Movie | Serie>>([])

    useEffect(() => {
        if (results) setList(results)
        setLoad(false)
    }, [router])

    return (
        <Struct
            titleSEO="Star List | New Works"
            descriptionSEO="Search for new works to add to your list"
        >
            {addModal && (
                <Modal closeModal={() => setAddModal(false)}>
                    <AddModal
                        closeModal={() => setAddModal(false)}
                        onSubmit={data => {
                            console.log(data, 'ok')
                        }}
                    />
                </Modal>
            )}
            <Menu
                genreList={genres}
                routerType={String(type)}
                routerGenre={String(genre)}
                searchFn={searchFn(setLoad, type)}
                changeCatalog={changeCatalog(setLoad)}
                resetSearch={resetSearch(setLoad, type)}
                genreFilter={genreFilter(setLoad, type)}
            />
            {load ? (
                <Loading />
            ) : (
                <List
                    list={list ?? []}
                    title={type as string}
                    description="add + to your list"
                    onClick={() => setAddModal(true)}
                />
            )}
            <Pagination
                page={currentPage}
                maxPages={totalPages ?? 1}
                changePage={changePage(setLoad, search, genre, type)}
            />
        </Struct>
    )
}

export default New
export { getServerSideProps }
