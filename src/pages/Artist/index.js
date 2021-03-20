import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import './index.css'

const Artist = () => {

  const location = useLocation()

  return (
    <div className='artist'>
      <div className='artist-header'>
        <div className='artist-header-section'>
          <div className='artist-icon-container'>

          </div>
          <div className='artist-information'>
            <p>ARTIST</p>
            <h1>YOASOBI</h1>
            <div className='artist-detail'>
              <p className='followers' style={{ userSelect: 'none' }}>
                {/* {user.followers.total} {(user.followers.total === 1) ? 'Follower' : 'Followers'} */}
                10 Followers
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Artist