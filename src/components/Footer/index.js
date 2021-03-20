import React from 'react'
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
  const shuffle = useSelector(state => state.user.shuffle)
  const repeat = useSelector(state => state.user.repeat)
  const volume = useSelector(state => state.user.volume)
  const progress = useSelector(state => state.user.progress)
  
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
            id={item.id}
          />
        </div>
        <div className='footer-volume'>
          <Volume volume={volume} spotify={spotify} />
        </div>
      </div>
      <div className='footer-control'>
        <Control
          playing={playing}
          spotify={spotify}
          shuffle={shuffle}
          repeat={repeat}
          item={item}
          progress={progress}
        />
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