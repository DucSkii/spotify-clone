import React from 'react'
import AccountButton from '../AccountButton'
import { useSelector } from 'react-redux'

import './index.css'

const Header = () => {

  const open = useSelector(state => state.dropdown.open)

  return (
    <div className='header'>
      <div className={open ? 'header-accountButton-open' : 'header-accountButton'} >
        <AccountButton />
      </div>
    </div>
  )
}

export default Header