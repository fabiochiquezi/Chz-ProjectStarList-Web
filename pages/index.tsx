import type { NextPage } from 'next'
import HeaderLogin from '../components/HeaderLogin'
import HeroLogin from '../sections/HeroLogin'
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
                <div className="pb-14 md:pb-16 lg:pb-28 pt-12 md:pt-20">
                    <List
                        catalog={catalog}
                        title="Build your own list"
                        description="aaaaaaaa"
                        menu={false}
                    />
                </div>
            </div>
        </>
    )
}

export default Home
