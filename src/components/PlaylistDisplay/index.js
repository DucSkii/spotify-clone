import React, { useState } from 'react'
import PlayButton from '../PlayButton'
import { Link } from 'react-router-dom'

import './index.css'

const PlaylistDisplay = ({ playlistName, playlistId, playlistImage, uri }) => {

  const [hovered, setHovered] = useState(false)

  return (
    <Link to={`/playlist/${playlistId}`} style={{ textDecoration: 'none' }}>
      <div
        className='playlistDisplay'
        onMouseOver={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className='playlistDisplay-information'>
          <div className='playlistDisplay-image'>
            <img
              src={playlistImage}
              alt='Playlist Cover'
              draggable='false'
            />
          </div>
          <h1>{playlistName}</h1>
        </div>
        {hovered &&
          <div className='playlistDisplay-button'>
            <PlayButton uri={uri} />
          </div>
        }
      </div>
    </Link>
  )
}

export default PlaylistDisplay