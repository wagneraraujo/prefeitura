import Image from 'next/image'

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row mx-auto linhaFooter">
            <Image src="/logo2.png" alt="" width={80} height={66} />
            <p>Todos os direitos reservados</p>
          </div>
        </div>
        <div className="linhaTextura"></div>
      </footer>
    </>
  )
}
