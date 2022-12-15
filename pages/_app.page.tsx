import './styles.scss'
import '@fontsource/roboto'
import { Struct } from './struct'
import { ReactElement } from 'react'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <Struct>
      <Component {...pageProps} />
    </Struct>
  )
}

export default MyApp

