import React from 'react'
import styles from './HeroLogin.module.css'

type props = {
    title: string
    description: string
}

const HeroLogin: React.FC<props> = ({ title, description }) => {
    return (
        <section className={styles.heroWrapper}>
            <div className={styles.overlayAll}></div>
            <div className={styles.overlayBottom}></div>
            <div className={styles.overlayTop}></div>

            <div className="lg:container lg:mx-auto lg:relative lg:h-full w-full">
                <div
                    className="flex flex-col items-center text-center w-100
                        absolute z-10 bottom-[32px] md:bottom-[48px] w-[100%] px-2 md:px-6
                        lg:left-0 lg:bottom-[50%] lg:text-left lg:mb-[-320px] lg:w-[720px]"
                >
                    <main className="max-w-[360px] md:max-w-[480px] lg:max-w-[720px]">
                        <h1 className="text-5xl font-bold mb-4 leading-tight md:text-6xl md:mb-6 lg:text-7xl lg:leading-[120%] lg:mb-8">
                            {title}
                        </h1>
                        <p className="mb-8 text-xl md:text-2xl md:mb-10 lg:max-w-[500px] lg:leading-[150%]">
                            {description}
                        </p>
                        <button className="btn-transparent py-[8px] px-5 border-orange-400 text-orange-400">
                            Sign Up
                        </button>
                    </main>
                </div>
            </div>
        </section>
    )
}

export default HeroLogin
