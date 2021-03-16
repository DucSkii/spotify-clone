import React from 'react'
import Header from '../../components/Header'

import './index.css'

const Home = () => {

  return (
    <div className='home'>
      <Header />
      <div className='home-background' />
      <div className='home-content'>
        <h1 style={{ color: 'white' }}>HOMEPAGE</h1>
      </div>
    </div>
  )
}

export default Home