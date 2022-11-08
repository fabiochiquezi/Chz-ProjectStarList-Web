import React from 'react'
import type { NextPage } from 'next'
import { Hero } from 'sections/Hero/Default'
import { Struct } from 'structure/Struct/Public'
import { SimpleList } from 'sections/List/Simple'
import catalog from '../general/data/catalog.json'

const Home: NextPage = () => (
    <Struct
        titleSEO="Star List | Home"
        descriptionSEO="Create your album of memories about movies, series, animations, books and games"
    >
        <Hero
            title="Your list of great works souvenirs"
            description="Mount your own list of movies, cartoons, series, books and games."
        />

        <div className="pt-12 lg:pt-16 pb-16">
            <SimpleList
                catalog={catalog}
                title="YOUR VIRTUAL MEMORY LIST"
                description="From watching, reading or playing..."
            />
        </div>
    </Struct>
)

export default Home
