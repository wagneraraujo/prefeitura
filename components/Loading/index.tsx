import { Spinner } from 'react-bootstrap'

export const Loading = () => {
  return (
    <>
      <Spinner animation="border" variant="success" />
      <p>
        Esse site está sem dados, cadastre noticias, menus, categorias, páginas
        e itens de atendimento
      </p>
    </>
  )
}
