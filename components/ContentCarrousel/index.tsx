import CarrouselNoticias from '../CarrouselNoticias'
import { ItemNoticia } from '../ItemNoticia'
export const ContentCarrousel = ({ noticia }: any) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <h4 className="titleSecoes">Principais Noticias</h4>
        </div>
        <div className="row">
          <div className="col-md-7 col-xs-12 col-lg-7 no-gutter">
            <CarrouselNoticias noticias={noticia} />
          </div>

          <div className="col-md-5 col-xs-12 col-lg-5 colNoticiaWideCarrousel">
            <ItemNoticia
              key={1}
              categoria="Saúde"
              titulo="Justiça mantém liminar e condena Amazonas Energia por cobrança e retenção indevida da Cosip"
              imagem="/n1.jpg"
              slug="teste"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
