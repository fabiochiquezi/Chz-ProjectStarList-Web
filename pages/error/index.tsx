import { MixedStruct } from '../share/structure/Mixed'
import { FC } from 'react'
import Head from 'next/head'
import { BtnSignIn } from 'pages/share/components'
import { useSetAuth } from 'pages/share/auth/types/setTypes'
import { useAuth } from 'pages/share/auth/types/usetypes'
import { useRouter } from 'next/router'
import { useContentLoad } from 'pages/share/store'

const ErrorPage: FC<{ error?: string }> = ({
    error = 'Sorry, but something went wrong'
}) => {
    const router = useRouter()
    const contentLoad = useContentLoad()
    const { loading, user } = useAuth()
    const { signIn, signOut } = useSetAuth()
    const BtnSignHeader = <BtnSignIn onClick={signIn} loading={loading} />

    return (
        <div>
            <Head>
                <title>Star List | My List</title>
                <meta
                    name="description"
                    content="See all of your memories about movies, series, animations, books and games"
                />
            </Head>

            <MixedStruct
                user={user}
                router={router}
                signOut={signOut}
                BtnSignIn={BtnSignHeader}
                loading={contentLoad.state}
            >
                <div
                    className="relative h-[50vh] lg:h-[50vh] w-full"
                    data-testid="error-section"
                >
                    <p className="text-red-600 text-2xl absolute left-[50%] top-[50%] ml-[-150px] mt-[-125px] md:mt-[-50px] max-w-[300px] mx-auto text-center">
                        <span className="text-5xl mb-6 font-bold inline-block">
                            ERROR ;(
                        </span>
                        <br />
                        {error}
                    </p>
                </div>
            </MixedStruct>
        </div>
    )
}

export default ErrorPage
