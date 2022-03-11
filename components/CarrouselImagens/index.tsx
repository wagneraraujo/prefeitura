import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { ItemCarrousel } from './item'
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
}

export const CarrouselImagens = ({ banners }: any) => {
  return (
    <Carousel responsive={responsive}>
      {banners.data.map((item: JSX.Element | any) => {
        return (
          <ItemCarrousel
            key={item.id}
            url={item.attributes.url_completa}
            imagem={
              process.env.url + item.attributes.Banner.data.attributes.url
            }
          />
        )
      })}
    </Carousel>
  )
}
