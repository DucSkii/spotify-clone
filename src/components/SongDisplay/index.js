import React, { useState } from 'react'
import PlayButton from '../PlayButton'
import { Link } from 'react-router-dom'


import './index.css'

const SongDisplay = ({ image, songName, artists, songId, artistId, artist = false, uri }) => {

  const [hovered, setHovered] = useState(false)

  const renderArtists = () => {
    if (artists.length === 1) {
      return (
        <p>{artists[0]}</p>
      )
    } else {
      return artists.map((artist, index) => {
        if (index === artists.length - 1) {
          return (
            <p key={index}>{artist}</p>
          )
        } else {
          return (
            <p key={index} style={{ marginRight: '5px' }}>{artist},</p>
          )
        }
      })
    }
  }

  if (artist) {
    return (
      <Link
        to={`/artist/${artistId}`}
        style={{ textDecoration: 'none', width: '100%', height: '100%', padding: '0px 17px' }}
      >
        <div
          className='songDisplay'
          onMouseOver={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className='songDisplay-image'>
            {hovered &&
              <div className='songDisplay-play'>
                <PlayButton uri={uri} />
              </div>
            }
            <img
              src={image}
              alt='Song Cover'
              draggable='false'
            />
          </div>
          <div className='songDisplay-info'>
            {artists}
            <div className='songDisplay-artists'>
              <p style={{ fontSize: '13px' }}>Artist</p>
            </div>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link to={`/track/${songId}`} style={{ textDecoration: 'none' }}>
      <div
        className='songDisplay'
        onMouseOver={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className='songDisplay-image'>
          {hovered &&
            <div className='songDisplay-play'>
              <PlayButton uri={uri} />
            </div>
          }
          <img
            src={image}
            alt='Song Cover'
            draggable='false'
          />
        </div>
        <div className='songDisplay-info'>
          {songName}
          <div className='songDisplay-artists'>
            {renderArtists()}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default SongDisplay