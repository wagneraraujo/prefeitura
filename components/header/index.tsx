import { useState } from 'react'

import { ButtonHambuguer } from '../ButtonHamburger'
import Image from 'next/image'
import Link from 'next/link'
import { FaSearch } from 'react-icons/fa'
import { InputBuscar } from '../InputBuscar'
import { LinhaTop } from '../LinhaTop'
import { colors } from '../../styles/colors'
import { useRouter } from 'next/router'

export default function Header({ navigation, categorias }: any) {
  const [mostrarBusca, setMostrarBusca] = useState<boolean>(false)
  const handleToggleMenu = () => {
    setMostrarBusca(true)
    if (mostrarBusca === true) {
      setMostrarBusca(false)
    }
  }

  const router = useRouter()
  console.log(categorias)

  return (
    <>
      <LinhaTop
        color={colors.azul}
        linkFacebook="#"
        linkInstagram="#"
        linkTitle="#"
        linkTwitter="#"
        titleLink="Ouvidoria/Semcom"
      />
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
                {navigation.data.map((item: any) => {
                  const newMenuItem = '/' + item.attributes.slug
                  return (
                    <li key={item.id}>
                      <Link href={`${item.attributes.slug}`}>
                        <a
                          className={
                            router.pathname === newMenuItem ? 'activeLink' : ''
                          }
                        >
                          {item.attributes.Titulo}
                        </a>
                      </Link>
                    </li>
                  )
                })}
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
              {categorias.data.map((item: any) => {
                const newMenuItem = '/' + item.attributes.slug
                return (
                  <li key={item.id}>
                    <Link href={`${item.attributes.slug}`}>
                      <a
                        className={
                          router.pathname === newMenuItem ? 'activeLink' : ''
                        }
                      >
                        {item.attributes.Nome}
                      </a>
                    </Link>
                  </li>
                )
              })}
              {/* <li>
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
              </li> */}
            </ul>
          </div>
        </div>
        {mostrarBusca && <InputBuscar />}
      </div>
    </>
  )
}
