import { Data } from './types'
import ErrorPage from '../error'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { Menu } from './components/Menu'
import { closeModal } from './fns/closeModal'
import { changePage } from './fns/changePage'
import { getServerSideProps } from './api/ssr'
import { resetSearch } from './fns/resetSearch'
import { genreFilter } from './fns/genreFilter'
import { search as searchFn } from './fns/search'
import { Movie, Serie, Resp } from '../share/types'
import { changeCatalog } from './fns/changeCatalog'
import { Loading, Modal } from '../share/components'
import { Pagination } from './components/Pagination'
import { useAuth } from '../share/auth/types/usetypes'
import { PrivateStruct } from '../share/structure/Private'
import { FC, useCallback, useEffect, useState } from 'react'
import { useAlert } from 'pages/share/store/components/Alert'
import { submitModalFirebase } from './fns/submitModal/firebase'
import { usePopSave } from 'pages/share/store/components/popSave'
import { useContentLoad } from 'pages/share/store/components/contentLoad'
import { useSetAuth } from 'pages/share/auth/types/setTypes'
import Head from 'next/head'

const AddModal = dynamic(
    async () => await import('./components/AddModal').then(m => m.AddModal)
)
const List = dynamic(
    async () => await import('./components/List').then(m => m.List),
    { loading: () => <Loading /> }
)

interface SRRData {
    data: Resp<Data<Movie | Serie>>
}

const New: FC<SRRData> = ({ data }) => {
    console.log('NewPage')
    const { ok, data: req } = data
    if (!ok) return <ErrorPage />

    const router = useRouter()
    const { user } = useAuth()

    const { genres, list: listReq } = req
    const { results, total_pages: totalPages } = listReq
    const { page, type, search, genre } = router.query
    const currentPage = parseInt(String(page)) || 1

    const [load, setLoad] = useState(false)
    const [addModal, setAddModal] = useState({ state: false, item: '' })
    const [list, setList] = useState<Array<Movie | Serie>>([])

    const contentLoad = useContentLoad()
    const popSave = usePopSave()
    const alert = useAlert()

    useEffect(() => {
        if (results) {
            setLoad(false)
            setList(results)
            contentLoad.setUnloading()
        }
    }, [router])

    const AddModalWork = useCallback(
        () => (
            <Modal closeModal={() => closeModal(setAddModal)}>
                <AddModal
                    closeModal={() => closeModal(setAddModal)}
                    onSubmit={async data => {
                        try {
                            popSave.open()
                            const userName = String(user?.userName)
                            const itemId = addModal.item
                            await submitModalFirebase(
                                list,
                                itemId,
                                userName
                            )(data)
                        } catch (e) {
                            popSave.close()
                            alert.error('Something went wrong')
                        } finally {
                            popSave.close()
                            closeModal(setAddModal)
                        }
                    }}
                />
            </Modal>
        ),
        [addModal]
    )

    return (
        <div>
            <Head>
                <title>Star List | New Works</title>
                <meta
                    name="description"
                    content="Search for new works to add to your list"
                />
            </Head>
            <PrivateStruct
                user={user}
                router={router}
                loading={contentLoad.state}
                signOut={useSetAuth().signOut}
            >
                {addModal.state && <AddModalWork />}
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
            </PrivateStruct>
        </div>
    )
}

export default New
export { getServerSideProps }
