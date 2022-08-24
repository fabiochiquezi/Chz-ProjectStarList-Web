import type { NextPage } from 'next'
import HeaderLogin from '../sections/Header/HeaderLogin'
import HeroLogin from '../sections/Hero/HeroLogin'
import List from '../sections/List'
import catalog from '../general/data/catalog.json'

const Home: NextPage = () => {
    return (
        <>
            <HeaderLogin />
            <div className="mb-48 sm:mb-36 lg:mb-24">
                <HeroLogin
                    title="Your list of great works souvenirs"
                    description="Mount your own list of movies, cartoons, series, books and games."
                />

                <div className="py-16">
                    <List
                        catalog={catalog}
                        title="Build your memory list of the greatest"
                        description="From watching, reading or playing..."
                        menu={false}
                    />
                </div>
            </div>
        </>
    )
}

export default Home
