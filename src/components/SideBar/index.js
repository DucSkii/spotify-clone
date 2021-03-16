import React from 'react'
import { Link } from 'react-router-dom'
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
      <Link to={navigation === 'Home' ? '/' : `/${navigation}`} style={{ textDecoration: 'none' }}>
        <Navigation route={navigation} />
      </Link>
    )
  }

  return (
    <div className='sideBar'>
      <Link to='/'>
        <div className='sideBar-logo'>
          <img src={spotifyLogo} alt='Spotify Logo' draggable='false' style={{ userSelect: 'none' }} />
        </div>
      </Link>
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