import React from 'react'

import './index.css'

const SongBanner = ({ songName, image }) => {

  return (
    <div className='song-banner'>
      <div className='song-header-banner'>
        {/* <div className='cover'>
          <div className='song-image'>
            <img
              src={image}
              alt='Song Cover'
              draggable='false'
            />
          </div>
          <div className='song-title'>
            <h1>{songName}</h1>
          </div>
        </div> */}
        <img
          src={image}
          alt='Song Cover'
          draggable='false'
        />
      </div>
    </div>
  )
}

export default SongBanner