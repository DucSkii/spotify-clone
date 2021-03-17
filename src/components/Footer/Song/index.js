import React from 'react'

import './index.css'

const Song = ({ cover, artists, song }) => {

  // const artists = ['Kid Travis', 'Cam Fattore']

  const renderArtists = () => {
    if (artists?.length === 1) {
      return (
        <p>{artists[0]}</p>
      )
    }
    return artists?.map((artist, index) => {
      if (index === artists.length - 1) {
        return (
          <p key={index}>{artist}</p>
        )
      }
      return (
        <div key={index} className='song-desc-artists'>
          <p>{artist}</p>,
        </div>
      )
    })
  }

  return (
    <div className='song'>
      <img
        src={cover}
        alt='Song Cover'
        draggable='false'
      />
      <div className='song-desc'>
        <p>{song}</p>
        <div className='song-desc-artists'>
          {renderArtists()}
        </div>
      </div>
    </div>
  )
}

export default Song