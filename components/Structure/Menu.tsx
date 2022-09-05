import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

type props = {
    setMenu: React.Dispatch<React.SetStateAction<boolean>>
}

const LiClass = 'w-3/4 lg:w-auto border-b-2 border-gray-800 lg:border-none'
const AClass = `w-full lg:w-auto py-4 inline-block md:py-10 lg:py-0 simple-button`

const Menu: React.FC<props> = ({ setMenu }) => {
    const { query } = useRouter()
    const type = query.type
    const activeMenuItem = 'text-orange-400'

    const [category, setCategory] = useState(0)
    const activeCategory = 'text-indigo-400'
    return (
        <>
            <nav>
                <ul className="flex flex-col items-center text-center text-2xl lg:flex-row lg:mt-[2px]">
                    <li className={LiClass}>
                        <Link href="/catalog/doing">
                            <a
                                className={`md:text-3xl lg:text-[14px] lg:mr-6 ${AClass} ${
                                    type === 'doing' && activeMenuItem
                                }`}
                                onClick={() => setMenu(false)}
                            >
                                DOING
                            </a>
                        </Link>
                    </li>
                    <li className={LiClass}>
                        <Link href="/catalog/illdo">
                            <a
                                className={`md:text-3xl lg:text-[14px] lg:mr-6 ${AClass} ${
                                    type === 'illdo' && activeMenuItem
                                }`}
                                onClick={() => setMenu(false)}
                            >
                                I'll DO
                            </a>
                        </Link>
                    </li>
                    <li className={LiClass}>
                        <Link href="/catalog/did">
                            <a
                                className={`md:text-3xl lg:text-[14px] lg:mr-4 xl:mr-6 ${AClass} ${
                                    type === 'did' && activeMenuItem
                                }`}
                                onClick={() => setMenu(false)}
                            >
                                DID
                            </a>
                        </Link>
                    </li>
                    {/*
                    <div className="hidden lg:flex mt-[-4px]">
                        <li className="mr-4 xl:mr-6 text-[16px] mt-[4px]">/</li>

                        <li className={LiClass}>
                            <a
                                className={`text-[14px] lg:mr-4 ${AClass} ${
                                    category === 1 && activeCategory
                                }`}
                                onClick={() => setMenu(false)}
                            >
                                Watching
                            </a>
                        </li>

                        <li className={LiClass}>
                            <a
                                className={`text-[14px] lg:mr-4 ${AClass} ${
                                    category === 2 && activeCategory
                                }`}
                                onClick={() => setMenu(false)}
                            >
                                Playing
                            </a>
                        </li>

                        <li className={LiClass}>
                            <a
                                className={`text-[14px] lg:mr-4 ${AClass} ${
                                    category === 3 && activeCategory
                                }`}
                                onClick={() => setMenu(false)}
                            >
                                Reading
                            </a>
                        </li>
                    </div>
                    */}
                </ul>
            </nav>
        </>
    )
}

export default Menu
