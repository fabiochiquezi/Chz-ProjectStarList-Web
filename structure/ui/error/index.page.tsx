import { SEO } from 'libs/frontend/components'
import { NextPage } from 'next'
import { settingsSEO } from 'src/pages/settings'


const ErrorPage: NextPage = () => (
  <div>
    <SEO title={settingsSEO.error.title} />
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
          <span>Sorry, but something went wrong</span>
        </p>
      </div>
    </main>
  </div>
)


export default ErrorPage
