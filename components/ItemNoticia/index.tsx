import Image from 'next/image'
import Link from 'next/link'
interface noticiaProps {
  titulo: string
  categoria: string
  imagem: string
}

export const ItemNoticia = ({ titulo, categoria, imagem }: noticiaProps) => {
  return (
    <div className="col-xs-12 col-sm-8 col-md-8">
      <Link href="/">
        <a className="itemNoticia">
          <div className="tituloNoticia tituloDescricaoOrder order-sm-1">
            <div className="dataNoticia">16/02/2022 as 13:08</div>
            <h3>{titulo}</h3>
            <p className="descricaoNotcia">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
              ex odit ad rerum minus! Sunt fugiat quos id illum sed eaqu
            </p>
            <div className="categorianoticia">saúde</div>
          </div>
          <div className="imagemOrder">
            {/* <Image
              //   loader={myLoader}
              src={imagem}
              alt={titulo}
              width={120}
              height={120}
              objectFit="cover"
              className="imagemNoticia imgMobileNoticia"
            />

            <Image
              //   loader={myLoader}
              src={imagem}
              alt={titulo}
              width={340}
              height={190}
              objectFit="cover"
              className="imagemNoticia imgDesktopNoticia"
            /> */}

            <picture>
              <img src={imagem} alt="Flowers" className="imagemNoticia" />
            </picture>
          </div>
        </a>
      </Link>
    </div>
  )
}
