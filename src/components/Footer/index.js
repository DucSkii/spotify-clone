import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { closeCover } from '../../redux/ducks/generalReducer'
import Song from './Song'
import Volume from './Volume'
import Control from './Control'
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined'

import './index.css'

const Footer = ({ spotify }) => {

  const dispatch = useDispatch()
  const songCover = useSelector(state => state.general.coverOpen)
  const item = useSelector(state => state.user.item)
  const playing = useSelector(state => state.user.playing)



  if (!item) {
    return null
  }

  return (
    <div className='footer-container'>
      <div className='footer'>
        <div className='footer-song'>
          <Song
            cover={item.album.images[0].url}
            song={item.name}
            artists={item.artists.map(artist => artist.name)}
          />
        </div>
        <div className='footer-volume'>
          <Volume />
        </div>
      </div>
      <div className='footer-control'>
        <Control playing={playing} spotify={spotify} />
      </div>
      {songCover &&
        <div className='footer-songCover'>
          <img
            src={item.album.images[0].url}
            alt='Song Cover'
            draggable='false'
          />
          <div className='showLess' onClick={() => dispatch(closeCover())}>
            <ExpandMoreOutlinedIcon fontSize='large' />
          </div>
        </div>
      }
    </div>
  )
}

export default Footer