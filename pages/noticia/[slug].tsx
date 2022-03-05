import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Tabs, Tab } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { LinhaTop } from '../../components/LinhaTop'
import { colors } from '../../styles/colors'
import Header from '../../components/header'
import { ContentCarrousel } from '../../components/ContentCarrousel'
import { ItemNoticia } from '../../components/ItemNoticia'
import { TitulosSecoes } from '../../components/TitulosSecoes'
import { useEffect, useState } from 'react'
import { CarrouselImagens } from '../../components/CarrouselImagens'
import { ItemAtende } from '../../components/ItemAtende'
import { Footer } from '../../components/Footer'
import { ItemButton } from '../../components/ItemButton'
import { loadNoticias } from '../../graphql/loadnoticias'
import { NextSeo } from 'next-seo'

{
  /* <div dangerouslySetInnerHTML={{ __html:noticia.corpo}} /> */
}

const Noticia = ({ noticia }: any) => {
  const [isLoading, setLoading] = useState(false)
  function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000))
  }

  const handleClick = () => setLoading(true)

  return (
    <>
      <NextSeo
        title={`Prefeitura | ${noticia.data[0].attributes.Titulo}`}
        description={noticia.data[0].attributes.Resumo}
      />

      <div className="container noticiasSecao">
        <div className="row subHeaderSingle">
          <h1 className="titleSingle">{noticia.data[0].attributes.Titulo}</h1>
          <p>{noticia.data[0].attributes.Resumo}</p>
          <div className="dataInfo">
            <div className="coll">
              <strong>Data:</strong>
              {new Date(noticia.data[0].attributes.createdAt).toLocaleString(
                'pt-BR',
              )}{' '}
              <br />
              escrito por:
              <strong style={{ textTransform: 'capitalize' }}>
                {' '}
                {noticia.data[0].attributes.autor.data.attributes.Nome}
              </strong>
            </div>
          </div>
        </div>
        <div className="row rowStyleG1 mx-auto">
          <Image
            src={
              process.env.url +
              noticia.data[0].attributes.Capa.data.attributes.url
            }
            quality={100}
            objectFit="cover"
            width="1160"
            height="600"
            alt={noticia.data[0].attributes.Titulo}
          />
        </div>
        <div className="row rowStyleG1">
          <div
            dangerouslySetInnerHTML={{
              __html: noticia.data[0].attributes.Conteudo,
            }}
          />
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

export async function getServerSideProps(context: any) {
  const { slug } = context.query
  // console.log('contenxto:', context.slug)
  const noticiaRes = await fetch(
    `${process.env.url}/api/noticias?filters[slug]=${slug}&populate=*`,
  )
  const noticia = await noticiaRes.json()

  return {
    props: {
      noticia,
    },
  }
}

export default Noticia