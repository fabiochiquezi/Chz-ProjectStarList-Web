import { Thumb, BtnSignIn, SEO } from '../../../libs/frontend/components'
import { settingsSEO } from 'src/pages/settings'
import { useAuth } from '../_auth/useAuth'
import { Title, List, Hero } from './ui'
import type { NextPage } from 'next'
import catalog from './data.json'

const Home: NextPage = () => {
  const { signIn } = useAuth()
  const btnSignIn = <BtnSignIn onClick={signIn} />
  const title = <Title title="YOUR VIRTUAL MEMORY LIST" description="From watching, reading or playing..." />

  return (
    <div>
      <SEO
        title={settingsSEO.home.title}
        description={settingsSEO.home.description}
      />
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
