import React, { useState } from 'react'
import PlayButton from '../PlayButton'
import { Link } from 'react-router-dom'

import './index.css'

const AlbumDisplay = ({ image, albumType, releaseDate, title, albumId }) => {
  // https://i.scdn.co/image/ab67616d0000b273c1c8d2889455db6d03d309ed
  // PSYCHODRAMA
  // 4GrFuXwRmEBJec22p58fsD
  // 11
  // Album
  // 2019-03-08
  const [hovered, setHovered] = useState(false)

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
              <PlayButton />
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