import Head from 'next/head'
import { NextPage } from 'next'

const ErrorPage: NextPage = () => (
  <div>
    <Head>
      <title>Star List | My List</title>
      <meta
        name="description"
        content="See all of your memories about movies, series, animations, books and games"
      />
    </Head>

    <main>
      <div
        className="relative h-[50vh] lg:h-[50vh] w-full"
        data-testid="ErrorPage"
      >
        <p className="text-red-600 text-2xl absolute left-[50%] top-[50%] ml-[-150px] mt-[-125px] md:mt-[-50px] max-w-[300px] mx-auto text-center">
          <span className="text-5xl mb-6 font-bold inline-block">
            ERROR ;(
          </span>
          <br />
          Sorry, but something went wrong
        </p>
      </div>
    </main>
  </div>
)


export default ErrorPage
