import { Title, BtnSignIn, Thumb } from './components'
import { useAuth } from '../share/contexts'
import catalog from './data/catalog.json'
import type { NextPage } from 'next'
import { List } from './sections/List'
import { Hero } from './sections/Hero'
import Head from 'next/head'

const Home: NextPage = () => {
  const { signIn } = useAuth()

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
          <List
            list={catalog}
            Thumb={(props) => <Thumb {...props} />}
            Title={<Title title="YOUR VIRTUAL MEMORY LIST" description="From watching, reading or playing..." />}
          />
        </div>
      </main>
    </div>
  )
}

export default Home
