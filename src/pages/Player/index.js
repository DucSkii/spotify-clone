import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import SideBar from '../../components/SideBar'
import Home from '../Home'
import YourLibrary from '../YourLibrary'

import './index.css'

const Player = ({ s }) => {

  return (
    <BrowserRouter>
      <div style={{ display: 'flex' }}>
        <SideBar />
        <Switch>
          <Route path='/yourlibrary' component={YourLibrary} />
          <Route exact path='/' component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default Player