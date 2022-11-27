import { Title, BtnSignIn, Hero, Thumb } from './components'
import { useSetAuth } from '../share/auth/types/setTypes'
import catalog from './data/catalog.json'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
    const { signIn } = useSetAuth()

    return (
        <div>
            <Head>
                <title>Star List | Home</title>
                <meta
                    name="description"
                    content="Create your album of memories about movies, series, animations, books and games"
                />
            </Head>
            <main>
                <Hero
                    title="Your' list of great works souvenirs"
                    description="Mount your own list of movies, cartoons, series, books and games."
                    BtnSignIn={<BtnSignIn onClick={signIn} />}
                />
                <div className="pt-12 lg:pt-16 pb-16">
                    <main
                        data-cy="section-list"
                        data-testid="List"
                        className="container mx-auto px-4 grid sm:grid-cols-3 lg:grid-cols-5
                        xl:grid-cols-6 xl:grid-cols-7 justify-items-center
                        lg:justify-items-end 2xl:justify-items-center"
                    >
                        <Title
                            title="YOUR VIRTUAL MEMORY LIST"
                            description="From watching, reading or playing..."
                        />
                        {catalog.map(({ thumb, title }, index) => (
                            <Thumb key={index} thumb={thumb} title={title} />
                        ))}
                    </main>
                </div>
            </main>
        </div>
    )
}

export default Home
