import React from 'react'
import ButtonsSignIn2 from '../../components/Buttons/ButtonSignIn2'
import { useSetAuth } from '../../context/AuthContext'
import styles from './Hero.module.css'

type props = {
    title: string
    description: string
}

const HeroLogin: React.FC<props> = ({ title, description }) => {
    const useAuth = useSetAuth()

    return (
        <section className={styles.heroWrapper + ' skeleton'}>
            <div className={styles.overlayAll}></div>
            <div className={styles.overlayBottom}></div>
            <div className={styles.overlayTop}></div>

            <div className="lg:container lg:mx-auto lg:relative lg:h-full w-full">
                <div
                    className="w-full absolute z-10 bottom-[32px] px-3 md:px-6
                    md:bottom-[48px] lg:bottom-[50%] lg:mb-[-300px] lg:w-[720px]"
                >
                    <main
                        className="max-w-[360px] md:max-w-[480px] lg:max-w-[720px] mx-auto
                                flex flex-col items-center text-center lg:text-left lg:items-start"
                    >
                        <h1
                            className="text-5xl font-bold mb-4 leading-tight
                                       md:text-6xl lg:text-7xl lg:leading-[120%]"
                        >
                            {title}
                        </h1>

                        <p className="mb-10 text-xl md:text-2xl lg:mb-8 lg:max-w-[500px] lg:leading-[150%]">
                            {description}
                        </p>

                        <ButtonsSignIn2 onClick={useAuth.signIn} />
                    </main>
                </div>
            </div>
        </section>
    )
}

export default HeroLogin
