import React, { useState, useEffect } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Header from '../../components/Header'
import SideBar from '../../components/SideBar'
import Home from '../Home'
import Search from '../Search'
import YourLibrary from '../YourLibrary'
import Profile from '../Profile'
import Footer from '../../components/Footer'
import SongPage from '../SongPage'
import Artist from '../Artist'
import AlbumPage from '../AlbumPage'
import PlaylistPage from '../PlaylistPage'

import './index.css'

const Player = ({ spotify }) => {

  const location = useLocation()
  const [pathname, setPathname] = useState('')
  const user = useSelector(state => state.user.user)

  useEffect(() => {
    setPathname(location.pathname)
  }, [location.pathname])

  if (!user) {
    return null
  }

  return (
    <div className='player'>
      <div style={{ display: 'flex', width: '100%' }}>
        <SideBar pathname={pathname} />
        <div
          className='player_body'
          style={{ marginTop: `${pathname.split('/')[1] === 'track' ? '0' : ''} ` }}
        >
          <Header />
          <Switch>
            <Route path='/playlist' component={PlaylistPage} />
            <Route path='/album' component={AlbumPage} />
            <Route path='/artist' component={Artist} />
            <Route path='/track' component={SongPage} />
            <Route path='/user' component={Profile} />
            <Route path='/Search' component={Search} />
            <Route path='/Your Library' component={YourLibrary} />
            <Route exact path='/' component={Home} />
          </Switch>
        </div>
      </div>
      <Footer spotify={spotify} />
    </div>
  )
}

export default Player