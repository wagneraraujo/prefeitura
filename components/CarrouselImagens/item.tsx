import Image from 'next/image'
import Link from 'next/link'
export const ItemCarrousel = () => {
  return (
    <div className="itemCarrouselImage">
      <Link href="#">
        <a>
          <Image
            // loader={myLoader}
            src="/banner1.png"
            alt="Picture of the author"
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
