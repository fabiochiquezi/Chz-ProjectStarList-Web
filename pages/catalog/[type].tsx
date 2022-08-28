import type { GetServerSideProps, NextPage } from 'next'
import { catalogI } from '../../general/types/catalog'
import listData from './../../general/data/catalog.json'
import Hero from '../../sections/Hero/Hero'
import List from '../../sections/List'
import Header from '../../sections/Header/Header'
import { getFireDoc } from '../../firebase/firestore/get'

interface props {
    data: catalogI[]
    titleList: string
    descriptionList: string
}

const Catalog: NextPage<props> = ({ data, titleList, descriptionList }) => {
    console.log(data, 'front')
    data.map(item => console.log(item))
    return (
        <>
            <Header />
            <div className="mb-48 sm:mb-36 lg:mb-24">
                {/*<Hero
                    title="Lionsgate Movies"
                    description="Lionsgate’s feature film production and distribution
                        operation encompasses a diverse slate of tentpoles,
                        star-driven event films and branded properties"
                />*/}

                <div className="pb-32 md:pb-28 pt-28 md:pt-32 lg:pt-36">
                    <List
                        title="NEW & UPCOMING MOVIES"
                        description="Exciting, emotional and unexpected"
                        catalog={data}
                    />
                </div>
            </div>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async context => {
    try {
        const data = await getFireDoc('doing')
        console.log(data)
        return {
            props: {
                ok: true,
                data: data.list,
                error: null
            }
        }
    } catch (e) {
        return {
            props: {
                ok: false,
                data: {},
                error: e
            }
        }
    }
}

export default Catalog
