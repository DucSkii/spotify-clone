import React, { useState, useEffect } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import Header from '../../components/Header'
import SideBar from '../../components/SideBar'
import Home from '../Home'
import Search from '../Search'
import YourLibrary from '../YourLibrary'
import Footer from '../../components/Footer'

import './index.css'

const Player = ({ spotify }) => {

  const location = useLocation()
  const [pathname, setPathname] = useState('')

  useEffect(() => {
    setPathname(location.pathname)
  }, [location.pathname])

  return (
    <div className='player'>
      <Footer spotify={spotify} />
      <div className='player_sidebar'>
        <SideBar pathname={pathname} />
      </div>
      <div className='player_body'>
        <Header />
        <Switch>
          <Route path='/Search' component={Search} />
          <Route path='/Your Library' component={YourLibrary} />
          <Route exact path='/' component={Home} />
        </Switch>
      </div>
    </div>
  )
}

export default Player