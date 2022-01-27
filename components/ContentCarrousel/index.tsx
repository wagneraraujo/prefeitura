import CarrouselNoticias from '../CarrouselNoticias'

export const ContentCarrousel = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <h4 className="titleSecoes">Principais Noticias</h4>
        </div>
        <div className="row">
          <div className="col-md-8 col-xs-12 no-gutter">
            <CarrouselNoticias />
          </div>

          <div className="col-md-4 col-xs-12"></div>
        </div>
      </div>
    </div>
  )
}
