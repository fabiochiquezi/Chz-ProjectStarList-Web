import React from 'react'

// import { Container } from './styles';

const BannerFooter: React.FC = () => {
    return (
        <div className="container mx-auto -mt-80 sm:-mt-64 lg:-mt-52 mb-20 sm:mb-24 p-6 sm:p-0 lg:p-0 2xl:px-32">
            <div className="bg-blue-600 p-10 lg:flex justify-between">
                <div className="mx-auto lg:ml-0 mb-12 lg:mb-0 w-[220px] sm:w-[400px] lg:w-[400px] xl:w-[440px] text-center sm:text-left">
                    <h2 className="text-3xl font-bold mb-6 leading-10 xl:text-4xl">
                        I'm looking for a job!
                    </h2>
                    <p className="text-xl">
                        If you liked this project, help me recommending me for
                        some company
                    </p>
                </div>

                <div className="flex flex-col items-center sm:flex-row justify-center">
                    <a
                        href="http://google.com"
                        className="text-xl bg-indigo-800 inline-block w-48 text-center p-4 mb-6 sm:mb-0 sm:mr-6"
                        target="_blank"
                    >
                        My Portfolio
                    </a>
                    <a
                        href="http://google.com"
                        className="text-xl bg-indigo-800 inline-block w-48 text-center p-4"
                        target="_blank"
                    >
                        My GitHub
                    </a>
                </div>
            </div>
        </div>
    )
}

export default BannerFooter
