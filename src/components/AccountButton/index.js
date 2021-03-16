import React, { useState } from 'react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp'

import './index.css'
import DropdownOptions from '../DropdownOptions'

const AccountButton = () => {

  const [open, setOpen] = useState(false)

  return (
    <div className='accountButton-container'>
      <div className={`accountButton ${open ? 'selected' : ''}`} onClick={() => setOpen(!open)}>
        <div className='account-user'>
          <div className='accountIcon'>

          </div>
          <p>ducvietdao</p>
        </div>
        <div className='arrow'>
          {open ? (
            <ArrowDropUpIcon />
          ) : (
            <ArrowDropDownIcon />
          )}
        </div>
      </div>
      {open &&
        <div className='dropdown'>
          <DropdownOptions />
        </div>
      }
    </div>
  )
}

export default AccountButton