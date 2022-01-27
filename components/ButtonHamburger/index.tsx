import React, { useState } from 'react'

export const ButtonHambuguer = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const handleToggle = () => {
    setOpenMenu(true)

    if (openMenu === true) {
      setOpenMenu(false)
    }
  }
  return (
    <>
      <div
        id="nav-icon1"
        className={openMenu ? 'open' : ''}
        onClick={handleToggle}
      >
        <span></span>
        <span></span>
        <span></span>
        <div
          className="textMenu"
          style={{
            top: openMenu ? '38px' : '26px',
          }}
        >
          {openMenu ? 'Fechar' : 'Menu'}
        </div>
      </div>
    </>
  )
}
