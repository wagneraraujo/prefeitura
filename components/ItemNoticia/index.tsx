import Image from 'next/image'
import Link from 'next/link'
import { StrapiImage } from '../../shared-types/strapi-image'
export interface noticiaProps {
  titulo: string
  categoria: string
  imagem: string
  dataHora?: String
  resumo?: string
  slug: string
}

export const ItemNoticia = ({
  titulo,
  categoria,
  imagem,
  dataHora,
  resumo,
  slug,
}: noticiaProps) => {
  return (
    <div className="col-xs-12 col-sm-8 col-md-8">
      <Link href="/noticia/[slug]" as={`/noticia/${slug}`}>
        <a className="itemNoticia">
          <div className="tituloNoticia tituloDescricaoOrder order-sm-1">
            <div className="dataNoticia">{dataHora}</div>
            <h3>{titulo}</h3>
            <p className="descricaoNotcia">{resumo?.substring(0, 130)} ...</p>
            <div className="categorianoticia">{categoria}</div>
          </div>
          <div className="imagemOrder">
            <picture>
              <img src={imagem} alt={titulo} className="imagemNoticia" />
            </picture>
          </div>
        </a>
      </Link>
    </div>
  )
}
