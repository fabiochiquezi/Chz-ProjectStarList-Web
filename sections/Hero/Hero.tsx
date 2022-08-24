import React from 'react'
import styles from './Hero.module.css'

type props = {
    meaning?: number
    production?: number
    title: string
    description: string
    trailer?: string
}

const Hero: React.FC<props> = ({
    meaning,
    production,
    title,
    description,
    trailer
}) => {
    return (
        <section className={styles.heroWrapper}>
            <div className={styles.overlayAll}></div>
            <div className={styles.overlayBottom}></div>
            <div className={styles.overlayTop}></div>

            <div className="container mx-auto px-4 md:px-6">
                <aside className={styles.aside}>
                    {meaning && (
                        <h3 className="text-lg mb-1 md:text-2xl md:mb-2">
                            <span className="text-indigo-400 w-[35px] inline-block">
                                {meaning}{' '}
                            </span>
                            <span className="-mr-1">Meaning</span>
                        </h3>
                    )}
                    {production && (
                        <h3 className="text-lg md:text-2xl">
                            <span className=" text-indigo-400 w-[35px] inline-block">
                                {production}{' '}
                            </span>
                            <span className="">Production</span>
                        </h3>
                    )}
                </aside>

                <main className={styles.main}>
                    <h1 className="text-orange-500">{title}</h1>
                    <p>{description}</p>
                    <hr />
                    {trailer && (
                        <div className="mt-6 md:mt-10 text-orange-600 float-right">
                            <a
                                href={trailer}
                                target="_blank"
                                className="text-xl md:text-2xl simple-button"
                            >
                                Watch trailer
                            </a>
                        </div>
                    )}
                </main>
            </div>
        </section>
    )
}

export default Hero
