import CarrouselNoticias from '../CarrouselNoticias'
import { ItemNoticia } from '../ItemNoticia'
import { Carousel } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
export const ContentCarrousel = ({ noticias }: any) => {
  const [index, setIndex] = useState(0)
  const router = useRouter()

  const handleSelect = (selectedIndex: any, e: any) => {
    setIndex(selectedIndex)
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <h4 className="titleSecoes">Principais Noticias</h4>
        </div>
        <div className="row">
          <div className="col-md-7 col-xs-12 col-lg-7 no-gutter">
            <CarrouselNoticias noticias={noticias} />
          </div>

          <div className="col-md-5 col-xs-12 col-lg-5 colNoticiaWideCarrousel">
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
        </div>
      </div>
    </div>
  )
}
