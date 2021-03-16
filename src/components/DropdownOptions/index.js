import React from 'react'
import './index.css'

const DropdownOptions = ({text}) => {

  return (
    <div className='dropdownOptions' id='accountButton'>
      <p>{text}</p>
    </div>
  )
}

export default DropdownOptions