import { Thumb, BtnSignIn } from '../_share/components'
import { useAuth } from '../_auth/useAuth'
import { Title, List, Hero } from './ui'
import type { NextPage } from 'next'
import catalog from './data.json'
import Head from 'next/head'

const Home: NextPage = () => {
  const { signIn } = useAuth()
  const btnSignIn = <BtnSignIn onClick={signIn} />
  const title = <Title title="YOUR VIRTUAL MEMORY LIST" description="From watching, reading or playing..." />

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
          BtnSignIn={btnSignIn}
          title="Your' list of great works souvenirs"
          description="Mount your own list of movies, cartoons, series, books and games."
        />
        <List
          Title={title}
          list={catalog}
          Thumb={(props) => <Thumb {...props} />}
        />
      </main>
    </div>
  )
}

export default Home
