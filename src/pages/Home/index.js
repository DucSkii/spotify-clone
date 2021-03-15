import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {

  return (
    <div>
      <h1>HOMEPAGE</h1>
      <Link to='/Your Library'>Library</Link>
    </div>
  )
}

export default Home