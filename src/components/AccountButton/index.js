import React from 'react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp'
import DropdownOptions from '../DropdownOptions'
import { openDropdown, closeDropdown } from '../../redux/ducks/dropdownReducer'
import { useSelector, useDispatch } from 'react-redux'

import './index.css'

const AccountButton = () => {

  const dispatch = useDispatch()
  const open = useSelector(state => state.dropdown.open)

  const toggleDropdown = () => {
    return open ? dispatch(closeDropdown()) : dispatch(openDropdown())
  }

  return (
    <div className='accountButton-container' id='accountButton'>
      <div className={`accountButton ${open ? 'selected-accountButton' : ''}`} onClick={toggleDropdown} id='accountButton'>
        <div className='account-user' id='accountButton'>
          <div className='accountIcon'>

          </div>
          <p >ducvietdao</p>
        </div>
        <div className='arrow' id='accountButton'>
          {open ? (
            <ArrowDropUpIcon id='accountButton' />
          ) : (
            <ArrowDropDownIcon id='accountButton' />
          )}
        </div>
      </div>
      {open &&
        <div className='dropdown' id='accountButton'>
          <DropdownOptions text='Log out' logout={true} />
        </div>
      }
    </div>
  )
}

export default AccountButton