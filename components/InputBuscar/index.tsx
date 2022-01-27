import { FaSearch } from 'react-icons/fa'

export const InputBuscar = (props: any) => {
  return (
    <>
      <div className={`${props} buscarContent`}>
        <input type="text" placeholder="Digite sua busca" />
        <button>
          <FaSearch />
        </button>
      </div>

      <div className="linhaTextura"></div>
    </>
  )
}
