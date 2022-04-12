import 'bootstrap/dist/css/bootstrap.min.css'

import type { AppProps } from 'next/app'
import '../styles/styles.scss'
import Head from 'next/head'
import Header from '../components/header'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo'
import { TitulosSecoes } from '../components/TitulosSecoes'
import { ItemAtende } from '../components/ItemAtende'
import { Tab, Tabs } from 'react-bootstrap'
import { ItemButton } from '../components/ItemButton'
import { Footer } from '../components/Footer'
import { colorsItens } from '../styles/colors'
import { TabSite } from '../components/TabsSite'
import { Loading } from '../components/Loading'
function MyApp({
  Component,
  pageProps,
  navigation,
  categorias,
  atende,
  abas,
  categoriaAbas,
}: any) {
  console.log(atende)
  return (
    <>
      {atende.data === null ? <Loading /> : ''}
      <DefaultSeo {...SEO} />
      <Header navigation={navigation} categorias={categorias} />
      <Component {...pageProps} />

      <div className="azulBackground" {...abas}>
        <div className="container contentAtende">
          <div className="row">
            <TitulosSecoes color="#fff">Manacapuru Atende</TitulosSecoes>
          </div>
          <div className="row ">
            <div className="col-md-6 col-xs-12 no-gutter">
              <ul className="ulLinhaAtende">
                {atende.data?.map((item: any, index: number) => {
                  const cors = colorsItens.sort(() => Math.random())
                  return (
                    <ItemAtende
                      key={item.id}
                      descricao={item.attributes.Pequena_descricao}
                      nome={item.attributes.Nome}
                      url={item.attributes.url_externa}
                      cor={cors[index]}
                    />
                  )
                })}
              </ul>
            </div>

            <TabSite tabs={abas} categorias={categoriaAbas} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default MyApp

MyApp.getInitialProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/menus`)
  const resCategorias = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/categorias`,
  )
  const resAtende = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/atendimentos`,
  )
  const resAbas = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/item-abas?populate=*`,
  )
  const resCategoriasAbas = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/categoria-abas?populate=*`,
  )

  const navigation = await res.json()
  const categorias = await resCategorias.json()
  const atende = await resAtende.json()
  const abas = await resAbas.json()
  const categoriaAbas = await resCategoriasAbas.json()

  return {
    navigation,
    categorias,
    atende,
    abas,
    categoriaAbas,
  }
}
