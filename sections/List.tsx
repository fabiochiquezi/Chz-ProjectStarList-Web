import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// import { Container } from './styles';

const List: React.FC = () => {
    return (
        <main className="container mx-auto px-4 mt-20 lg:mt-40 grid sm:grid-cols-3 justify-items-center lg:grid-cols-5 xl:grid-cols-6 xl:grid-cols-7">
            <ul className="order-2 flex justify-center flex-wrap sm:col-span-3 lg:order-1 lg:col-span-2 lg:col-start-3 xl:col-start-2 xl:col-span-4 2xl:col-start-1 2xl:col-span-6 lg:-ml-10">
                <li className="mr-4 mb-12 active:scale-95">
                    <Link href="/">
                        <a className="uppercase p-2 border-white border-2 rounded-md hover:opacity-50 lg:-border-none">
                            Watching
                        </a>
                    </Link>
                </li>
                <li className="mr-4 mb-12 active:scale-95">
                    <Link href="/">
                        <a className="uppercase p-2 border-white border-2 rounded-md hover:opacity-50">
                            WatchList
                        </a>
                    </Link>
                </li>
                <li className="mb-8 active:scale-95">
                    <Link href="/">
                        <a className="uppercase p-2 border-white border-2 rounded-md hover:opacity-50">
                            Watched
                        </a>
                    </Link>
                </li>
            </ul>

            <h1 className="mb-20 lg:mb-0 sm:mb-32 sm:col-span-2 max-w-[300px] lg:max-w-[360px] order-1 lg:oder-2 lg:col-span-2 justify-self-start lg:justify-self-center lg:pt-10">
                <span className="text-[44px] sm:text-[70px] lg:text-[42px] leading-tight lg:leading-normal dark:text-orange-600 font-bold">
                    NEW & UPCOMING MOVIES
                </span>
                <br />
                <span className="text-[18px] mt-4 inline-block dark:text-white">
                    Exciting, emotional and unexpected
                </span>
            </h1>

            <div className="mb-16 w-[170px] order-3 lg:col-span-1">
                <Image
                    src="/listExamples/01.jpg"
                    layout="fixed"
                    width={170}
                    height={220}
                />
                <h3 className="mt-2 text-[18px] break-word">
                    John Wick Chapter Two
                </h3>
                <p className="mt-1 text-[18px]">
                    <span className="font-bold text-gray-500">Rate:</span>{' '}
                    <span className="text-orange-600">100</span>
                </p>
            </div>

            <div className="mb-16 w-[170px] order-3 lg:col-span-1">
                <Image
                    src="/listExamples/01.jpg"
                    layout="fixed"
                    width={170}
                    height={220}
                />
                <h3 className="mt-2 text-[18px] break-word">
                    John Wick Chapter Two
                </h3>
                <p className="mt-1 text-[18px]">
                    <span className="font-bold text-gray-500">Rate:</span>{' '}
                    <span className="text-orange-600">100</span>
                </p>
            </div>

            <div className="mb-16 w-[170px] order-3 lg:col-span-1">
                <Image
                    src="/listExamples/01.jpg"
                    layout="fixed"
                    width={170}
                    height={220}
                />
                <h3 className="mt-2 text-[18px] break-word">
                    John Wick Chapter Two
                </h3>
                <p className="mt-1 text-[18px]">
                    <span className="font-bold text-gray-500">Rate:</span>{' '}
                    <span className="text-orange-600">100</span>
                </p>
            </div>

            <div className="mb-16 w-[170px] order-3 lg:col-span-1">
                <Image
                    src="/listExamples/01.jpg"
                    layout="fixed"
                    width={170}
                    height={220}
                />
                <h3 className="mt-2 text-[18px] break-word">
                    John Wick Chapter Two
                </h3>
                <p className="mt-1 text-[18px]">
                    <span className="font-bold text-gray-500">Rate:</span>{' '}
                    <span className="text-orange-600">100</span>
                </p>
            </div>

            <div className="mb-16 w-[170px] order-3 lg:col-span-1">
                <Image
                    src="/listExamples/01.jpg"
                    layout="fixed"
                    width={170}
                    height={220}
                />
                <h3 className="mt-2 text-[18px] break-word">
                    John Wick Chapter Two
                </h3>
                <p className="mt-1 text-[18px]">
                    <span className="font-bold text-gray-500">Rate:</span>{' '}
                    <span className="text-orange-600">100</span>
                </p>
            </div>

            <div className="mb-16 w-[170px] order-3 lg:col-span-1">
                <Image
                    src="/listExamples/01.jpg"
                    layout="fixed"
                    width={170}
                    height={220}
                />
                <h3 className="mt-2 text-[18px] break-word">
                    John Wick Chapter Two
                </h3>
                <p className="mt-1 text-[18px]">
                    <span className="font-bold text-gray-500">Rate:</span>{' '}
                    <span className="text-orange-600">100</span>
                </p>
            </div>

            <div className="mb-16 w-[170px] order-3 lg:col-span-1">
                <Image
                    src="/listExamples/01.jpg"
                    layout="fixed"
                    width={170}
                    height={220}
                />
                <h3 className="mt-2 text-[18px] break-word">
                    John Wick Chapter Two
                </h3>
                <p className="mt-1 text-[18px]">
                    <span className="font-bold text-gray-500">Rate:</span>{' '}
                    <span className="text-orange-600">100</span>
                </p>
            </div>

            <div className="mb-16 w-[170px] order-3 lg:col-span-1">
                <Image
                    src="/listExamples/01.jpg"
                    layout="fixed"
                    width={170}
                    height={220}
                />
                <h3 className="mt-2 text-[18px] break-word">
                    John Wick Chapter Two
                </h3>
                <p className="mt-1 text-[18px]">
                    <span className="font-bold text-gray-500">Rate:</span>{' '}
                    <span className="text-orange-600">100</span>
                </p>
            </div>

            <div className="mb-16 w-[170px] order-3 lg:col-span-1">
                <Image
                    src="/listExamples/01.jpg"
                    layout="fixed"
                    width={170}
                    height={220}
                />
                <h3 className="mt-2 text-[18px] break-word">
                    John Wick Chapter Two
                </h3>
                <p className="mt-1 text-[18px]">
                    <span className="font-bold text-gray-500">Rate:</span>{' '}
                    <span className="text-orange-600">100</span>
                </p>
            </div>

            <div className="mb-16 w-[170px] order-3 lg:col-span-1">
                <Image
                    src="/listExamples/01.jpg"
                    layout="fixed"
                    width={170}
                    height={220}
                />
                <h3 className="mt-2 text-[18px] break-word">
                    John Wick Chapter Two
                </h3>
                <p className="mt-1 text-[18px]">
                    <span className="font-bold text-gray-500">Rate:</span>{' '}
                    <span className="text-orange-600">100</span>
                </p>
            </div>

            <div className="mb-16 w-[170px] order-3 lg:col-span-1">
                <Image
                    src="/listExamples/01.jpg"
                    layout="fixed"
                    width={170}
                    height={220}
                />
                <h3 className="mt-2 text-[18px] break-word">
                    John Wick Chapter Two
                </h3>
                <p className="mt-1 text-[18px]">
                    <span className="font-bold text-gray-500">Rate:</span>{' '}
                    <span className="text-orange-600">100</span>
                </p>
            </div>

            <div className="mb-16 w-[170px] order-3 lg:col-span-1">
                <Image
                    src="/listExamples/01.jpg"
                    layout="fixed"
                    width={170}
                    height={220}
                />
                <h3 className="mt-2 text-[18px] break-word">
                    John Wick Chapter Two
                </h3>
                <p className="mt-1 text-[18px]">
                    <span className="font-bold text-gray-500">Rate:</span>{' '}
                    <span className="text-orange-600">100</span>
                </p>
            </div>

            <div className="mb-16 w-[170px] order-3 lg:col-span-1">
                <Image
                    src="/listExamples/01.jpg"
                    layout="fixed"
                    width={170}
                    height={220}
                />
                <h3 className="mt-2 text-[18px] break-word">
                    John Wick Chapter Two
                </h3>
                <p className="mt-1 text-[18px]">
                    <span className="font-bold text-gray-500">Rate:</span>{' '}
                    <span className="text-orange-600">100</span>
                </p>
            </div>
        </main>
    )
}

export default List
