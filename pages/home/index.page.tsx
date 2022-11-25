import { PublicStruct } from '../share/structure'
import { BtnSignIn, Hero } from './components'
import type { NextPage } from 'next'
import catalog from './data/catalog.json'
import dynamic from 'next/dynamic'
import { useAuth } from '../share/auth/types/usetypes'
import Head from 'next/head'
import { useSetAuth } from '../share/auth/types/setTypes'
import { useAlert } from 'pages/share/store'
import React from 'react'
import { Alert, BtnSignIn as BtnHeader, Loading } from '../share/components'

const List = dynamic(
    async () => await import('./components').then(m => m.List),
    { loading: () => <Loading /> }
)

const Home: NextPage = () => {
    const alert = useAlert()
    const { loading } = useAuth()
    const { signIn } = useSetAuth()

    const BtnSignHero = <BtnSignIn onClick={signIn} loading={loading} />
    const BtnSignHeader = <BtnHeader onClick={signIn} loading={loading} />
    const AlertEl = alert.message && (
        <Alert
            mode={alert.mode}
            message={alert.message}
            closeAlert={() => alert.close()}
        />
    )

    return (
        <div>
            <Head>
                <title>Star List | Home</title>
                <meta
                    name="description"
                    content="Create your album of memories about movies, series, animations, books and games"
                />
            </Head>
            <PublicStruct BtnSignIn={BtnSignHeader}>
                {AlertEl}
                <Hero
                    title="Your' list of great works souvenirs"
                    description="Mount your own list of movies, cartoons, series, books and games."
                    BtnSignIn={BtnSignHero}
                />
                <div className="pt-12 lg:pt-16 pb-16">
                    <List catalog={catalog} />
                </div>
            </PublicStruct>
        </div>
    )
}

export default Home
