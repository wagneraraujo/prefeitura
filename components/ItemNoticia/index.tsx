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
          <div className="tituloNoticia">
            <h3>{titulo}</h3>
            <div className="categorianoticia">saúde</div>
          </div>
          <div className="">
            <Image
              //   loader={myLoader}
              src={imagem}
              alt={titulo}
              width={120}
              height={120}
              objectFit="cover"
              className="imagemNoticia"
            />
          </div>
        </a>
      </Link>
    </div>
  )
}
