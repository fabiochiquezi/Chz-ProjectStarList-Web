import React from 'react'
import styles from './Hero.module.css'

const Hero: React.FC = () => {
    return (
        <section className={styles.heroWrapper}>
            <div className={styles.overlayAll}></div>
            <div className={styles.overlayBottom}></div>
            <div className={styles.overlayTop}></div>

            <div className="container mx-auto">
                <aside className={styles.aside}>
                    <h3 className="text-lg mb-1">
                        <span className="text-lg text-indigo-400 w-[35px] inline-block">
                            90{' '}
                        </span>
                        <span className="text-lg -mr-1">Meaning</span>
                    </h3>
                    <hr className="hidden" />
                    <h3 className="text-lg">
                        <span className="text-lg text-indigo-400 w-[35px] inline-block">
                            90{' '}
                        </span>
                        <span className="text-lg">Production</span>
                    </h3>
                </aside>

                <main className={styles.main}>
                    <h1>Lionsgate Movies</h1>
                    <p>
                        Lionsgate’s feature film production and distribution
                        operation encompasses a diverse slate of tentpoles,
                        star-driven event films and branded properties
                    </p>
                    <hr />
                    <div className="mt-6 md:mt-14 text-orange-600 float-right">
                        <a
                            href="https://www.youtube.com"
                            target="_blank"
                            className="text-xl"
                        >
                            Watch trailer
                        </a>
                        <div className="hidden">
                            <div className="cover">
                                <span></span>
                            </div>
                            <div className="title">
                                <i />
                                <p>
                                    <span></span>
                                    <span></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </section>
    )
}

export default Hero
