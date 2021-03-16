import React from 'react'
import './index.css'

const DropdownOptions = ({ text, logout = false }) => {

  const logoutFunction = () => {
    localStorage.clear()
    window.location.reload()
  }

  return (
    <div className='dropdownOptions' id='accountButton' onClick={logout ? logoutFunction : () => { }}>
      <p>{text}</p>
    </div>
  )
}

export default DropdownOptions