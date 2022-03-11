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
function MyApp({ Component, pageProps, navigation, categorias, atende }: any) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Header navigation={navigation} categorias={categorias} />
      <Component {...pageProps} />

      <div className="azulBackground">
        <div className="container contentAtende">
          <div className="row">
            <TitulosSecoes color="#fff">Manacapuru Atende</TitulosSecoes>
          </div>
          <div className="row ">
            <div className="col-md-6 col-xs-12 no-gutter">
              <ul className="ulLinhaAtende">
                {atende.data.map((item: any, index) => {
                  const cors = colorsItens.sort(() => Math.random())
                  console.log(cors)
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

            <div className="col-md-6 col-xs-12 colItensLink">
              <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab eventKey="home" title="Cidadão">
                  <div className="contentLinks">
                    <ItemButton iconName="heartbeat" title="Saúde" link="#" />
                    <ItemButton iconName="heartbeat" title="Saúde" link="#" />
                    <ItemButton iconName="heartbeat" title="Saúde" link="#" />
                    <ItemButton iconName="heartbeat" title="Saúde" link="#" />
                    <ItemButton iconName="heartbeat" title="Saúde" link="#" />
                    <ItemButton iconName="heartbeat" title="Saúde" link="#" />
                    <ItemButton iconName="heartbeat" title="Saúde" link="#" />
                    <ItemButton iconName="heartbeat" title="Saúde" link="#" />
                  </div>
                </Tab>
                <Tab eventKey="empresa" title="Empresas">
                  <div className="contentLinks">
                    <ItemButton iconName="heartbeat" title="Saúde" link="#" />
                  </div>
                </Tab>
                <Tab eventKey="turista" title="Turista">
                  <div className="contentLinks">
                    <ItemButton iconName="heartbeat" title="Saúde" link="#" />
                    <ItemButton iconName="heartbeat" title="Saúde" link="#" />
                    <ItemButton iconName="heartbeat" title="Saúde" link="#" />
                  </div>
                </Tab>
                <Tab eventKey="servidor" title="Servidor">
                  <div className="contentLinks">
                    <ItemButton iconName="heartbeat" title="Saúde" link="#" />
                    <ItemButton iconName="heartbeat" title="Saúde" link="#" />
                  </div>
                </Tab>
              </Tabs>
            </div>
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
  const navigation = await res.json()
  const categorias = await resCategorias.json()
  const atende = await resAtende.json()

  return { navigation, categorias, atende }
}
