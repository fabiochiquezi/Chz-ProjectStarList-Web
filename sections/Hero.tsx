import React from 'react'
import styles from './Hero.module.css'

const Hero: React.FC = () => {
    return (
        <section className={styles.heroWrapper}>
            <div className={styles.overlayAll}></div>
            <div className={styles.overlayBottom}></div>
            <div className={styles.overlayTop}></div>

            <div className="container mx-auto px-4 md:px-6">
                <aside className={styles.aside}>
                    <h3 className="text-lg mb-1 md:text-2xl md:mb-2">
                        <span className="text-indigo-400 w-[35px] inline-block">
                            90{' '}
                        </span>
                        <span className="-mr-1">Meaning</span>
                    </h3>
                    <hr className="hidden" />
                    <h3 className="text-lg md:text-2xl">
                        <span className=" text-indigo-400 w-[35px] inline-block">
                            90{' '}
                        </span>
                        <span className="">Production</span>
                    </h3>
                </aside>

                <main className={styles.main}>
                    <h1 className="">Lionsgate Movies</h1>
                    <p>
                        Lionsgate’s feature film production and distribution
                        operation encompasses a diverse slate of tentpoles,
                        star-driven event films and branded properties
                    </p>
                    <hr />
                    <div className="mt-6 md:mt-10 text-orange-600 float-right">
                        <a
                            href="https://www.youtube.com"
                            target="_blank"
                            className="text-xl md:text-2xl simple-button"
                        >
                            Watch trailer
                        </a>
                    </div>
                </main>
            </div>
        </section>
    )
}

export default Hero
