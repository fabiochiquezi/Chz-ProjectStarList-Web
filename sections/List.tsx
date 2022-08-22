import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const List: React.FC = () => {
    return (
        <main
            className="container mx-auto px-4 pb-32 md:pb-28 mt-10 md:mt-16 lg:mt-8 grid sm:grid-cols-3 justify-items-center
                       lg:justify-items-end 2xl:justify-items-center lg:grid-cols-5 xl:grid-cols-6
                       xl:grid-cols-7"
        >
            <ul
                className="order-2 flex justify-center flex-wrap sm:col-span-3 lg:order-1 lg:col-span-2
                           lg:col-start-4 xl:col-start-4 xl:col-span-4 xl:mr-2 2xl:col-start-5
                           2xl:col-span-3 2xl:justify-self-end 2xl:mr-6"
            >
                <li className="mr-4 mb-12 lg:mb-8 active:scale-95 ease-in duration-100">
                    <Link href="/">
                        <a className="uppercase p-2 border-orange-400 text-orange-400 border-2 rounded-md hover:opacity-50 lg:-border-none lg:text-sm">
                            Watching
                        </a>
                    </Link>
                </li>
                <li className="mr-4 mb-12 lg:mb-8 active:scale-95 ease-in duration-100">
                    <Link href="/">
                        <a className="uppercase p-2 border-white border-2 rounded-md hover:opacity-50 lg:text-sm">
                            WatchList
                        </a>
                    </Link>
                </li>
                <li className="mb-8 lg:mb-8 active:scale-95 ease-in duration-100">
                    <Link href="/">
                        <a className="uppercase p-2 border-white border-2 rounded-md hover:opacity-50 lg:text-sm">
                            Watched
                        </a>
                    </Link>
                </li>
            </ul>
            <h1
                className="mb-20 sm:mb-24 md:mb-28 lg:mb-0 sm:col-span-2 max-w-[300px] lg:max-w-[360px] 2xl:max-w-[400px] order-1
                           lg:oder-2 lg:col-span-2 justify-self-start lg:justify-self-center lg:pt-10 xl:pt-4
                           xl:pl-4 2xl:pt-10 2xl:pl-2"
            >
                <span
                    className="text-[44px] sm:text-[60px] lg:text-[42px] xl:text-[46px] 2xl:text-[44px] leading-tight
                               lg:leading-normal dark:text-orange-600 font-bold "
                >
                    NEW & UPCOMING MOVIES
                </span>
                <br />
                <span className="text-[18px] mt-4 inline-block dark:text-white">
                    Exciting, emotional and unexpected
                </span>
            </h1>
            <div className="mb-16 w-[170px] order-3 lg:col-span-1 xl:scale-90 2xl:scale-100">
                <Image
                    src="/listExamples/01.jpg"
                    layout="fixed"
                    width={170}
                    height={220}
                />
                <h3 className="mt-2 text-[16px] break-word">
                    John Wick Chapter Two
                </h3>
                <p className="text-[14px]">
                    <span className="font-bold text-gray-500">Rate:</span>{' '}
                    <span className="text-orange-600">100</span>
                </p>
            </div>
            <div className="mb-16 w-[170px] order-3 lg:col-span-1 xl:scale-90 2xl:scale-100">
                <Image
                    src="/listExamples/02.jpg"
                    layout="fixed"
                    width={170}
                    height={220}
                />
                <h3 className="mt-2 text-[16px] break-word">
                    John Wick Chapter Two
                </h3>
                <p className="text-[14px]">
                    <span className="font-bold text-gray-500">Rate:</span>{' '}
                    <span className="text-orange-600">100</span>
                </p>
            </div>{' '}
            <div className="mb-16 w-[170px] order-3 lg:col-span-1 xl:scale-90 2xl:scale-100">
                <Image
                    src="/listExamples/03.jpg"
                    layout="fixed"
                    width={170}
                    height={220}
                />
                <h3 className="mt-2 text-[16px] break-word">
                    John Wick Chapter Two
                </h3>
                <p className="text-[14px]">
                    <span className="font-bold text-gray-500">Rate:</span>{' '}
                    <span className="text-orange-600">100</span>
                </p>
            </div>{' '}
            <div className="mb-16 w-[170px] order-3 lg:col-span-1 xl:scale-90 2xl:scale-100">
                <Image
                    src="/listExamples/04.jpg"
                    layout="fixed"
                    width={170}
                    height={220}
                />
                <h3 className="mt-2 text-[16px] break-word">
                    John Wick Chapter Two
                </h3>
                <p className="text-[14px]">
                    <span className="font-bold text-gray-500">Rate:</span>{' '}
                    <span className="text-orange-600">100</span>
                </p>
            </div>{' '}
            <div className="mb-16 w-[170px] order-3 lg:col-span-1 xl:scale-90 2xl:scale-100">
                <Image
                    src="/listExamples/05.jpg"
                    layout="fixed"
                    width={170}
                    height={220}
                />
                <h3 className="mt-2 text-[16px] break-word">
                    John Wick Chapter Two
                </h3>
                <p className="text-[14px]">
                    <span className="font-bold text-gray-500">Rate:</span>{' '}
                    <span className="text-orange-600">100</span>
                </p>
            </div>{' '}
            <div className="mb-16 w-[170px] order-3 lg:col-span-1 xl:scale-90 2xl:scale-100">
                <Image
                    src="/listExamples/06.jpg"
                    layout="fixed"
                    width={170}
                    height={220}
                />
                <h3 className="mt-2 text-[16px] break-word">
                    John Wick Chapter Two
                </h3>
                <p className="text-[14px]">
                    <span className="font-bold text-gray-500">Rate:</span>{' '}
                    <span className="text-orange-600">100</span>
                </p>
            </div>{' '}
            <div className="mb-16 w-[170px] order-3 lg:col-span-1 xl:scale-90 2xl:scale-100">
                <Image
                    src="/listExamples/07.jpg"
                    layout="fixed"
                    width={170}
                    height={220}
                />
                <h3 className="mt-2 text-[16px] break-word">
                    John Wick Chapter Two
                </h3>
                <p className="text-[14px]">
                    <span className="font-bold text-gray-500">Rate:</span>{' '}
                    <span className="text-orange-600">100</span>
                </p>
            </div>{' '}
            <div className="mb-16 w-[170px] order-3 lg:col-span-1 xl:scale-90 2xl:scale-100">
                <Image
                    src="/listExamples/08.jpg"
                    layout="fixed"
                    width={170}
                    height={220}
                />
                <h3 className="mt-2 text-[16px] break-word">
                    John Wick Chapter Two
                </h3>
                <p className="text-[14px]">
                    <span className="font-bold text-gray-500">Rate:</span>{' '}
                    <span className="text-orange-600">100</span>
                </p>
            </div>{' '}
            <div className="mb-16 w-[170px] order-3 lg:col-span-1 xl:scale-90 2xl:scale-100">
                <Image
                    src="/listExamples/09.jpg"
                    layout="fixed"
                    width={170}
                    height={220}
                />
                <h3 className="mt-2 text-[16px] break-word">
                    John Wick Chapter Two
                </h3>
                <p className="text-[14px]">
                    <span className="font-bold text-gray-500">Rate:</span>{' '}
                    <span className="text-orange-600">100</span>
                </p>
            </div>
            <div className="mb-16 w-[170px] order-3 lg:col-span-1 xl:scale-90 2xl:scale-100">
                <Image
                    src="/listExamples/10.jpg"
                    layout="fixed"
                    width={170}
                    height={220}
                />
                <h3 className="mt-2 text-[16px] break-word">
                    John Wick Chapter Two
                </h3>
                <p className="text-[14px]">
                    <span className="font-bold text-gray-500">Rate:</span>{' '}
                    <span className="text-orange-600">100</span>
                </p>
            </div>
            <div className="mb-16 w-[170px] order-3 lg:col-span-1 xl:scale-90 2xl:scale-100">
                <Image
                    src="/listExamples/11.jpg"
                    layout="fixed"
                    width={170}
                    height={220}
                />
                <h3 className="mt-2 text-[16px] break-word">
                    John Wick Chapter Two
                </h3>
                <p className="text-[14px]">
                    <span className="font-bold text-gray-500">Rate:</span>{' '}
                    <span className="text-orange-600">100</span>
                </p>
            </div>
            <div className="mb-16 w-[170px] order-3 lg:col-span-1 xl:scale-90 2xl:scale-100">
                <Image
                    src="/listExamples/12.jpg"
                    layout="fixed"
                    width={170}
                    height={220}
                />
                <h3 className="mt-2 text-[16px] break-word">
                    John Wick Chapter Two
                </h3>
                <p className="text-[14px]">
                    <span className="font-bold text-gray-500">Rate:</span>{' '}
                    <span className="text-orange-600">100</span>
                </p>
            </div>
            <div className="mb-16 w-[170px] order-3 lg:col-span-1 xl:scale-90 2xl:scale-100">
                <Image
                    src="/listExamples/13.jpg"
                    layout="fixed"
                    width={170}
                    height={220}
                />
                <h3 className="mt-2 text-[16px] break-word">
                    John Wick Chapter Two
                </h3>
                <p className="text-[14px]">
                    <span className="font-bold text-gray-500">Rate:</span>{' '}
                    <span className="text-orange-600">100</span>
                </p>
            </div>
            <div className="mb-16 w-[170px] order-3 lg:col-span-1 xl:scale-90 2xl:scale-100">
                <Image
                    src="/listExamples/14.jpg"
                    layout="fixed"
                    width={170}
                    height={220}
                />
                <h3 className="mt-2 text-[16px] break-word">
                    John Wick Chapter Two
                </h3>
                <p className="text-[14px]">
                    <span className="font-bold text-gray-500">Rate:</span>{' '}
                    <span className="text-orange-600">100</span>
                </p>
            </div>
            <button
                className="dark:text-gray-300 text-secondary text-lg order-4 border-indigo-400 border-2
                           w-40 h-40 rounded-full md:mt-4 lg:mt-0 justify-self-center sm:col-span-3 lg:col-span-5
                           xl:col-span-7 hover:opacity-50 active:scale-95 ease-in duration-100"
            >
                Load More...
            </button>
        </main>
    )
}

export default List
