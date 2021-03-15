import React from 'react'
import spotifyLogo from '../../images/spotifyLogo.jpg'

import './index.css'

const SideBar = () => {

  return (
    <div className='sideBar'>
      <img src={spotifyLogo} alt='Spotify Logo' />
      <div style={{color: 'white'}}>HOME</div>
    </div>
  )
}

export default SideBar