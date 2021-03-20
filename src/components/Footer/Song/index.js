import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { openCover } from '../../../redux/ducks/generalReducer'
import ExpandLessOutlinedIcon from '@material-ui/icons/ExpandLessOutlined'

import './index.css'

const Song = ({ cover, artists, song, id }) => {

  const dispatch = useDispatch()
  const coverOpen = useSelector(state => state.general.coverOpen)

  const renderArtists = () => {
    if (artists?.length === 1) {
      return (
        <Link
          to={`/artist/${artists[0].id}`}
          className='song-desc-artists-last'
        >
          <p>{artists[0].name}</p>
        </Link>
      )
    }
    return artists?.map((artist, index) => {
      if (index === artists.length - 1) {
        return (
          <Link
            to={`/artist/${artist.id}`}
            className='song-desc-artists-last'
          >
            <p key={index}>{artist.name}</p>
          </Link>
        )
      }
      return (
        <div key={index} className='song-desc-artists-container'>
          <Link
            to={`/artist/${artist.id}`}
            className='song-desc-artists'
            style={{ textDecoration: 'none' }}
          >
            <p>{artist.name}</p>
          </Link>
          ,
        </div>
      )
    })
  }

  return (
    <div className='song'>
      {!coverOpen &&
        <div className='song-cover'>
          <img
            src={cover}
            alt='Song Cover'
            draggable='false'
          />
          <div className='circleIcon' onClick={() => dispatch(openCover())}>
            <ExpandLessOutlinedIcon />
          </div>
        </div>
      }
      <div className={`song-desc ${coverOpen ? 'removeMargin' : ''}`}>
        <Link to={`/track/${id}`} className='songLink'>
          <p>{song}</p>
        </Link>
        <div className='song-desc-artists'>
          {renderArtists()}
        </div>
      </div>
    </div>
  )
}

export default Song