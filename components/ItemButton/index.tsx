import * as React from 'react'

import Script from 'next/script'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
interface ItemBttonProps {
  link: string
  iconName: string
  title: string
}

export const ItemButton = ({ link, iconName, title }: ItemBttonProps) => {
  return (
    <>
      {/* <Script src="https://kit.fontawesome.com/56798b4e6a.js"></Script> */}

      <a href={link} target="_blank" rel="noreferrer" className="itemButton">
        <div className="icones">
          {/* <i className="fas fa-address-book"></i> */}
          <i className={`fas fa-${iconName}`}></i>
        </div>
        <span className="title">{title}</span>
      </a>
    </>
  )
}
