import { useAuth, useSetAuth } from 'pages/share/context'
import { StructPublic } from '../share/structure'
import catalog from './data/catalog.json'
import { List } from './components/List'
import { Hero } from './components/Hero'
import type { NextPage } from 'next'
import React from 'react'

const Home: NextPage = () => {
    const { signIn } = useSetAuth()
    const { loading } = useAuth()

    return (
        <StructPublic
            titleSEO="Star List | Home"
            descriptionSEO="Create your album of memories about movies,
                series, animations, books and games"
        >
            <Hero
                signIn={signIn}
                loading={loading}
                title="Your list of great works souvenirs"
                description="Mount your own list of movies, cartoons,
                series, books and games."
            />

            <div className="pt-12 lg:pt-16 pb-16">
                <List
                    catalog={catalog}
                    title="YOUR VIRTUAL MEMORY LIST"
                    description="From watching, reading or playing..."
                />
            </div>
        </StructPublic>
    )
}

export default Home
