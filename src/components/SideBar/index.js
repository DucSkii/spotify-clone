import React from 'react'
import { Link } from 'react-router-dom'
import spotifyLogo from '../../images/spotifyLogo.jpg'
import Navigation from '../Navigation'
import { useSelector } from 'react-redux'

import './index.css'

const SideBar = (props) => {

  const playlists = useSelector(state => state.user.playlists)

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

  const renderPlaylists = () => {
    return playlists?.items?.map((playlist, index) => {
      return (
        <div key={index} style={{ fontWeight: '700' }} className='sideBar-playlists-item'>{playlist.name}</div>
      )
    })
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
        {renderPlaylists()}
      </div>
    </div>
  )
}

export default SideBar