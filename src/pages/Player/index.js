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
    <div
      className='player'
      style={{ backgroundColor: `${pathname === `/user/${user.display_name}` ? 'rgb(36, 36, 36)' : ''}` }}
    >
      <Footer spotify={spotify} />
      <div className='player_sidebar'>
        <SideBar pathname={pathname} />
      </div>
      <div
        className='player_body'
        style={{ marginTop: `${pathname === '/track' ? '0' : ''} ` }}
      >
        <Header />
        <Switch>
          <Route path='/track' component={SongPage} />
          <Route path='/user' component={Profile} />
          <Route path='/Search' component={Search} />
          <Route path='/Your Library' component={YourLibrary} />
          <Route exact path='/' component={Home} />
        </Switch>
      </div>
    </div>
  )
}

export default Player