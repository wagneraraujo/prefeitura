import Image from 'next/image'
import Link from 'next/link'
export const ItemCarrousel = ({ url, imagem, title }: any) => {
  return (
    <div className="itemCarrouselImage">
      <Link href={`${url}`}>
        <a target="_blank">
          <Image
            // loader={myLoader}
            src={imagem}
            alt={title}
            width={220}
            height={120}
            objectFit="cover"
            layout="responsive"
          />
        </a>
      </Link>
    </div>
  )
}
