import { useState } from 'react'
import { Carousel } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'
import { Router, useRouter } from 'next/router'
export default function CarrouselNoticias({ noticias }: any) {
  const [index, setIndex] = useState(0)
  const router = useRouter()

  const handleSelect = (selectedIndex: any, e: any) => {
    setIndex(selectedIndex)
  }

  // console.log('carrousel noticias', noticias)

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {noticias.data.map((item: any) => {
          const slug = item.attributes.slug
          return (
            <Carousel.Item key={item.id}>
              <Link href="/noticia/[slug]" as={`/noticia/${slug}`}>
                <a>
                  <div className="imagemCArrousel">
                    <Image
                      //   loader={myLoader}
                      src={
                        process.env.url +
                        item.attributes.Capa.data.attributes.url
                      }
                      alt={item.attributes.Titulo}
                      width={500}
                      height={360}
                      layout="responsive"
                      objectFit="cover"
                    />
                  </div>

                  <Carousel.Caption>
                    <div className="descricaoNoticia">
                      <h5>{item.attributes.Titulo}</h5>
                    </div>
                  </Carousel.Caption>
                </a>
              </Link>
            </Carousel.Item>
          )
        })}
      </Carousel>
    </>
  )
}
