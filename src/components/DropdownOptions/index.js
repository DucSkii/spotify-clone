import React from 'react'
import { useDispatch } from 'react-redux'
import { closeDropdown } from '../../redux/ducks/generalReducer'
import './index.css'

const DropdownOptions = ({ text, logout = false }) => {

  const dispatch = useDispatch()

  const logoutFunction = () => {
    window.location.reload()
  }

  return (
    <div className='dropdownOptions' id='accountButton' onClick={logout ? logoutFunction : () => dispatch(closeDropdown())}>
      <p>{text}</p>
    </div>
  )
}

export default DropdownOptions