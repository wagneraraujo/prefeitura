export const TitulosSecoes = ({ children, color }: any) => {
  return (
    <>
      <h4 className="tituloSecoesContent" style={{ color: color }}>
        {children}
      </h4>
    </>
  )
}
