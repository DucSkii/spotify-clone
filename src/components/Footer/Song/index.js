import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { openCover } from '../../../redux/ducks/generalReducer'
import ExpandLessOutlinedIcon from '@material-ui/icons/ExpandLessOutlined'

import './index.css'

const Song = ({ cover, artists, song }) => {

  const dispatch = useDispatch()
  const coverOpen = useSelector(state => state.general.coverOpen)

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
        <p>{song}</p>
        <div className='song-desc-artists'>
          {renderArtists()}
        </div>
      </div>
    </div>
  )
}

export default Song