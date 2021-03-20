import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import './index.css'

const Artist = () => {

  const location = useLocation()
  const spotify = useSelector(state => state.user.spotify)
  const [artist, setArtist] = useState(null)

  useEffect(() => {
    spotify.getArtist(location.pathname.split('/')[2]).then(artist => {
      setArtist(artist)
    })
  }, [location.pathname, spotify])

  if (!artist) {
    return null
  }

  return (
    <div className='artist'>
      <div className='artist-header'>
        <div className='artist-header-section'>
          <div className='artist-icon-container'>
            <img
              draggable='false'
              src={artist.images[0].url}
              alt='User Icon'
              style={{ userSelect: 'none' }}
            />
          </div>
          <div className='artist-information'>
            <p>ARTIST</p>
            <h1>{artist.name}</h1>
            <div className='artist-detail'>
              <p className='followers' style={{ userSelect: 'none' }}>
                {artist.followers.total.toLocaleString()} Followers
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Artist