import React, { useState } from 'react'
import PlayButton from '../PlayButton'
import { Link } from 'react-router-dom'

import './index.css'

const AlbumDisplay = ({ image, albumType, releaseDate, title, albumId, playlist = false, name, uri }) => {

  const [hovered, setHovered] = useState(false)

  if (playlist) {
    return (
      <Link
        to={`/playlist/${albumId}`}
        style={{ textDecoration: 'none' }}
      >
        <div
          className='albumDisplay'
          onMouseOver={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className='albumImage'>
            <img
              src={image}
              alt='Album Cover'
              draggable='false'
            />
            {hovered &&
              <div className='albumPlay'>
                <PlayButton uri={uri} />
              </div>
            }
          </div>
          <div className='albumDesc'>
            <h1>{title}</h1>
            <p>By {name}</p>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link
      to={`/album/${albumId}`}
      style={{ textDecoration: 'none' }}
    >
      <div
        className='albumDisplay'
        onMouseOver={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className='albumImage'>
          <img
            src={image}
            alt='Album Cover'
            draggable='false'
          />
          {hovered &&
            <div className='albumPlay'>
              <PlayButton uri={uri} />
            </div>
          }
        </div>
        <div className='albumDesc'>
          <h1>{title}</h1>
          <p>{releaseDate.split('-')[0]} • {albumType[0].toUpperCase() + albumType.slice(1)}</p>
        </div>
      </div>
    </Link>
  )
}

export default AlbumDisplay