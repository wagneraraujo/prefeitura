import type { NextPage } from 'next'
import Head from 'next/head'
import { Tabs, Tab, Pagination } from 'react-bootstrap'
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
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'

const Home = ({ noticias, page }: any) => {
  const [isLoading, setLoading] = useState(false)
  function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000))
  }

  const handleClick = () => setLoading(true)
  const router = useRouter()
  return (
    <>
      <NextSeo
        title="Prefeitura Municipal de Manacapuru"
        description="Vivendo uma linda história"
      />
      <ContentCarrousel noticia={noticias} />
      <div className="container noticiasSecao">
        <div className="row">
          <TitulosSecoes>últimas Noticias</TitulosSecoes>
        </div>
        <div className="row">
          {noticias.data.map((item: any) => {
            return (
              <ItemNoticia
                key={item.id}
                categoria={item.attributes.categorias.data[0].attributes.Nome}
                titulo={item.attributes.Titulo}
                resumo={item.attributes.Resumo}
                slug={item.attributes.slug}
                imagem={
                  process.env.url + item.attributes.Capa.data.attributes.url
                }
              />
            )
          })}
        </div>

        <div className="row mx-auto btnCarregarMais">
          <Button
            variant="primary"
            onClick={() =>
              router.push(
                `/noticias?pagination[page]=${
                  page + 1
                }&pagination[pageSize]=2&populate=*`,
              )
            }
          >
            Caregar mais
          </Button>
        </div>

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

export async function getServerSideProps({ page = 1 }) {
  const noticiaRes = await fetch(
    `${process.env.url}/api/noticias?pagination[page]=1&pagination[pageSize]=2&_start=3&populate=*`,
  )
  const noticias = await noticiaRes.json()

  return {
    props: {
      noticias,
      page: +page,
    },
  }
}
