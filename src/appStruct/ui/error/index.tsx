import { settingsSEO } from '../../../appCore/ui/settings'
import { SEO } from '../../../libs/frontend/components'
import { NextPage } from 'next'

const ErrorPage: NextPage = () => (
  <main>
    <SEO title={settingsSEO.error.title} />
    <div
      className="relative h-[50vh] lg:h-[50vh] w-full"
      data-testid="ErrorPage"
    >
      <p className="text-skin-danger text-2xl absolute left-[50%] top-[50%] ml-[-150px] mt-[-125px] md:mt-[-50px] max-w-[300px] mx-auto text-center">
        <span className="text-5xl mb-6 font-bold inline-block">
          ERROR ;(
        </span>
        <br />
        <span className='text-skin-base-secondary'>Sorry, but something went wrong</span>
      </p>
    </div>

  </main>
)


export default ErrorPage
