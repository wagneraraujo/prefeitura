import type { NextPage } from 'next'
import Head from 'next/head'
import { Tabs, Tab } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { LinhaTop } from '../components/LinhaTop'
import { colors } from '../styles/colors'
import Header from '../components/header'
import { ContentCarrousel } from '../components/ContentCarrousel'
import { ItemNoticia } from '../components/ItemNoticia'
import { TitulosSecoes } from '../components/TitulosSecoes'
import { useEffect, useState } from 'react'
import { CarrouselImagens } from '../components/CarrouselImagens'
import { ItemAtende } from '../components/ItemAtende'
import { Footer } from '../components/Footer'
import { ItemButton } from '../components/ItemButton'
import { loadNoticias } from '../graphql/loadnoticias'
const Home = ({ noticias }) => {
  const [isLoading, setLoading] = useState(false)
  function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000))
  }

  const handleClick = () => setLoading(true)
  console.log(noticias)
  return (
    <>
      <Head>
        <title>Prefeitura Municpal de Manacapuru</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container noticiasSecao">
        <div className="row">
          <TitulosSecoes>Sobre</TitulosSecoes>
        </div>
        <div className="row">sobre</div>

        <div className="row linhabanners">
          <CarrouselImagens />
        </div>
      </div>

      <div className="azulBackground">
        <div className="container contentAtende">
          <div className="row">
            <TitulosSecoes color="#fff">Manacapuru Atende</TitulosSecoes>
          </div>
          <div className="row ">
            <div className="col-md-6 col-xs-12 no-gutter">
              <ul className="ulLinhaAtende">
                <ItemAtende
                  descricao="Imposto Predial e Territorial Urbano"
                  nome="IPTU"
                  url="#"
                  cor="#2B56A5"
                />

                <ItemAtende
                  descricao="Imposto Predial e Territorial Urbano"
                  nome="IPTU"
                  url="#"
                  cor="#0B9ADE"
                />

                <ItemAtende
                  descricao="Imposto Predial e Territorial Urbano"
                  nome="IPTU"
                  url="#"
                  cor="#FFBC00"
                />

                <ItemAtende
                  descricao="Imposto Predial e Territorial Urbano"
                  nome="IPTU"
                  url="#"
                  cor="#2BB254"
                />

                <ItemAtende
                  descricao="Imposto Predial e Territorial Urbano"
                  nome="IPTU"
                  url="#"
                  cor="#FF7110"
                />
                <ItemAtende
                  descricao="Imposto Predial e Territorial Urbano"
                  nome="IPTU"
                  url="#"
                  cor="#007943"
                />

                <ItemAtende
                  descricao="Imposto Predial e Territorial Urbano"
                  nome="IPTU"
                  url="#"
                  cor="#0B9ADE"
                />
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

export default Home

export async function getServerSideProps() {
  console.log(process.env.url)
  const noticiaRes = await fetch(`${process.env.url}/api/noticias?populate=*`)
  const noticias = await noticiaRes.json()

  return {
    props: {
      noticias,
    },
  }
}
