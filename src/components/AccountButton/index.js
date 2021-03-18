import React from 'react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp'
import DropdownOptions from '../DropdownOptions'
import { openDropdown, closeDropdown } from '../../redux/ducks/generalReducer'
import { useSelector, useDispatch } from 'react-redux'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined'
import { Link } from 'react-router-dom'

import './index.css'

const AccountButton = (props) => {

  const dispatch = useDispatch()
  const open = useSelector(state => state.general.open)
  const user = useSelector(state => state.user.user)

  const toggleDropdown = () => {
    return open ? dispatch(closeDropdown()) : dispatch(openDropdown())
  }

  return (
    <div className='accountButton-container' id='accountButton' style={{ marginTop: `${open ? '35px' : ''}` }}>
      <div className={`accountButton ${open ? 'selected-accountButton' : ''}`} onClick={toggleDropdown} id='accountButton'>
        <div className='account-user' id='accountButton'>
          <div className='accountIcon'>
            {user?.images?.length ? (
              <img
                src={user.images[0].url}
                alt='User Icon'
              />
            ) : (
              <AccountCircleOutlinedIcon className='accountIcon-none' style={{ fontSize: '35px' }} />
            )}
          </div>
          <p>{props.username}</p>
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
          <Link to={`/user/${props.username}`}>
            <DropdownOptions text='Profile' />
          </Link>
          <DropdownOptions text='Log out' logout={true} />
        </div>
      }
    </div>
  )
}

export default AccountButton