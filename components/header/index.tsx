import { useState } from 'react'

import { ButtonHambuguer } from '../ButtonHamburger'
import Image from 'next/image'
import Link from 'next/link'
import { FaSearch } from 'react-icons/fa'
import { InputBuscar } from '../InputBuscar'

export default function Header() {
  const [mostrarBusca, setMostrarBusca] = useState<boolean>(false)
  const handleToggleMenu = () => {
    setMostrarBusca(true)
    if (mostrarBusca === true) {
      setMostrarBusca(false)
    }
  }

  return (
    <div className="backLinha">
      <div className="container">
        <div className="linhaHeader">
          <div className="colMenu">
            <ButtonHambuguer />
          </div>
          <div className="ColLogo">
            <Link href="/">
              <a>
                <Image
                  src="/logo.png"
                  alt="Prefeitura Municipal de Manacapuru"
                  width={324}
                  height={60}
                  objectFit="contain"
                  className="mx-auto text-center"
                  quality={100}
                />
              </a>
            </Link>
          </div>
          <div className="ColBusca">
            <ul className="menuDesktop">
              <li>
                <Link href="">
                  <a>A Prefeitura</a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a>Cidade</a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a>Página</a>
                </Link>
              </li>
            </ul>
            <button className="btnBusca" onClick={handleToggleMenu}>
              <FaSearch />
              <span>Buscar</span>
            </button>
          </div>
        </div>
      </div>

      <div className="linhaCategorias">
        <div className="container">
          <ul>
            <li>Categorias</li>
            <li>
              <Link href="/">
                <a>Saúde</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Transporte</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Segurança</a>
              </Link>
            </li>

            <li>
              <Link href="/">
                <a>Comércio</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {mostrarBusca && <InputBuscar />}
    </div>
  )
}
