import React from 'react'
import { millisecondsToMinutes } from '../../utils/millisecondsToMinutes'

import './index.css'

const SongBanner = ({ songName, image, duration }) => {

  return (
    <div className='song-banner'>
      <div className='song-header-banner'>
        <div className='cover'>
          <div className='song-image'>
            <img
              src={image}
              alt='Song Cover'
              draggable='false'
            />
          </div>
          <div className='song-title'>
            <h1>{songName}</h1>
            <p>{millisecondsToMinutes(duration)}</p>
          </div>
        </div>
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