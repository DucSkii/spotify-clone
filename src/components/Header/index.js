import React, { useState } from 'react'
import AccountButton from '../AccountButton'
import { useSelector } from 'react-redux'

import './index.css'

const Header = () => {

  const open = useSelector(state => state.dropdown.open)
  const [style, setStyle] = useState({ opacity: '0' })

  window.onscroll = () => {
    if (window.pageYOffset >= 100) {
      setStyle({ opacity: '1' })
    } else {
      setStyle({ opacity: '0' })
    }
  }

  return (
    <div className='header'>
      <div className='header-colour' style={style} />
      <div className={open ? 'header-accountButton-open' : 'header-accountButton'} >
        <AccountButton />
      </div>
    </div>
  )
}

export default Header