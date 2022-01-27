import { useState } from 'react'
import { Carousel } from 'react-bootstrap'
import Image from 'next/image'
export default function CarrouselNoticias() {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex: any, e: any) => {
    setIndex(selectedIndex)
  }

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div className="imagemCArrousel">
          <Image
            //   loader={myLoader}
            src="/noticia.png"
            alt="/noticia.png"
            width={500}
            height={360}
            layout="responsive"
            objectFit="cover"
          />
        </div>

        <Carousel.Caption>
          <div className="descricaoNoticia">
            <h5>
              Vacinação contra a Covid-19 contará com 12 pontos de atendimento
              neste sábado
            </h5>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="imagemCArrousel">
          <Image
            //   loader={myLoader}
            src="/noticia.png"
            alt="/noticia.png"
            width={500}
            height={360}
            layout="responsive"
            objectFit="cover"
          />
        </div>

        <Carousel.Caption>
          <div className="descricaoNoticia">
            <h5>
              Vacinação contra a Covid-19 contará com 12 pontos de atendimento
              neste sábado
            </h5>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
