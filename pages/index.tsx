import type { NextPage } from 'next'
import Head from 'next/head'
import { Tabs, Tab, Pagination } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { LinhaTop } from '../components/LinhaTop'
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

const Home = ({ noticias, page, banners }: any) => {
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
      <ContentCarrousel noticias={noticias} />
      <div className="container noticiasSecao">
        <div className="row">
          <TitulosSecoes>Últimas Noticias</TitulosSecoes>
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
          <CarrouselImagens banners={banners} />
        </div>
      </div>
    </>
  )
}

export default Home

export async function getServerSideProps() {
  const noticiaRes = await fetch(
    `${process.env.url}/api/noticias?pagination[page]=1&pagination[pageSize]=10&_start=3&populate=*`,
  )
  const bannerRes = await fetch(`${process.env.url}/api/banners?populate=*`)
  const banners = await bannerRes.json()
  const noticias = await noticiaRes.json()

  return {
    props: {
      noticias,
      banners,
    },
  }
}
