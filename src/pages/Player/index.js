import React, { useState, useEffect } from 'react'
import { Switch, Route, Link, useLocation, matchPath } from 'react-router-dom'
import SideBar from '../../components/SideBar'
import Home from '../Home'
import Search from '../Search'
import YourLibrary from '../YourLibrary'

import './index.css'

const Player = ({ s }) => {

  const location = useLocation()
  const [pathname, setPathname] = useState('')

  useEffect(() => {
    setPathname(location.pathname)
  }, [location.pathname])

  return (
    <div style={{ display: 'flex' }}>
      <SideBar pathname={pathname} />
      <Switch>
        <Route path='/Search' component={Search} />
        <Route path='/Your Library' component={YourLibrary} />
        <Route exact path='/' component={Home} />
      </Switch>
    </div>
  )
}

export default Player