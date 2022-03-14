import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Tabs, Tab } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { LinhaTop } from '../../components/LinhaTop'
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

const Noticia = ({ noticia, banners }: any) => {
  const [isLoading, setLoading] = useState(false)
  function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000))
  }

  const handleClick = () => setLoading(true)

  console.log(noticia)
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
          <CarrouselImagens banners={banners} />
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps(context: any) {
  const { slug } = context.query
  console.log(slug)
  const noticiaRes = await fetch(
    `${process.env.url}/api/noticias?filters[slug]=${slug}&populate=*`,
  )
  const bannerRes = await fetch(`${process.env.url}/api/banners?populate=*`)
  const banners = await bannerRes.json()
  const noticia = await noticiaRes.json()

  return {
    props: {
      noticia,
      banners,
    },
  }
}

export default Noticia
