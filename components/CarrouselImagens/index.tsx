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
const Banners = [
  {
    id: 0,
    img: '/public/banner1.png',
  },
  {
    id: 1,
    img: '/public/banner1.png',
  },
  {
    id: 3,
    img: '/public/banner1.png',
  },
]

export const CarrouselImagens = () => {
  return (
    <Carousel responsive={responsive}>
      <ItemCarrousel />
      <ItemCarrousel />
      <ItemCarrousel />
      <ItemCarrousel />
      <ItemCarrousel />
      <ItemCarrousel />
    </Carousel>
  )
}
