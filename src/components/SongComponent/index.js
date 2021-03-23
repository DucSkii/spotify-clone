import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUri, setPlaying } from '../../redux/ducks/userReducer'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import { millisecondsToMinutes } from '../../utils/millisecondsToMinutes'
import { Link } from 'react-router-dom'

import './index.css'

const SongComponent = ({ index, songName, songId, artists, album, albumId, duration, uri }) => {

  const dispatch = useDispatch()

  const [hovered, setHovered] = useState(false)

  const renderArtists = () => {
    if (artists.length === 1) {
      return (
        <Link to={`/artist/${artists[0].id}`} className='songComponent-artist'>
          <p id='link'>{artists[0].name}</p>
        </Link>
      )
    } else {
      return artists.map((artist, index) => {
        if (index !== artists.length - 1) {
          return (
            <div key={index} className='songComponent-artist'>
              <Link className='songComponent-artist' to={`/artist/${artist.id}`}>
                <p id='link'>{artist.name}</p>
              </Link>
              <div className='songComponent-comma'>,</div>
            </div>
          )
        } else {
          return (
            <Link key={index} to={`/artist/${artist.id}`} className='songComponent-artist'>
              <p id='link' key={index}>{artist.name}</p>
            </Link>
          )
        }
      })
    }
  }

  const handlePlayer = (id) => {
    if (id === 'link') {
      return null
    } else {
      dispatch(setUri(uri))
      setTimeout(() => {
        dispatch(setPlaying(true))
      }, 500)
    }
  }

  return (
    <div
      className='songComponent'
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={(e) => handlePlayer(e.target.id)}
    >
      <p style={{ width: '3%', textAlign: 'center', fontWeight: '700' }}>
        {hovered ? <PlayArrowIcon style={{ color: 'white' }} /> : index}
      </p>
      <p style={{ width: '42%', maxWidth: '42%', color: 'white' }}>
        <Link id='link' className='songComponent-song' to={`/track/${songId}`} style={{ color: 'white' }}>
          {songName}
        </Link>
      </p>
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
          <p id='link'>{album}</p>
        </Link>
      </div>
      <p style={{ width: '5%', textAlign: 'center' }}>{millisecondsToMinutes(duration)}</p>
    </div>
  )
}

export default SongComponent