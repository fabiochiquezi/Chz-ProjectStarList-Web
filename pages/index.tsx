import type { NextPage } from 'next'
import Image from 'next/image'
import Header from '../components/Header'
import Hero from '../sections/Hero'
import List from '../sections/List'

const Home: NextPage = () => {
    return (
        <div className="mb-48 sm:mb-36 lg:mb-24">
            <Hero />
            <List />
        </div>
    )
}

export default Home
