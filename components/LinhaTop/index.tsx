import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

interface LinhaTopProps {
  titleLink: String
  linkFacebook: string
  linkInstagram: string
  linkTwitter: string
  linkTitle: string
  color: string
}



export const LinhaTop = ({
  titleLink,
  linkFacebook,
  linkInstagram,
  linkTitle,
  linkTwitter,
  color,
}: LinhaTopProps) => {
  return (
    <div className="allLinha" style={{ backgroundColor: color }}>
      <div className={`container ${color}`}>
        <div className="row linhaColunaTop">
        <div className="col">
          <a href={linkTitle} target="_blank" rel="noreferrer">
            {titleLink}
          </a>
        </div>
        <div className="col">
          <ul>
            <li>
              <a href={linkFacebook} target="_blank" rel="noreferrer">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href={linkInstagram} target="_blank" rel="noreferrer">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href={linkTwitter} target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  )
}
