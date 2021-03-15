import React from 'react'
import spotifyLogo from '../../images/spotifyLogo.jpg'
import Navigation from '../Navigation'

import './index.css'

const SideBar = (props) => {

  const renderNavigation = (navigation) => {
    if (props.pathname === (navigation === 'Home' ? '/' : `/${navigation}`)) {
      return (
        <Navigation route={navigation} selected />
      )
    }
    return (
      <Navigation route={navigation} />
    )
  }

  return (
    <div className='sideBar'>
      <div className='sideBar-logo'>
        <img src={spotifyLogo} alt='Spotify Logo' />
      </div>
      <div className='sideBar-navigation'>
        {renderNavigation('Home')}
        {renderNavigation('Search')}
        {renderNavigation('Your Library')}
      </div>
      <div className='sideBar-playlists'>
        <p>PLAYLISTS</p>
        <div className='sideBar-playlists-separator' />
        <div className='sideBar-playlists-item'>PLAYLISTS</div>
        <div className='sideBar-playlists-item'>PLAYLISTS</div>
        <div className='sideBar-playlists-item'>PLAYLISTS</div>
      </div>
    </div>
  )
}

export default SideBar