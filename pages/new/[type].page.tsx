import { Data } from './types'
import ErrorPage from 'pages/error'
import { useRouter } from 'next/router'
import { List } from './components/List'
import { Menu } from './components/Menu'
import { Loading } from '../share/components'
import { closeModal } from './fns/closeModal'
import { Movie, Serie } from '../share/types'
import { changePage } from './fns/changePage'
import { getServerSideProps } from './api/ssr'
import { FC, useEffect, useState } from 'react'
import { resetSearch } from './fns/resetSearch'
import { genreFilter } from './fns/genreFilter'
import { AddModal } from './components/AddModal'
import { search as searchFn } from './fns/search'
import { changeCatalog } from './fns/changeCatalog'
import { Pagination } from './components/Pagination'
import { useAuth, useUtils } from 'pages/share/context'
import { Resp } from 'pages/share/types/_helpers/Response'
import { Struct } from '../share/structure/Struct/Private'
import { Modal } from 'pages/share/components/Modals/Default'
import { submitModalFirebase } from './fns/submitModal/firebase'

interface SRRData {
    data: Resp<Data<Movie | Serie>>
}

const New: FC<SRRData> = ({ data }) => {
    const { ok, data: req } = data
    if (!ok) return <ErrorPage />

    const router = useRouter()
    const { alert, popSave, contentLoad } = useUtils()
    const { user } = useAuth()
    const { genres, list: listReq } = req
    const { results, total_pages: totalPages } = listReq
    const { page, type, search, genre } = router.query
    const currentPage = parseInt(String(page)) || 1
    const [load, setLoad] = useState(false)
    const [addModal, setAddModal] = useState({ state: false, item: '' })
    const [list, setList] = useState<Array<Movie | Serie>>([])

    useEffect(() => {
        setLoad(false)
        if (results) {
            setList(results)
            contentLoad.close()
        }
    }, [router])

    return (
        <Struct
            titleSEO="Star List | New Works"
            descriptionSEO="Search for new works to add to your list"
        >
            {addModal.state && (
                <Modal closeModal={() => closeModal(setAddModal)}>
                    <AddModal
                        closeModal={() => closeModal(setAddModal)}
                        onSubmit={async data => {
                            try {
                                // popSave.open()
                                const userName = String(user?.userName)
                                const itemId = addModal.item
                                await submitModalFirebase(
                                    list,
                                    itemId,
                                    userName
                                )(data)
                            } catch (e) {
                                // popSave.close()
                                const message = 'Something went wrong'
                                // alert.open({ message, mode: 2 })
                            } finally {
                                // popSave.close(1000)
                            }
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
                    onClick={(id: string | number) => {
                        setAddModal({ state: true, item: String(id) })
                    }}
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
