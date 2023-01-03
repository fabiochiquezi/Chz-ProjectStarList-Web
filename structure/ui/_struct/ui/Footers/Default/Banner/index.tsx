import { FC } from 'react'

const Banner: FC = () => (
  <div
    className="container mx-auto mt-[-340px] mb-20 p-6 sm:mt-[-250px] sm:mb-24 sm:p-0 lg:mt-[-195px] lg:p-0 2xl:px-32"
    data-testid="Banner"
  >
    <div className="bg-skin-secondary-v2 text-skin-font-clear p-6 py-10 justify-between rounded-sm lg:px-12 xl:px-14 lg:flex">
      <div className="mx-auto mb-10 lg:mb-0 w-[90%] text-center max-w-[400px] sm:w-[400px] lg:text-left lg:ml-0 lg:w-[400px] xl:w-[440px]">
        <h2 className="text-4xl font-bold mb-3 leading-[150%] xl:text-4xl">
          I&apos;m looking for a job!
        </h2>
        <p className="text-xl">
          If you liked this project, help me recommending me for some company
        </p>
      </div>
      <div className="flex flex-col items-center sm:flex-row justify-center">
        {/* <a
          target="_blank"
          rel="noreferrer"
          href="https://www.chiquezi.com/home"
          className="text-xl bg-indigo-600 inline-block w-48 text-center p-4 mb-5 sm:mb-0 sm:mr-6 anim-button rounded-sm"
        >
          Portfolio
        </a> */}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/fabiochiquezi"
          className="text-xl bg-indigo-600 inline-block w-48 text-center p-4 anim-button rounded-sm"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
)

export { Banner }
