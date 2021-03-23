import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPlaying, setItem, setShuffle, setRepeat, setProgress } from '../../../redux/ducks/userReducer'
import ShuffleIcon from '@material-ui/icons/Shuffle'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import PauseIcon from '@material-ui/icons/Pause'
import RepeatIcon from '@material-ui/icons/Repeat'
import RepeatOneIcon from '@material-ui/icons/RepeatOne'
import { millisecondsToMinutes } from '../../../utils/millisecondsToMinutes'
import Slider from '@material-ui/core/Slider'

import './index.css'

const Control = ({ playing, spotify, shuffle, repeat, item, progress }) => {

  const dispatch = useDispatch()

  const spotifyOpen = useSelector(state => state.general.spotifyOpen)
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
        dispatch(setProgress(track.progress_ms))
        dispatch(setPlaying(true))
        dispatch(setItem(track.item))
      })
    }, 500)
  }

  const skipPrevious = () => {
    spotify.skipToPrevious()
    setTimeout(() => {
      spotify.getMyCurrentPlayingTrack().then(track => {
        dispatch(setProgress(track.progress_ms))
        dispatch(setPlaying(true))
        dispatch(setItem(track.item))
      })
    }, 500)
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

  const handleRepeat = () => {
    if (repeat === 'off') {
      spotify.setRepeat('context')
      dispatch(setRepeat('context'))
    } else if (repeat === 'context') {
      spotify.setRepeat('track')
      dispatch(setRepeat('track'))
    } else {
      spotify.setRepeat('off')
      dispatch(setRepeat('off'))
    }
  }

  const handleAlert = () => {
    window.alert('Please open up spotify to use this feature')
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
          onClick={spotifyOpen ? skipPrevious : handleAlert}
        />
        <div className='play-icon' onClick={spotifyOpen ? handlePause : handleAlert}>
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
          onClick={spotifyOpen ? skipNext : handleAlert}
        />
        {repeat === 'track' ? (
          <RepeatOneIcon
            className='control-button-green'
            fontSize='small'
            style={{ marginLeft: '28px' }}
            onClick={handleRepeat}
          />
        ) : (
          <RepeatIcon
            className={repeat === 'context' ? 'control-button-green' : 'control-button'}
            fontSize='small'
            style={{ marginLeft: '28px' }}
            onClick={handleRepeat}
          />
        )}
      </div>
      <div className='control-time'>
        <p style={{ marginRight: '10px' }}>{millisecondsToMinutes(progress)}</p>
        {/* <div style={{ width: '100%' }}>
          <Slider
            value={progress / item.duration_ms * 100}
          />
        </div> */}
        <div
          className='control-time-bar'
          onMouseOver={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div
            className={`control-time-bar-progress ${hovered ? 'backgroundGreen' : ''}`}
            style={{ width: `${(progress / item.duration_ms) * 100}%` }}
          >
            {hovered &&
              <div className='ball' />
            }
          </div>
        </div>
        <p style={{ marginLeft: '10px' }}>{millisecondsToMinutes(item.duration_ms)}</p>
      </div>
    </div>
  )
}

export default Control