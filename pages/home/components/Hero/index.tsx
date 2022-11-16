import { FC } from 'react'
import styles from './index.module.css'
import { BtnSignIn } from './BtnSignIn'
import { SignInFn } from '../../../share/context/Auth/types/setTypes'

interface props {
    title: string
    loading: boolean
    signIn: SignInFn
    description: string
}

const Hero: FC<props> = ({ title, description, signIn, loading }) => (
    <section
        className={`${styles.heroWrapper} skeleton`}
        data-cy="hero-showProject"
    >
        <div className={styles.overlayAll}></div>
        <div className={styles.overlayBottom}></div>
        <div className={styles.overlayTop}></div>

        <div className="lg:container lg:mx-auto lg:relative lg:h-full w-full">
            <div
                className="w-full absolute z-10 bottom-[90px] px-3 md:px-6
                    md:bottom-[48px] lg:bottom-[50%] lg:mb-[-300px] lg:w-[720px]"
            >
                <main
                    className="max-w-[360px] md:max-w-[480px] lg:max-w-[720px] mx-auto
                        flex flex-col items-center text-center lg:text-left lg:items-start"
                >
                    <h1
                        className="text-5xl font-bold mb-4 leading-tight
                            md:text-6xl lg:text-7xl lg:leading-[120%]"
                        id="hero-h1"
                    >
                        {title}
                    </h1>

                    <p
                        className="mb-10 text-xl md:text-2xl lg:mb-8 lg:max-w-[500px]
                            lg:leading-[150%]"
                        id="hero-description"
                    >
                        {description}
                    </p>

                    <BtnSignIn
                        id="btn-signIn-2"
                        onClick={signIn}
                        loading={loading}
                    />
                </main>
            </div>
        </div>
    </section>
)

export { Hero }
