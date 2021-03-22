import React, { useState } from 'react'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import { millisecondsToMinutes } from '../../utils/millisecondsToMinutes'
import { Link } from 'react-router-dom'

import './index.css'

const SongComponent = ({ index, songName, songId, artists, album, albumId, duration }) => {

  const [hovered, setHovered] = useState(false)

  const renderArtists = () => {
    if (artists.length === 1) {
      return (
        <Link to={`/artist/${artists[0].id}`} className='songComponent-artist'>
          <p>{artists[0].name}</p>
        </Link>
      )
    } else {
      return artists.map((artist, index) => {
        if (index !== artists.length - 1) {
          return (
            <div key={index} className='songComponent-artist'>
              <Link className='songComponent-artist' to={`/artist/${artist.id}`}>
                <p>{artist.name}</p>
              </Link>
              <div className='songComponent-comma'>,</div>
            </div>
          )
        } else {
          return (
            <Link key={index} to={`/artist/${artist.id}`} className='songComponent-artist'>
              <p key={index}>{artist.name}</p>
            </Link>
          )
        }
      })
    }
  }

  return (
    <div
      className='songComponent'
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <p style={{ width: '3%', textAlign: 'center', fontWeight: '700' }}>
        {hovered ? <PlayArrowIcon style={{ color: 'white' }} /> : index}
      </p>
      <p style={{ width: '42%', maxWidth: '42%', color: 'white' }}>{songName}</p>
      <p style={{ width: '1%' }} />
      <div className='songComponent-artist' style={{ width: '24%', maxWidth: '24%' }}>
        {renderArtists()}
      </div>
      <p style={{ width: '1%' }} />
      <div className='songComponent-album' style={{ width: '24%', maxWidth: '24%' }}>
        <Link
          to={`/album/${albumId}`}
          className='songComponent-album'
        >
          <p>{album}</p>
        </Link>
      </div>
      <p style={{ width: '5%', textAlign: 'center' }}>{millisecondsToMinutes(duration)}</p>
    </div>
  )
}

export default SongComponent