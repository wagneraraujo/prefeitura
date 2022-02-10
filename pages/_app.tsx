import 'bootstrap/dist/css/bootstrap.min.css'

import type { AppProps } from 'next/app'
import '../styles/styles.scss'
import Head from 'next/head'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
