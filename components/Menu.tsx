import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

type props = {
    setMenu: React.Dispatch<React.SetStateAction<boolean>>
}

const Menu: React.FC<props> = ({ setMenu }) => {
    const { query } = useRouter()
    const category = query.category

    const activeMenuItem = 'text-orange-400'
    const LiClass = 'border-b-2 w-3/4 border-gray-800 lg:border-none'
    const AClass = `py-4 inline-block md:py-10 uppercase md:text-3xl lg:text-[14px]
        lg:py-0 lg:mr-8 hover:opacity-80`

    return (
        <>
            <nav>
                <ul className="flex flex-col items-center text-center text-2xl lg:flex-row lg:mt-[2px]">
                    <li className={LiClass}>
                        <Link href="/?category=movies">
                            <a
                                className={`${AClass} ${
                                    (category === 'movies' ||
                                        category === undefined) &&
                                    activeMenuItem
                                }`}
                                onClick={() => setMenu(false)}
                            >
                                Movies
                            </a>
                        </Link>
                    </li>

                    <li className={LiClass}>
                        <Link href="/?category=series">
                            <a
                                className={`${AClass} ${
                                    category === 'series' && activeMenuItem
                                }`}
                                onClick={() => setMenu(false)}
                            >
                                Series
                            </a>
                        </Link>
                    </li>

                    <li className={LiClass}>
                        <Link href="/?category=cartoons">
                            <a
                                className={`${AClass} ${
                                    category === 'cartoons' && activeMenuItem
                                }`}
                                onClick={() => setMenu(false)}
                            >
                                Cartoons
                            </a>
                        </Link>
                    </li>

                    <li className={LiClass}>
                        <Link href="/?category=books">
                            <a
                                className={`${AClass} ${
                                    category === 'books' && activeMenuItem
                                }`}
                                onClick={() => setMenu(false)}
                            >
                                Books
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Menu
