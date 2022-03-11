import { FaAngleRight } from 'react-icons/fa'

interface AtendeProps {
  nome: string
  descricao: string
  url: string
  cor: any
}

export const ItemAtende = ({ nome, descricao, url, cor }: AtendeProps) => {
  return (
    <li className="itemAtende" style={{ backgroundColor: cor }}>
      <a href={url} target="_blank" rel="noreferrer">
        <div className="linhaI">
          <FaAngleRight /> <h5>{nome}</h5>
        </div>
        <p>{descricao}</p>
      </a>
    </li>
  )
}
