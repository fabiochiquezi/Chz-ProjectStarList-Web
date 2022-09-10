import React from 'react'
import Head from 'next/head'
import List from 'sections/List'
import type { NextPage } from 'next'
import Footer from 'sections/Footer'
import HeroLogin from 'sections/Hero/HeroLogin'
import catalog from 'general/data/catalog.json'
import HeaderLogin from 'sections/Header/HeaderLogin'

const HeadData = (): React.ReactElement => (
    <Head>
        <title>Star List | Home</title>
        <meta
            name="description"
            content="Create your album of memories about movies, series, animations, books and games"
        />
    </Head>
)

const Home: NextPage = () => (
    <div>
        <HeadData />
        <HeaderLogin />
        <div className="mb-48 sm:mb-36 lg:mb-24">
            <HeroLogin
                title="Your list of great works souvenirs"
                description="Mount your own list of movies, cartoons, series, books and games."
            />

            <div className="pt-20 pb-16">
                <List
                    catalog={catalog}
                    title="YOUR VIRTUAL MEMORY LIST"
                    description="From watching, reading or playing..."
                    menu={false}
                />
            </div>
        </div>
        <Footer />
    </div>
)

export default Home
