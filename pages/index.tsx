import type { NextPage } from 'next'
import HeaderLogin from '../sections/Header/HeaderLogin'
import HeroLogin from '../sections/Hero/HeroLogin'
import List from '../sections/List'
import catalog from '../general/data/catalog.json'
import Head from 'next/head'

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Star List | Home</title>
                <meta
                    name="description"
                    content="Create your album of memories about movies, series, animations, books and games"
                />
            </Head>

            <HeaderLogin />

            <div className="mb-48 sm:mb-36 lg:mb-24">
                <HeroLogin
                    title="Your list of great works souvenirs"
                    description="Mount your own list of movies, cartoons, series, books and games."
                />

                <div className="pt-20 pb-16">
                    <List
                        catalog={catalog}
                        title="Build your memory list of the greatest"
                        description="From watching, reading or playing..."
                        menu={false}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
