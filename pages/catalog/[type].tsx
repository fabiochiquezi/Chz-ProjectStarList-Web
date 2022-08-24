import type { GetServerSideProps, NextPage } from 'next'
import { catalogI } from '../../general/types/catalog'
import listData from './../../general/listData.json'
import Hero from '../../sections/Hero'
import List from '../../sections/List'
import Header from '../../components/Header'

interface props {
    listData: catalogI[]
    titleList: string
    descriptionList: string
}

const Catalog: NextPage<props> = ({ listData, titleList, descriptionList }) => {
    return (
        <>
            <Header />
            <div className="mb-48 sm:mb-36 lg:mb-24">
                <Hero
                    title="Lionsgate Movies"
                    description="Lionsgate’s feature film production and distribution
                        operation encompasses a diverse slate of tentpoles,
                        star-driven event films and branded properties"
                />

                <div className="pb-32 md:pb-28 pt-28 md:pt-32 lg:pt-36">
                    <List
                        titleList={titleList}
                        descriptionList={descriptionList}
                        listData={listData}
                    />
                </div>
            </div>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async context => {
    const type = context.query.type
    switch (type) {
        case 'movies':
            return {
                props: {
                    listData,
                    titleList: 'NEW & UPCOMING MOVIES',
                    descriptionList: 'Exciting, emotional and unexpected'
                }
            }
        default:
            return {
                props: {
                    listData,
                    titleList: 'NEW & UPCOMING MOVIES',
                    descriptionList: 'Exciting, emotional and unexpected'
                }
            }
    }
}

export default Catalog
