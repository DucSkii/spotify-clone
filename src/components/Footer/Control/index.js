import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setPlaying, setItem, setShuffle } from '../../../redux/ducks/userReducer'
import ShuffleIcon from '@material-ui/icons/Shuffle'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import PauseIcon from '@material-ui/icons/Pause'
import RepeatIcon from '@material-ui/icons/Repeat'

import './index.css'

const Control = ({ playing, spotify, shuffle }) => {

  const dispatch = useDispatch()

  const [hovered, setHovered] = useState(false)

  const handlePause = () => {
    if (playing) {
      spotify.pause()
      dispatch(setPlaying(false))
    } else {
      spotify.play()
      dispatch(setPlaying(true))
    }
  }

  const skipNext = () => {
    spotify.skipToNext()
    setTimeout(() => {
      spotify.getMyCurrentPlayingTrack().then(track => {
        dispatch(setPlaying(true))
        dispatch(setItem(track.item))
      })
    }, 400)
  }

  const skipPrevious = () => {
    spotify.skipToPrevious()
    setTimeout(() => {
      spotify.getMyCurrentPlayingTrack().then(track => {
        dispatch(setPlaying(true))
        dispatch(setItem(track.item))
      })
    }, 400)
  }

  const handleShuffle = () => {
    if (shuffle) {
      spotify.setShuffle(false)
      dispatch(setShuffle(false))
    } else {
      spotify.setShuffle(true)
      dispatch(setShuffle(true))
    }
  }

  return (
    <div className='control'>
      <div className='control-buttons'>
        <ShuffleIcon
          className={shuffle ? 'control-button-green' : 'control-button'}
          fontSize='small'
          style={{ marginRight: '28px' }}
          onClick={handleShuffle}
        />
        <SkipPreviousIcon
          className='control-button'
          fontSize='small'
          style={{ marginRight: '28px' }}
          onClick={skipPrevious}
        />
        <div className='play-icon' onClick={handlePause}>
          {playing ? (
            <PauseIcon fontSize='small' />
          ) : (
            <PlayArrowIcon fontSize='small' />
          )}
        </div>
        <SkipNextIcon
          className='control-button'
          fontSize='small'
          style={{ marginLeft: '28px' }}
          onClick={skipNext}
        />
        <RepeatIcon className='control-button' fontSize='small' style={{ marginLeft: '28px' }} />
      </div>
      <div className='control-time'>
        <p style={{ marginRight: '10px' }}>0:00</p>
        <div
          className='control-time-bar'
          onMouseOver={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className={`control-time-bar-progress ${hovered ? 'backgroundGreen' : ''}`} />
        </div>
        <p style={{ marginLeft: '10px' }}>2:30</p>
      </div>
    </div>
  )
}

export default Control