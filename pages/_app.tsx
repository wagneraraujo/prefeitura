import 'bootstrap/dist/css/bootstrap.min.css'

import type { AppProps } from 'next/app'
import '../styles/styles.scss'
import Head from 'next/head'
import Header from '../components/header'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo'
function MyApp({ Component, pageProps, navigation }: any) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Header navigation={navigation} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

MyApp.getInitialProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/menus`)
  const navigation = await res.json()

  return { navigation }
}
